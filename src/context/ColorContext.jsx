import React, { createContext, useContext, useEffect, useState } from 'react';

const ColorContext = createContext();

export const ColorProvider = ({ children }) => {
    // 'green', 'yellow', or 'orange'
    const [accentColor, setAccentColor] = useState(() => {
        return localStorage.getItem('accentColor') || 'green';
    });

    useEffect(() => {
        const root = window.document.documentElement;

        // Remove old color classes
        root.classList.remove('theme-green', 'theme-yellow', 'theme-orange');

        // Add new color class
        root.classList.add(`theme-${accentColor}`);
        localStorage.setItem('accentColor', accentColor);
    }, [accentColor]);

    // CSS variables for each theme
    const getThemeStyles = () => {
        switch (accentColor) {
            case 'yellow':
                return {
                    '--primary': '#5d08e4ff', // Mac yellow
                    '--primary-hover': '#5f2ab4c0',
                    '--primary-glow': 'rgba(255, 189, 46, 0.15)',
                    '--primary-bg': 'rgba(255, 189, 46, 0.1)',
                };
            case 'orange':
                return {
                    '--primary': '#f0883e', // GitHub orange
                    '--primary-hover': '#c76522',
                    '--primary-glow': 'rgba(240, 136, 62, 0.15)',
                    '--primary-bg': 'rgba(240, 136, 62, 0.1)',
                };
            case 'green':
            default:
                return {
                    '--primary': '#39d353', // GitHub neon green
                    '--primary-hover': '#2ea043',
                    '--primary-glow': 'rgba(57, 211, 83, 0.15)',
                    '--primary-bg': 'rgba(57, 211, 83, 0.1)',
                };
        }
    };

    return (
        <ColorContext.Provider value={{ accentColor, setAccentColor, themeStyles: getThemeStyles() }}>
            <div style={getThemeStyles()} className="contents">
                {children}
            </div>
        </ColorContext.Provider>
    );
};

export const useColorTheme = () => {
    const context = useContext(ColorContext);
    if (context === undefined) {
        throw new Error('useColorTheme must be used within a ColorProvider');
    }
    return context;
};
