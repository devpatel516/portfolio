import React, { createContext, useContext, useEffect, useState } from 'react';

const ColorContext = createContext();

const THEMES = {
  green: {
    '--primary': '#00FF88',
    '--primary-hover': '#00CC6A',
    '--primary-glow': 'rgba(0, 255, 136, 0.2)',
    '--primary-dim': 'rgba(0, 255, 136, 0.08)',
  },
  violet: {
    '--primary': '#A78BFA',
    '--primary-hover': '#7C3AED',
    '--primary-glow': 'rgba(167, 139, 250, 0.2)',
    '--primary-dim': 'rgba(167, 139, 250, 0.08)',
  },
  amber: {
    '--primary': '#F59E0B',
    '--primary-hover': '#D97706',
    '--primary-glow': 'rgba(245, 158, 11, 0.2)',
    '--primary-dim': 'rgba(245, 158, 11, 0.08)',
  },
};

export const ColorProvider = ({ children }) => {
  const [accentColor, setAccentColor] = useState(() => {
    return localStorage.getItem('accentColor') || 'green';
  });

  useEffect(() => {
    const root = document.documentElement;
    const vars = THEMES[accentColor] || THEMES.green;
    Object.entries(vars).forEach(([k, v]) => root.style.setProperty(k, v));
    localStorage.setItem('accentColor', accentColor);
  }, [accentColor]);

  return (
    <ColorContext.Provider value={{ accentColor, setAccentColor, themes: Object.keys(THEMES) }}>
      {children}
    </ColorContext.Provider>
  );
};

export const useColorTheme = () => {
  const ctx = useContext(ColorContext);
  if (!ctx) throw new Error('useColorTheme must be used within a ColorProvider');
  return ctx;
};
