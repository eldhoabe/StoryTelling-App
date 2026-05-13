import React, { useEffect, useRef, useMemo } from 'react';
import { Animated, Easing, StyleSheet, View, useWindowDimensions } from 'react-native';

const N = 55;

interface Particle {
  key: number;
  baseX: number;
  size: number;
  opacity: number;
  duration: number;
  yAnim: Animated.Value;
  xAnim: Animated.Value;
  wobbleAmt: number;
}

function startY(p: Particle, h: number, initial?: number) {
  p.yAnim.setValue(initial !== undefined ? initial : -12);
  Animated.timing(p.yAnim, {
    toValue: h + 20,
    duration: p.duration,
    easing: Easing.linear,
    useNativeDriver: true,
  }).start(({ finished }) => {
    if (finished) startY(p, h);
  });
}

export default function ParticleLayer({ dimmed = false }: { dimmed?: boolean }) {
  const { width: W, height: H } = useWindowDimensions();

  const particles = useMemo<Particle[]>(
    () =>
      Array.from({ length: N }, (_, i) => ({
        key: i,
        baseX: Math.random() * W,
        size: Math.random() * 2.5 + 1,
        opacity: Math.random() * 0.35 + 0.08,
        duration: Math.random() * 12000 + 8000,
        wobbleAmt: Math.random() * 16 + 6,
        yAnim: new Animated.Value(-12),
        xAnim: new Animated.Value(0),
      })),
    []
  );

  useEffect(() => {
    const loops: Animated.CompositeAnimation[] = [];
    particles.forEach(p => {
      // stagger initial Y so screen looks populated immediately
      startY(p, H, Math.random() * H);

      // X wobble: slow sine-like oscillation
      const wDur = p.duration * 0.42;
      const wobble = Animated.loop(
        Animated.sequence([
          Animated.timing(p.xAnim, {
            toValue: p.wobbleAmt,
            duration: wDur,
            easing: Easing.inOut(Easing.sin),
            useNativeDriver: true,
          }),
          Animated.timing(p.xAnim, {
            toValue: -p.wobbleAmt,
            duration: wDur,
            easing: Easing.inOut(Easing.sin),
            useNativeDriver: true,
          }),
        ])
      );
      wobble.start();
      loops.push(wobble);
    });
    return () => {
      loops.forEach(l => l.stop());
      particles.forEach(p => p.yAnim.stopAnimation());
    };
  }, []);

  return (
    <View style={StyleSheet.absoluteFill} pointerEvents="none">
      {particles.map(p => (
        <Animated.View
          key={p.key}
          style={[
            styles.particle,
            {
              left: p.baseX,
              width: p.size * 2,
              height: p.size * 1.1,
              borderRadius: p.size,
              opacity: dimmed ? p.opacity * 0.45 : p.opacity,
              transform: [{ translateY: p.yAnim }, { translateX: p.xAnim }],
            },
          ]}
        />
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  particle: {
    position: 'absolute',
    backgroundColor: 'rgba(220,210,185,1)',
  },
});
