import React, { useEffect, useRef } from 'react';
import { Animated, Easing, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { useTheme } from '@/contexts/ThemeContext';

interface Props {
  text: string;
  onClose: () => void;
}

export default function FactPanel({ text, onClose }: Props) {
  const t = useTheme();
  const anim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(anim, {
      toValue: 1,
      duration: 300,
      easing: Easing.out(Easing.ease),
      useNativeDriver: true,
    }).start();
  }, []);

  return (
    <Animated.View
      style={[
        styles.panel,
        {
          backgroundColor: 'rgba(8,16,6,0.96)',
          borderColor: 'rgba(200,134,10,0.35)',
          opacity: anim,
          transform: [
            {
              translateY: anim.interpolate({
                inputRange: [0, 1],
                outputRange: [8, 0],
              }),
            },
          ],
        },
      ]}
    >
      <Text style={[styles.label, { color: t.amber, fontFamily: 'CinzelDecorative_400Regular' }]}>
        Scientific fact
      </Text>
      <Text style={[styles.text, { color: t.text, fontFamily: 'Lora_400Regular_Italic' }]}>
        {text}
      </Text>
      <TouchableOpacity onPress={onClose} style={[styles.closeBtn, { borderColor: t.textDim }]}>
        <Text style={[styles.closeText, { color: t.textMuted, fontFamily: 'Lora_400Regular' }]}>
          Close
        </Text>
      </TouchableOpacity>
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  panel: {
    margin: 16,
    borderRadius: 12,
    borderWidth: 0.5,
    padding: 20,
    shadowColor: '#000',
    shadowOpacity: 0.8,
    shadowRadius: 16,
    shadowOffset: { width: 0, height: 4 },
    elevation: 16,
  },
  label: {
    fontSize: 9,
    letterSpacing: 2.5,
    textTransform: 'uppercase',
    marginBottom: 10,
  },
  text: {
    fontSize: 13,
    lineHeight: 22,
  },
  closeBtn: {
    marginTop: 14,
    alignSelf: 'flex-start',
    borderWidth: 0.5,
    borderRadius: 12,
    paddingHorizontal: 14,
    paddingVertical: 4,
  },
  closeText: {
    fontSize: 11,
  },
});
