// src/components/Gallery/Gallery3D.tsx - COMPLETO E CORRIGIDO (Backface)

"use client";
import React, { useMemo, useCallback } from 'react';
import { motion } from 'framer-motion';
import PhotoCard from './PhotoCard';
import { INTRO_GALLERY_DATA } from '@/data/GalleryData';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useTheme } from '@/context/ThemeContext';

// 🚨 Raio ajustado para visão 3D suave (o raio precisa ser maior que metade da largura do card)
const RADIUS = 400; // Valor maior para suavizar a perspectiva
const CARD_COUNT = INTRO_GALLERY_DATA.length;
const ARC = CARD_COUNT > 0 ? 360 / CARD_COUNT : 0;

const Gallery3D: React.FC = () => {
    const { currentIndex, setThemeIndex, currentTheme } = useTheme();

    const handleNext = useCallback(() => {
        // Correção: Garante que a navegação atualize o índice para criar um loop infinito
        setThemeIndex(currentIndex + 1);
    }, [currentIndex, setThemeIndex]);

    const handlePrev = useCallback(() => {
        // Correção: Garante que a navegação atualize o índice para criar um loop infinito
        setThemeIndex(currentIndex - 1);
    }, [currentIndex, setThemeIndex]);

    const itemsWithPositions = useMemo(() => {
        if (CARD_COUNT === 0) return [];

        // Calcula o índice atual no array (0, 1, 2, 3)
        const actualCenterIndex = (currentIndex % CARD_COUNT + CARD_COUNT) % CARD_COUNT;
        const rotationOffset = currentIndex * ARC;

        return INTRO_GALLERY_DATA.map((item, index) => {
            const angle = index * ARC;
            const adjustedAngle = angle - rotationOffset;

            // Fórmulas 3D para posicionamento em círculo
            const x = RADIUS * Math.sin(adjustedAngle * (Math.PI / 180));
            const z = RADIUS * Math.cos(adjustedAngle * (Math.PI / 180)) - RADIUS;
            const rotateY = adjustedAngle * -1;

            return {
                ...item,
                style: {
                    transform: `rotateY(${rotateY}deg) translateZ(${z}px) translateX(${x}px)`,
                },
                isCentered: index === actualCenterIndex,
            };
        });
    }, [currentIndex]);

    return (
        // 🚨 Container Responsivo e com Proporção (Unificado com o Grid)
        <div className="relative flex justify-center items-center w-full max-w-md mx-auto aspect-[3/4]">

            {/* Botões de Navegação */}
            <button
                onClick={handlePrev}
                className={`absolute left-[-20px] top-1/2 -translate-y-1/2 p-3 rounded-full bg-white/70 shadow-lg z-30 hover:bg-white transition ${currentTheme.primaryText}`}
                aria-label="Anterior"
            >
                <ChevronLeft size={24} />
            </button>
            <button
                onClick={handleNext}
                className={`absolute right-[-20px] top-1/2 -translate-y-1/2 p-3 rounded-full bg-white/70 shadow-lg z-30 hover:bg-white transition ${currentTheme.primaryText}`}
                aria-label="Próximo"
            >
                <ChevronRight size={24} />
            </button>

            {/* Container 3D Principal */}
            <motion.div
                className="relative w-full h-full transform-style-preserve-3d"
            >
                {itemsWithPositions.map((item) => (
                    <motion.div
                        key={item.id}
                        // 🚨 CORREÇÃO DE INVERSÃO: Esconde o verso do elemento quando ele gira.
                        className={`absolute w-full h-full [backface-visibility:hidden]`}
                        style={{
                            transform: item.style.transform,
                            transition: 'transform 0.6s ease-in-out',
                        }}
                    >
                        <PhotoCard
                            item={item}
                            isCentered={item.isCentered}
                            ringColorClass={currentTheme.ringColor}
                        />
                    </motion.div>
                ))}
            </motion.div>
        </div>
    );
};

export default Gallery3D;