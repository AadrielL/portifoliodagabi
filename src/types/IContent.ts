// src/types/IContent.ts - ATUALIZADO

// Define os dados para cada item da Galeria
export interface IPhotoItem {
    id: string;
    url: string; // Caminho da imagem (ex: /1.jpeg)

    // 🚨 ADICIONADO o tema 'Editorial' para corresponder ao novo tema de cor
    theme: 'Editorial' | 'Beauty' | 'Comercial' | 'Projeto' | 'Spring' | 'Summer' | 'Autumn' | 'Winter';

    description: string;
    photographer?: string; // Opcional
    videoUrl?: string;     // Opcional
}

export interface IFlipPageContent {
    pageNumber: number;
    title: string;
    text: string;
}