import React, { useEffect, useRef } from 'react';
import {
  Animated, Easing, StyleSheet, Text, TouchableOpacity, View,
} from 'react-native';
import { useTheme } from '@/contexts/ThemeContext';
import ParticleLayer from '@/components/ParticleLayer';
import { Story } from '@/hooks/useStoryApi';

interface Props {
  story: Story;
  onBegin: () => void;
}

export default function WorldPortalScreen({ story, onBegin }: Props) {
  const t = useTheme();

  const worldA  = useRef(new Animated.Value(0)).current;
  const titleA  = useRef(new Animated.Value(0)).current;
  const divA    = useRef(new Animated.Value(0)).current;
  const subA    = useRef(new Animated.Value(0)).current;
  const metaA   = useRef(new Animated.Value(0)).current;
  const btnA    = useRef(new Animated.Value(0)).current;

  function rise(anim: Animated.Value, delay: number) {
    return Animated.timing(anim, {
      toValue: 1,
      duration: 700,
      delay,
      easing: Easing.out(Easing.ease),
      useNativeDriver: true,
    });
  }

  useEffect(() => {
    Animated.stagger(180, [
      rise(worldA, 300),
      rise(titleA, 0),
      rise(divA, 0),
      rise(subA, 0),
      rise(metaA, 0),
      rise(btnA, 0),
    ]).start();
  }, []);

  function animStyle(anim: Animated.Value) {
    return {
      opacity: anim,
      transform: [
        {
          translateY: anim.interpolate({ inputRange: [0, 1], outputRange: [20, 0] }),
        },
      ],
    };
  }

  return (
    <View style={[styles.container, { backgroundColor: 'rgba(5,12,5,0.98)' }]}>
      <ParticleLayer />

      <Animated.Text style={[styles.worldLabel, { color: t.amberDim, fontFamily: 'CinzelDecorative_400Regular' }, animStyle(worldA)]}>
        {story.worldTheme.name}
      </Animated.Text>

      <Animated.Text style={[styles.title, { color: t.text, fontFamily: 'CinzelDecorative_400Regular' }, animStyle(titleA)]}>
        {story.title.replace(' the ', '\nthe ')}
      </Animated.Text>

      <Animated.View style={[styles.divider, { backgroundColor: t.amberDim }, animStyle(divA)]} />

      <Animated.Text style={[styles.subtitle, { color: t.textMuted, fontFamily: 'Lora_400Regular_Italic' }, animStyle(subA)]}>
        {story.subtitle}
      </Animated.Text>

      <Animated.Text style={[styles.meta, { color: t.textDim }, animStyle(metaA)]}>
        {story.cards.length} cards{'  ·  '}{story.readTime}{'  ·  '}{story.ageRange}
      </Animated.Text>

      <Animated.View style={animStyle(btnA)}>
        <TouchableOpacity
          onPress={onBegin}
          style={[styles.beginBtn, { borderColor: t.amberDim }]}
          activeOpacity={0.8}
        >
          <Text style={[styles.beginText, { color: t.amber, fontFamily: 'CinzelDecorative_400Regular' }]}>
            Begin Story
          </Text>
        </TouchableOpacity>
      </Animated.View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 32,
  },
  worldLabel: {
    fontSize: 10,
    letterSpacing: 3.5,
    textTransform: 'uppercase',
    marginBottom: 24,
  },
  title: {
    fontSize: 32,
    lineHeight: 42,
    textAlign: 'center',
    marginBottom: 12,
  },
  divider: {
    width: 60,
    height: 1,
    marginBottom: 20,
    opacity: 0.8,
  },
  subtitle: {
    fontSize: 14,
    textAlign: 'center',
    marginBottom: 16,
  },
  meta: {
    fontSize: 11,
    letterSpacing: 1,
    textAlign: 'center',
    marginBottom: 48,
  },
  beginBtn: {
    borderWidth: 1,
    borderRadius: 30,
    paddingVertical: 14,
    paddingHorizontal: 40,
    shadowColor: 'rgba(200,134,10,0.1)',
    shadowOpacity: 1,
    shadowRadius: 20,
  },
  beginText: {
    fontSize: 12,
    letterSpacing: 2,
    textTransform: 'uppercase',
  },
});
