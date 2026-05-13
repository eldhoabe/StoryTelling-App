import React, { useEffect, useRef } from 'react';
import {
  Animated, Easing, StyleSheet, Text, TouchableOpacity, View,
} from 'react-native';
import { useTheme } from '@/contexts/ThemeContext';
import ParticleLayer from '@/components/ParticleLayer';
import { StoryLink } from '@/hooks/useStoryApi';

interface Props {
  unlocks: StoryLink[];
  onRestart: () => void;
}

export default function EndScreen({ unlocks, onRestart }: Props) {
  const t = useTheme();
  const fadeAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 800,
      easing: Easing.out(Easing.ease),
      useNativeDriver: true,
    }).start();
  }, []);

  return (
    <Animated.View style={[styles.container, { backgroundColor: 'rgba(5,12,5,0.97)', opacity: fadeAnim }]}>
      <ParticleLayer />

      <Text style={[styles.world, { color: t.amberDim, fontFamily: 'CinzelDecorative_400Regular' }]}>
        Story Complete
      </Text>
      <Text style={[styles.title, { color: t.text, fontFamily: 'CinzelDecorative_400Regular' }]}>
        The journey continues...
      </Text>
      <Text style={[styles.sub, { color: t.textMuted, fontFamily: 'Lora_400Regular_Italic' }]}>
        Completing this story has unlocked three new worlds to explore.
      </Text>

      {unlocks.map(link => (
        <TouchableOpacity
          key={link.id}
          style={[styles.unlockNode, { backgroundColor: t.surface, borderColor: 'rgba(200,134,10,0.25)' }]}
          activeOpacity={0.8}
        >
          <View
            style={[
              styles.dot,
              {
                backgroundColor: link.dotColor,
                shadowColor: link.dotColor,
                shadowOpacity: 0.5,
                shadowRadius: 6,
              },
            ]}
          />
          <View>
            <Text style={[styles.unlockLabel, { color: t.textDim, fontFamily: 'CinzelDecorative_400Regular' }]}>
              {link.worldLabel}
            </Text>
            <Text style={[styles.unlockName, { color: t.text, fontFamily: 'Lora_400Regular' }]}>
              {link.storyTitle}
            </Text>
          </View>
        </TouchableOpacity>
      ))}

      <TouchableOpacity
        onPress={onRestart}
        style={[styles.restartBtn, { borderColor: t.textDim }]}
        activeOpacity={0.7}
      >
        <Text style={[styles.restartText, { color: t.textMuted, fontFamily: 'Lora_400Regular' }]}>
          ↩ Read again
        </Text>
      </TouchableOpacity>
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 32,
    paddingVertical: 40,
  },
  world: {
    fontSize: 10,
    letterSpacing: 3,
    textTransform: 'uppercase',
    marginBottom: 12,
  },
  title: {
    fontSize: 24,
    textAlign: 'center',
    marginBottom: 10,
  },
  sub: {
    fontSize: 13,
    lineHeight: 20,
    textAlign: 'center',
    marginBottom: 32,
    maxWidth: 320,
  },
  unlockNode: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 16,
    borderWidth: 0.5,
    borderRadius: 12,
    paddingVertical: 16,
    paddingHorizontal: 24,
    marginBottom: 12,
    minWidth: 280,
  },
  dot: {
    width: 10,
    height: 10,
    borderRadius: 5,
    elevation: 4,
  },
  unlockLabel: {
    fontSize: 10,
    letterSpacing: 1.5,
    textTransform: 'uppercase',
    marginBottom: 2,
  },
  unlockName: {
    fontSize: 14,
  },
  restartBtn: {
    marginTop: 24,
    borderWidth: 0.5,
    borderRadius: 20,
    paddingVertical: 7,
    paddingHorizontal: 20,
  },
  restartText: {
    fontSize: 12,
  },
});
