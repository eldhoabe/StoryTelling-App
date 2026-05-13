import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { useTheme } from '@/contexts/ThemeContext';

export default function ParentPanel({ text }: { text: string }) {
  const t = useTheme();
  return (
    <View
      style={[
        styles.panel,
        { backgroundColor: 'rgba(6,14,5,0.97)', borderColor: 'rgba(200,134,10,0.2)' },
      ]}
    >
      <Text style={[styles.label, { color: t.amberDim, fontFamily: 'CinzelDecorative_400Regular' }]}>
        For the parent
      </Text>
      <Text style={[styles.text, { color: t.textMuted, fontFamily: 'Lora_400Regular_Italic' }]}>
        {text}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  panel: {
    position: 'absolute',
    top: 56,
    right: 16,
    width: 240,
    borderRadius: 10,
    borderWidth: 0.5,
    padding: 16,
    zIndex: 10,
    shadowColor: '#000',
    shadowOpacity: 0.7,
    shadowRadius: 10,
    shadowOffset: { width: 0, height: 4 },
    elevation: 12,
  },
  label: {
    fontSize: 8,
    letterSpacing: 2,
    textTransform: 'uppercase',
    marginBottom: 8,
  },
  text: {
    fontSize: 12,
    lineHeight: 20,
  },
});
