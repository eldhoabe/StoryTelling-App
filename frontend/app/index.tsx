import React, { useState } from 'react';
import { ActivityIndicator, StyleSheet, Text, View } from 'react-native';
import { useTheme } from '@/contexts/ThemeContext';
import { useStory } from '@/hooks/useStoryApi';
import WorldPortalScreen from '@/screens/WorldPortalScreen';
import CardStackScreen from '@/screens/CardStackScreen';
import EndScreen from '@/screens/EndScreen';

type Screen = 'portal' | 'cards' | 'end';

export default function StoryApp() {
  const t = useTheme();
  const [screen, setScreen] = useState<Screen>('portal');
  const { story, loading, error } = useStory(1);

  if (loading) {
    return (
      <View style={[styles.center, { backgroundColor: t.bg }]}>
        <ActivityIndicator color={t.amber} size="large" />
      </View>
    );
  }

  if (error || !story) {
    return (
      <View style={[styles.center, { backgroundColor: t.bg }]}>
        <Text style={[styles.errorText, { color: t.amber, fontFamily: 'CinzelDecorative_400Regular' }]}>
          Could not reach the backend.
        </Text>
        <Text style={[styles.errorSub, { color: t.textMuted, fontFamily: 'Lora_400Regular' }]}>
          Make sure the API is running on localhost:5000
        </Text>
      </View>
    );
  }

  if (screen === 'portal') {
    return <WorldPortalScreen story={story} onBegin={() => setScreen('cards')} />;
  }

  if (screen === 'cards') {
    return <CardStackScreen story={story} onComplete={() => setScreen('end')} />;
  }

  return <EndScreen unlocks={story.unlocks} onRestart={() => setScreen('portal')} />;
}

const styles = StyleSheet.create({
  center: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 32,
  },
  errorText: {
    fontSize: 14,
    letterSpacing: 1,
    textAlign: 'center',
    marginBottom: 12,
  },
  errorSub: {
    fontSize: 12,
    textAlign: 'center',
    opacity: 0.7,
  },
});
