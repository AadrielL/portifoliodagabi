// src/context/ThemeContext.tsx - CÓDIGO COMPLETO E CORRIGIDO

"use client";
import React, { createContext, useContext, useState, ReactNode, useCallback, useMemo } from 'react';
import { THEME_CLASSES, THEME_KEYS, Theme } from '@/constants/Themes';

interface ThemeContextType {
    currentIndex: number;
    setThemeIndex: (index: number) => void;
    currentTheme: Theme;
    currentThemeKey: string;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

interface ThemeProviderProps {
    children: ReactNode;
}

export const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const actualThemeIndex = useMemo(() => {
        const numThemes = THEME_KEYS.length;
        // Lógica de loop infinito
        return (currentIndex % numThemes + numThemes) % numThemes;
    }, [currentIndex]);

    const currentThemeKey = useMemo(() => {
        return THEME_KEYS[actualThemeIndex];
    }, [actualThemeIndex]);

    const currentTheme = useMemo(() => {
        return THEME_CLASSES[currentThemeKey];
    }, [currentThemeKey]);

    const setThemeIndex = useCallback((newIndex: number) => {
        setCurrentIndex(newIndex);
    }, []);

    // 🚨 BLOCO REMOVIDO: A verificação de "typeof Theme" foi removida,
    // eliminando o erro TS2693.

    return (
        <ThemeContext.Provider value={{ currentIndex, setThemeIndex, currentTheme, currentThemeKey }}>
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