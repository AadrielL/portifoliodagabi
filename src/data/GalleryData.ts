// src/data/GalleryData.ts - CÓDIGO FINAL COM DESCRIÇÕES GENÉRICAS

import { IPhotoItem } from '@/types/IContent';

const DEFAULT_THEME = 'Editorial';
// 🚨 MUDANÇA: Descrição padrão vazia para não aparecer nos cards
const DEFAULT_DESC = '';

// --- DEFINIÇÃO DAS FOTOS (Para Reutilização) ---

const ALL_PHOTOS: Record<string, IPhotoItem> = {
    // 🚨 DESCRIÇÕES DOS CARDS 3D AGORA SÃO VAZIAS
    SPRING: { id: 'intro-1', url: '/images/21.jpeg', theme: 'Editorial', description: DEFAULT_DESC },
    SUMMER: { id: 'intro-2', url: '/images/9.jpeg', theme: 'Editorial', description: DEFAULT_DESC },
    AUTUMN: { id: 'intro-3', url: '/images/5.jpeg', theme: 'Editorial', description: DEFAULT_DESC },
    WINTER: { id: 'intro-4', url: '/images/22.jpeg', theme: 'Editorial', description: DEFAULT_DESC },

    // As 16 fotos restantes para o Grid (Exemplo)
    GRID_A: { id: 'grid-5', url: '/images/5.jpeg', theme: DEFAULT_THEME, description: DEFAULT_DESC },
    GRID_B: { id: 'grid-6', url: '/images/6.jpeg', theme: DEFAULT_THEME, description: DEFAULT_DESC },
    GRID_C: { id: 'grid-7', url: '/images/7.jpeg', theme: DEFAULT_THEME, description: DEFAULT_DESC },
    GRID_D: { id: 'grid-8', url: '/images/8.jpeg', theme: DEFAULT_THEME, description: DEFAULT_DESC },
    GRID_E: { id: 'grid-9', url: '/images/9.jpeg', theme: DEFAULT_THEME, description: DEFAULT_DESC },
    GRID_F: { id: 'grid-10', url: '/images/10.jpeg', theme: DEFAULT_THEME, description: DEFAULT_DESC },
    GRID_G: { id: 'grid-11', url: '/images/11.jpeg', theme: DEFAULT_THEME, description: DEFAULT_DESC },
    GRID_H: { id: 'grid-12', url: '/images/12.jpeg', theme: DEFAULT_THEME, description: DEFAULT_DESC },
    GRID_I: { id: 'grid-13', url: '/images/13.jpeg', theme: DEFAULT_THEME, description: DEFAULT_DESC },
    GRID_J: { id: 'grid-14', url: '/images/14.jpeg', theme: DEFAULT_THEME, description: DEFAULT_DESC },
    GRID_K: { id: 'grid-15', url: '/images/15.jpeg', theme: DEFAULT_THEME, description: DEFAULT_DESC },
    GRID_L: { id: 'grid-16', url: '/images/16.jpeg', theme: DEFAULT_THEME, description: DEFAULT_DESC },
    GRID_M: { id: 'grid-17', url: '/images/17.jpeg', theme: DEFAULT_THEME, description: DEFAULT_DESC },
    GRID_N: { id: 'grid-18', url: '/images/18.jpeg', theme: DEFAULT_THEME, description: DEFAULT_DESC },
    GRID_O: { id: 'grid-19', url: '/images/19.jpeg', theme: DEFAULT_THEME, description: DEFAULT_DESC },
    GRID_P: { id: 'grid-20', url: '/images/20.jpeg', theme: DEFAULT_THEME, description: DEFAULT_DESC },
};

// --- 1. GALERIA 3D (4 itens) ---
export const INTRO_GALLERY_DATA: IPhotoItem[] = [
    ALL_PHOTOS.SPRING,
    ALL_PHOTOS.SUMMER,
    ALL_PHOTOS.AUTUMN,
    ALL_PHOTOS.WINTER,
];

// --- 2. GRID GALLERY (20 itens: 4x5) ---
export const GRID_GALLERY_DATA: IPhotoItem[] = [
    // Reutilizando os 4 do carrossel para completar o total de 20
    ALL_PHOTOS.SPRING,
    ALL_PHOTOS.SUMMER,
    ALL_PHOTOS.AUTUMN,
    ALL_PHOTOS.WINTER,

    // 16 fotos restantes
    ALL_PHOTOS.GRID_A,
    ALL_PHOTOS.GRID_B,
    ALL_PHOTOS.GRID_C,
    ALL_PHOTOS.GRID_D,
    ALL_PHOTOS.GRID_E,
    ALL_PHOTOS.GRID_F,
    ALL_PHOTOS.GRID_G,
    ALL_PHOTOS.GRID_H,
    ALL_PHOTOS.GRID_I,
    ALL_PHOTOS.GRID_J,
    ALL_PHOTOS.GRID_K,
    ALL_PHOTOS.GRID_L,
    ALL_PHOTOS.GRID_M,
    ALL_PHOTOS.GRID_N,
    ALL_PHOTOS.GRID_O,
    ALL_PHOTOS.GRID_P,
];