import React, { useCallback, useRef, useState } from 'react';
import {
  Animated, Easing, SafeAreaView, StyleSheet, Text,
  TouchableOpacity, View, useWindowDimensions,
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useTheme } from '@/contexts/ThemeContext';
import ParticleLayer from '@/components/ParticleLayer';
import BoneProgress from '@/components/BoneProgress';
import HotspotButton from '@/components/HotspotButton';
import FactPanel from '@/components/FactPanel';
import ParentPanel from '@/components/ParentPanel';
import { getScene } from '@/components/scenes';
import { Story } from '@/hooks/useStoryApi';

interface Props {
  story: Story;
  onComplete: () => void;
}

export default function CardStackScreen({ story, onComplete }: Props) {
  const t = useTheme();
  const { width, height } = useWindowDimensions();
  const [current, setCurrent] = useState(0);
  const [factVisible, setFactVisible] = useState(false);
  const [parentVisible, setParentVisible] = useState(false);
  const [bedtime, setBedtime] = useState(false);
  const transAnim = useRef(new Animated.Value(1)).current;

  const CARD_W = Math.min(width - 48, 520);
  const CARD_H = Math.min((CARD_W * 4) / 3, height - 180);

  const card = story.cards[current];
  const total = story.cards.length;

  function transition(next: () => void) {
    setFactVisible(false);
    setParentVisible(false);
    Animated.sequence([
      Animated.timing(transAnim, {
        toValue: 0,
        duration: 160,
        easing: Easing.in(Easing.ease),
        useNativeDriver: true,
      }),
      Animated.timing(transAnim, {
        toValue: 1,
        duration: 220,
        easing: Easing.out(Easing.ease),
        useNativeDriver: true,
      }),
    ]).start();
    setTimeout(next, 160);
  }

  const goNext = useCallback(() => {
    if (current >= total - 1) {
      onComplete();
      return;
    }
    transition(() => setCurrent(c => c + 1));
  }, [current, total]);

  const goPrev = useCallback(() => {
    if (current <= 0) return;
    transition(() => setCurrent(c => c - 1));
  }, [current]);

  const cardStyle = {
    opacity: transAnim,
    transform: [
      {
        translateX: transAnim.interpolate({
          inputRange: [0, 1],
          outputRange: [-20, 0],
        }),
      },
      {
        scale: transAnim.interpolate({
          inputRange: [0, 1],
          outputRange: [0.97, 1],
        }),
      },
    ],
  };

  return (
    <View style={[styles.root, { backgroundColor: t.bg }]}>
      <ParticleLayer dimmed={bedtime} />

      {/* Ambient light shafts */}
      <View style={[StyleSheet.absoluteFill, styles.lightShafts]} pointerEvents="none" />

      <SafeAreaView style={styles.shell}>
        {/* Top bar */}
        <View style={styles.topbar}>
          <Text style={[styles.logo, { color: t.amberDim, fontFamily: 'CinzelDecorative_400Regular' }]}>
            BioGraph Stories
          </Text>
          <BoneProgress total={total} current={current} />
          <TouchableOpacity onPress={() => setBedtime(b => !b)} style={[styles.bedtimeBtn, { borderColor: t.textDim }]}>
            <Text style={[styles.bedtimeText, { color: t.textMuted, fontFamily: 'Lora_400Regular' }]}>
              {bedtime ? '☀ Bright' : '☾ Bedtime'}
            </Text>
          </TouchableOpacity>
        </View>

        {/* Card area */}
        <View style={styles.cardArea}>
          {/* Depth shadow layers */}
          <View
            style={[
              styles.cardBase,
              { width: CARD_W, height: CARD_H, backgroundColor: t.surface2, borderColor: 'rgba(200,134,10,0.1)' },
              { transform: [{ translateX: 6 }, { translateY: 6 }, { rotate: '1.2deg' }] },
            ]}
          />
          <View
            style={[
              styles.cardBase,
              { width: CARD_W, height: CARD_H, backgroundColor: t.surface, borderColor: 'rgba(200,134,10,0.08)' },
              { transform: [{ translateX: 3 }, { translateY: 3 }, { rotate: '0.5deg' }] },
            ]}
          />

          {/* Main card */}
          <Animated.View
            style={[
              styles.card,
              {
                width: CARD_W,
                height: CARD_H,
                borderColor: 'rgba(200,134,10,0.25)',
              },
              bedtime && styles.bedtimeDim,
              cardStyle,
            ]}
          >
            {/* SVG scene */}
            {getScene(card.sceneId)}

            {/* Gradient overlay for text readability */}
            <LinearGradient
              colors={['transparent', 'rgba(10,20,8,0.70)', 'rgba(8,16,6,0.90)', 'rgba(5,12,5,0.97)']}
              locations={[0.45, 0.70, 0.82, 1.0]}
              style={StyleSheet.absoluteFill}
              pointerEvents="none"
            />

            {/* Hotspot */}
            {!factVisible && !parentVisible && (
              <HotspotButton
                xPct={card.hotspotX}
                yPct={card.hotspotY}
                cardWidth={CARD_W}
                cardHeight={CARD_H}
                onPress={() => setFactVisible(true)}
              />
            )}

            {/* Parent note button */}
            <TouchableOpacity
              onPress={() => {
                setFactVisible(false);
                setParentVisible(v => !v);
              }}
              style={[styles.parentBtn, { borderColor: t.amberDim, backgroundColor: 'rgba(10,20,8,0.7)' }]}
            >
              <Text style={[styles.parentBtnText, { color: t.amberDim }]}>✦</Text>
            </TouchableOpacity>

            {/* Fact panel — centred overlay */}
            {factVisible && (
              <View style={[StyleSheet.absoluteFill, styles.panelCenter]}>
                <FactPanel text={card.scienceFact} onClose={() => setFactVisible(false)} />
              </View>
            )}

            {/* Parent panel — top-right corner */}
            {parentVisible && <ParentPanel text={card.parentNote} />}

            {/* Card text */}
            <View style={styles.cardContent}>
              <Text style={[styles.cardNumber, { color: t.amberDim, fontFamily: 'CinzelDecorative_400Regular' }]}>
                Card {current + 1} of {total}
              </Text>
              <Text
                style={[
                  styles.cardText,
                  { color: t.text, fontFamily: 'Lora_400Regular' },
                  bedtime && styles.bedtimeText,
                ]}
              >
                {card.narrativeText}
              </Text>
            </View>
          </Animated.View>
        </View>

        {/* Navigation */}
        <View style={styles.nav}>
          <TouchableOpacity
            onPress={goPrev}
            disabled={current === 0}
            style={[styles.navBtn, { borderColor: t.textDim, opacity: current === 0 ? 0.3 : 1 }]}
          >
            <Text style={[styles.navText, { color: t.textMuted, fontFamily: 'Lora_400Regular' }]}>← Back</Text>
          </TouchableOpacity>

          <Text style={[styles.swipeHint, { color: t.textDim, fontFamily: 'CinzelDecorative_400Regular' }]}>
            tap · swipe
          </Text>

          <TouchableOpacity
            onPress={goNext}
            style={[styles.navBtnNext, { borderColor: t.amberDim }]}
          >
            <Text style={[styles.navTextNext, { color: t.amber, fontFamily: 'Lora_400Regular' }]}>
              {current === total - 1 ? 'Finish →' : 'Next →'}
            </Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
  },
  shell: {
    flex: 1,
  },
  lightShafts: {
    opacity: 0.8,
    backgroundColor: 'transparent',
  },
  topbar: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingTop: 12,
    paddingBottom: 10,
    flexShrink: 0,
  },
  logo: {
    fontSize: 10,
    letterSpacing: 1.8,
    textTransform: 'uppercase',
  },
  bedtimeBtn: {
    borderWidth: 0.5,
    borderRadius: 20,
    paddingVertical: 4,
    paddingHorizontal: 12,
  },
  bedtimeText: {
    fontSize: 11,
    letterSpacing: 0.5,
  },
  cardArea: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  cardBase: {
    position: 'absolute',
    borderRadius: 16,
    borderWidth: 0.5,
  },
  card: {
    borderRadius: 16,
    overflow: 'hidden',
    borderWidth: 0.5,
    shadowColor: '#000',
    shadowOpacity: 0.8,
    shadowRadius: 30,
    shadowOffset: { width: 0, height: 8 },
    elevation: 20,
  },
  bedtimeDim: {
    opacity: 0.62,
  },
  parentBtn: {
    position: 'absolute',
    top: 12,
    right: 12,
    width: 30,
    height: 30,
    borderRadius: 15,
    borderWidth: 0.5,
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 6,
  },
  parentBtnText: {
    fontSize: 12,
  },
  panelCenter: {
    justifyContent: 'center',
    zIndex: 10,
  },
  cardContent: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    padding: 24,
    paddingBottom: 20,
    zIndex: 4,
  },
  cardNumber: {
    fontSize: 9,
    letterSpacing: 2,
    textTransform: 'uppercase',
    marginBottom: 8,
  },
  cardText: {
    fontSize: 15,
    lineHeight: 24,
  },
  nav: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 24,
    paddingTop: 12,
    paddingBottom: 16,
    flexShrink: 0,
  },
  navBtn: {
    borderWidth: 0.5,
    borderRadius: 20,
    paddingVertical: 7,
    paddingHorizontal: 20,
  },
  navText: {
    fontSize: 12,
    letterSpacing: 0.5,
  },
  navBtnNext: {
    borderWidth: 0.5,
    borderRadius: 20,
    paddingVertical: 7,
    paddingHorizontal: 28,
  },
  navTextNext: {
    fontSize: 12,
    letterSpacing: 0.5,
  },
  swipeHint: {
    fontSize: 9,
    letterSpacing: 1.2,
    textTransform: 'uppercase',
  },
});
