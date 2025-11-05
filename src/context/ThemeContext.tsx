// src/context/ThemeContext.tsx

"use client";
import React, { createContext, useContext, useState, ReactNode, useCallback, useMemo } from 'react';
import { THEME_CLASSES, THEME_KEYS, Theme } from '@/constants/Themes';

interface ThemeContextType {
    currentIndex: number;
    setThemeIndex: (index: number) => void;
    currentTheme: Theme;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

interface ThemeProviderProps {
    children: ReactNode;
}

export const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
    // currentIndex pode ser negativo ou maior que o número de temas
    const [currentIndex, setCurrentIndex] = useState(0);

    const actualThemeIndex = useMemo(() => {
        const numThemes = THEME_KEYS.length;
        // Lógica de loop infinito para mapear o índice para 0, 1, 2, 3
        return (currentIndex % numThemes + numThemes) % numThemes;
    }, [currentIndex]);

    const currentTheme = useMemo(() => {
        const themeKey = THEME_KEYS[actualThemeIndex];
        return THEME_CLASSES[themeKey];
    }, [actualThemeIndex]);

    const setThemeIndex = useCallback((newIndex: number) => {
        setCurrentIndex(newIndex);
    }, []);

    return (
        <ThemeContext.Provider value={{ currentIndex, setThemeIndex, currentTheme }}>
            {children}
        </ThemeContext.Provider>
    );
};

export const useTheme = () => {
    const context = useContext(ThemeContext);
    if (!context) {
        throw new Error('useTheme must be used within a ThemeProvider');
    }
    return context;
};