// src/constants/Themes.ts - CÓDIGO FINAL COM PALETA PROFISSIONAL E NOMES ATUALIZADOS

export type Theme = {
    bgGradient: string;
    primaryText: string;
    buttonBg: string;
    buttonText: string;
    ringColor: string;
    headerBgScrolled: string;
};

export const THEME_CLASSES: Record<string, Theme> = {
    // 🚨 1. EDITORIAL (Black & White Drama)
    EDITORIAL: {
        bgGradient: 'from-black to-gray-800',
        primaryText: 'text-white',
        buttonBg: 'bg-white',
        buttonText: 'text-black',
        ringColor: 'ring-gray-600',
        headerBgScrolled: 'bg-black/90',
    },
    // 2. LUXO CLÁSSICO (Gelo & Grafite)
    CLASSIC: {
        bgGradient: 'from-gray-100 to-gray-700',
        primaryText: 'text-gray-900',
        buttonBg: 'bg-gray-800',
        buttonText: 'text-white',
        ringColor: 'ring-gray-400',
        headerBgScrolled: 'bg-white/90',
    },
    // 3. NUDE (Nude & Bege)
    NUDE: {
        bgGradient: 'from-white to-rose-100',
        primaryText: 'text-stone-700',
        buttonBg: 'bg-rose-400',
        buttonText: 'text-white',
        ringColor: 'ring-rose-300',
        headerBgScrolled: 'bg-white/90',
    },
    // 4. DOURADO (Capim Dourado Suave)
    GOLD: {
        bgGradient: 'from-yellow-300 to-amber-600',
        primaryText: 'text-black',
        buttonBg: 'bg-amber-800',
        buttonText: 'text-white',
        ringColor: 'ring-yellow-600',
        headerBgScrolled: 'bg-yellow-100/90',
    },
};

// 🚨 NOMES DE TEMA ATUALIZADOS
export const THEME_KEYS = ['EDITORIAL', 'CLASSIC', 'NUDE', 'GOLD'];