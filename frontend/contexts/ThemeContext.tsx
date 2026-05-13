import React, { createContext, useContext } from 'react';

export interface WorldTheme {
  name: string;
  slug: string;
  bg: string;
  bg2: string;
  surface: string;
  surface2: string;
  amber: string;
  amberLt: string;
  amberDim: string;
  text: string;
  textMuted: string;
  textDim: string;
  glow: string;
  particleType: 'ash';
}

export const CRETACEOUS_THEME: WorldTheme = {
  name: 'Cretaceous World',
  slug: 'cretaceous-world',
  bg: '#0d1a0d',
  bg2: '#111f0f',
  surface: '#1a2a14',
  surface2: '#223318',
  amber: '#c8860a',
  amberLt: '#e8a82a',
  amberDim: '#7a4f06',
  text: '#e8dfc8',
  textMuted: '#a09070',
  textDim: '#5a5040',
  glow: 'rgba(200,134,10,0.18)',
  particleType: 'ash',
};

const ThemeContext = createContext<WorldTheme>(CRETACEOUS_THEME);

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  return (
    <ThemeContext.Provider value={CRETACEOUS_THEME}>
      {children}
    </ThemeContext.Provider>
  );
}

export const useTheme = () => useContext(ThemeContext);
