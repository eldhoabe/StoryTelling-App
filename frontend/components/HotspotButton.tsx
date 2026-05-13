import React, { useEffect, useRef } from 'react';
import { Animated, Easing, TouchableOpacity, StyleSheet, View } from 'react-native';
import { useTheme } from '@/contexts/ThemeContext';

interface Props {
  xPct: number; // 0–100
  yPct: number; // 0–100
  cardWidth: number;
  cardHeight: number;
  onPress: () => void;
}

const SIZE = 28;

export default function HotspotButton({ xPct, yPct, cardWidth, cardHeight, onPress }: Props) {
  const t = useTheme();
  const pulse = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    const anim = Animated.loop(
      Animated.sequence([
        Animated.timing(pulse, {
          toValue: 1,
          duration: 1250,
          easing: Easing.inOut(Easing.ease),
          useNativeDriver: true,
        }),
        Animated.timing(pulse, {
          toValue: 0,
          duration: 1250,
          easing: Easing.inOut(Easing.ease),
          useNativeDriver: true,
        }),
      ])
    );
    anim.start();
    return () => anim.stop();
  }, []);

  const ringScale = pulse.interpolate({ inputRange: [0, 1], outputRange: [1, 1.9] });
  const ringOpacity = pulse.interpolate({ inputRange: [0, 1], outputRange: [0.5, 0] });

  const left = (xPct / 100) * cardWidth - SIZE / 2;
  const top = (yPct / 100) * cardHeight - SIZE / 2;

  return (
    <TouchableOpacity
      onPress={onPress}
      style={[styles.container, { left, top }]}
      activeOpacity={0.85}
    >
      <Animated.View
        style={[
          styles.ring,
          {
            borderColor: t.amber,
            transform: [{ scale: ringScale }],
            opacity: ringOpacity,
          },
        ]}
      />
      <View style={[styles.outer, { backgroundColor: 'rgba(200,134,10,0.25)', borderColor: t.amber }]}>
        <View style={[styles.inner, { backgroundColor: t.amber }]} />
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    width: SIZE,
    height: SIZE,
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 5,
  },
  ring: {
    position: 'absolute',
    width: SIZE,
    height: SIZE,
    borderRadius: SIZE / 2,
    borderWidth: 1.5,
  },
  outer: {
    width: SIZE,
    height: SIZE,
    borderRadius: SIZE / 2,
    borderWidth: 1.5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  inner: {
    width: SIZE - 10,
    height: SIZE - 10,
    borderRadius: (SIZE - 10) / 2,
    opacity: 0.8,
  },
});
