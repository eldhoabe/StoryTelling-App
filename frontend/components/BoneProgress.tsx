import React from 'react';
import { View, StyleSheet } from 'react-native';
import { useTheme } from '@/contexts/ThemeContext';

interface Props {
  total: number;
  current: number; // 0-based index of active card
}

export default function BoneProgress({ total, current }: Props) {
  const t = useTheme();
  return (
    <View style={styles.row}>
      {Array.from({ length: total }, (_, i) => {
        const active = i === current;
        const done = i < current;
        const color = active ? t.amber : done ? t.amberDim : t.textDim;
        return (
          <View key={i} style={styles.bone}>
            <View style={[styles.knob, { backgroundColor: color }]} />
            <View
              style={[
                styles.shaft,
                { backgroundColor: color },
                active && { shadowColor: t.amber, shadowOpacity: 0.7, shadowRadius: 4 },
              ]}
            />
            <View style={[styles.knob, { backgroundColor: color }]} />
          </View>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
  },
  bone: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  knob: {
    width: 7,
    height: 7,
    borderRadius: 3.5,
  },
  shaft: {
    width: 22,
    height: 8,
    borderRadius: 4,
  },
});
