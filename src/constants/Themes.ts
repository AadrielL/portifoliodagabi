// src/constants/Themes.ts

export type Theme = {
    bgGradient: string;
    primaryText: string;
    buttonBg: string;
    ringColor: string;
};

export const THEME_CLASSES: Record<string, Theme> = {
    // 1. INVERNO: Baseado na Paleta Azul/Neve
    WINTER: {
        bgGradient: 'from-gray-100 to-blue-100',
        primaryText: 'text-blue-900',
        buttonBg: 'bg-blue-400',
        ringColor: 'ring-blue-300',
    },
    // 2. VERÃO: Baseado na Paleta de Piscina
    SUMMER: {
        bgGradient: 'from-pink-100 to-cyan-200',
        primaryText: 'text-gray-700',
        buttonBg: 'bg-orange-500',
        ringColor: 'ring-orange-400',
    },
    // 3. OUTONO: Baseado na Paleta Terrosa
    AUTUMN: {
        bgGradient: 'from-amber-50 to-red-100',
        primaryText: 'text-red-900',
        buttonBg: 'bg-orange-600',
        ringColor: 'ring-orange-500',
    },
    // 4. PRIMAVERA: Baseado na imagem de Jardim Florido (Seu tema inicial favorito)
    SPRING: {
        bgGradient: 'from-white to-pink-100',
        primaryText: 'text-purple-700',
        buttonBg: 'bg-fuchsia-500',
        ringColor: 'ring-fuchsia-400',
    },
};

// A ordem define qual tema é aplicado a qual slide (slide 0 = SPRING)
export const THEME_KEYS = ['SPRING', 'SUMMER', 'AUTUMN', 'WINTER'];