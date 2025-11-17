// src/components/IntroductionSection.tsx - Versão FINAL com Foco Simples

"use client";
import React from 'react';
import { motion } from 'framer-motion';

// Importações necessárias:
import Gallery3D from '@/components/Gallery/Gallery3D';
import { useTheme } from '@/context/ThemeContext';

const IntroductionSection: React.FC = () => {
    const { currentTheme } = useTheme();

    // Texto de apresentação simples
    const descriptionText = (
        <p className="text-xl leading-relaxed mb-6 text-gray-700">
            Modelo e jornalista. Foco em projetos que valorizam a beleza natural e a comunicação autêntica.
        </p>
    );

    return (
        <section id="apresentacao" className="py-20 px-4 md:px-8 max-w-7xl mx-auto min-h-screen flex flex-col items-center justify-center pt-24 md:pt-32">
            <div className="flex flex-col lg:flex-row items-center justify-between w-full">

                {/* Lado Esquerdo: Texto de Introdução e Descrição */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1 }}
                    className="lg:w-1/2 lg:pr-12 text-left mb-12 lg:mb-0"
                >
                    <h1
                        className={`text-6xl md:text-8xl font-black mb-6 ${currentTheme.primaryText} transition-colors duration-1000`}
                    >
                        Gabriela <span className="text-gray-900">Carneiro</span>
                    </h1>

                    {/* Renderiza o conteúdo simplificado */}
                    {descriptionText}

                    {/* Botão de Contato */}
                    <motion.a
                        href="#contato"
                        // 🚨 MUDANÇA AQUI: Usa buttonText do tema para garantir contraste
                        className={`mt-6 inline-block ${currentTheme.buttonBg} ${currentTheme.buttonText} text-lg font-bold py-3 px-8 rounded-full shadow-xl transition transform hover:scale-105`}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        Fale Comigo
                    </motion.a>

                </motion.div>

                {/* Lado Direito: Carrossel 3D */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1, delay: 0.3 }}
                    className="lg:w-1/2 flex justify-center perspective-1000"
                >
                    <Gallery3D />
                </motion.div>
            </div>
        </section>
    );
};

export default IntroductionSection;