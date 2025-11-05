// src/app/page.tsx (FINAL com Header, IDs de Navegação e Aplicação Global do Tema)

"use client";

import { useTheme } from '@/context/ThemeContext';
import ThemeWrapper from '@/components/ThemeWrapper';

// 🚨 Importações dos componentes de seção (Verificadas e Corretas)
import Header from '@/components/Header';
import IntroductionSection from '@/components/IntroductionSection';
import GridGallerySection from '@/components/Gallery/GridGallerySection';
import ContactSection from '@/components/Contact/ContactSection';


function HomePage() {
    const { currentTheme } = useTheme();

    return (
        // O div principal aplica o tema (fundo e cor de texto) globalmente
        <div
            className={`transition-colors duration-1000 min-h-screen bg-gradient-to-br ${currentTheme.bgGradient} ${currentTheme.primaryText}`}
        >
            {/* 🚨 1. HEADER: Renderizado fora do <main> para ser sticky e fixo */}
            <Header />

            <main>
                {/* 2. INTRODUÇÃO: (ID 'apresentacao' é definido na própria seção ou em um wrapper) */}
                <div id="apresentacao">
                    <IntroductionSection />
                </div>

                {/* 3. GALERIA DE GRID: (ID 'portfolio' para o link do Header) */}
                <div id="portfolio">
                    <GridGallerySection />
                </div>

                {/* 4. CONTATO: (ID 'contato' para o link do Header) */}
                <div id="contato">
                    <ContactSection />
                </div>
            </main>
        </div>
    );
}

// O ThemeWrapper garante que HomePage seja renderizado no cliente com o contexto de tema
export default function Page() {
    return (
        <ThemeWrapper>
            <HomePage />
        </ThemeWrapper>
    );
}