// src/components/Gallery/ImageViewerModal.tsx

"use client";
import React, { useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';
import { useTheme } from '@/context/ThemeContext';

interface ImageItem {
    id: number;
    url: string;
    description: string;
}

interface ImageViewerModalProps {
    isOpen: boolean;
    setIsOpen: (isOpen: boolean) => void;
    initialIndex: number;
    images: ImageItem[];
}

const ImageViewerModal: React.FC<ImageViewerModalProps> = ({ isOpen, setIsOpen, initialIndex, images }) => {
    const [currentIndex, setCurrentIndex] = React.useState(initialIndex);
    const { currentTheme } = useTheme();

    // 🚨 Sincroniza o estado interno do modal com o estado inicial da galeria
    useEffect(() => {
        setCurrentIndex(initialIndex);
    }, [initialIndex]);

    const totalImages = images.length;

    // Navegação Circular (Loop)
    const navigate = useCallback((direction: 1 | -1) => {
        setCurrentIndex(prevIndex => {
            let newIndex = prevIndex + direction;
            if (newIndex < 0) {
                newIndex = totalImages - 1;
            } else if (newIndex >= totalImages) {
                newIndex = 0;
            }
            return newIndex;
        });
    }, [totalImages]);

    const handleKeyDown = useCallback((event: KeyboardEvent) => {
        if (!isOpen) return;

        if (event.key === 'ArrowRight') {
            navigate(1);
        } else if (event.key === 'ArrowLeft') {
            navigate(-1);
        } else if (event.key === 'Escape') {
            setIsOpen(false);
        }
    }, [isOpen, navigate, setIsOpen]);

    // Adiciona listener para teclas de navegação
    useEffect(() => {
        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [handleKeyDown]);

    // Fecha o modal ao clicar no overlay escuro
    const handleClose = useCallback(() => {
        setIsOpen(false);
    }, [setIsOpen]);

    // Evita o fechamento ao clicar na imagem em si
    const stopPropagation = (e: React.MouseEvent) => e.stopPropagation();

    if (!isOpen) return null;

    const currentImage = images[currentIndex];

    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    // Overlay (o fundo escuro)
                    className="fixed inset-0 bg-black/80 z-[100] flex items-center justify-center p-4"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onClick={handleClose} // 🚨 Fecha ao clicar fora
                >
                    <motion.div
                        // Container da Imagem
                        className="relative max-w-4xl w-full max-h-[90vh] h-full"
                        initial={{ scale: 0.8 }}
                        animate={{ scale: 1 }}
                        exit={{ scale: 0.8 }}
                        transition={{ type: "spring", stiffness: 300, damping: 30 }}
                        onClick={stopPropagation} // Evita fechar ao clicar na imagem
                    >
                        {/* Imagem Ampliada */}
                        <div className="relative w-full h-full bg-black rounded-lg shadow-2xl overflow-hidden">
                            <Image
                                src={currentImage.url}
                                alt={currentImage.description}
                                fill
                                style={{ objectFit: 'contain' }} // Garante que a imagem caiba
                            />
                        </div>

                        {/* Botão Fechar */}
                        <button
                            onClick={handleClose}
                            className={`absolute top-4 right-4 p-2 rounded-full bg-white/30 backdrop-blur-sm z-10 text-white hover:bg-white/50 transition`}
                            aria-label="Fechar"
                        >
                            <X size={24} />
                        </button>

                        {/* Seta Esquerda */}
                        <button
                            onClick={() => navigate(-1)}
                            className={`absolute left-0 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white/30 backdrop-blur-sm z-10 text-white transition hover:bg-white/50`}
                            aria-label="Anterior"
                        >
                            <ChevronLeft size={32} />
                        </button>

                        {/* Seta Direita */}
                        <button
                            onClick={() => navigate(1)}
                            className={`absolute right-0 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white/30 backdrop-blur-sm z-10 text-white transition hover:bg-white/50`}
                            aria-label="Próximo"
                        >
                            <ChevronRight size={32} />
                        </button>

                        {/* Legenda/Contador (Reage ao Tema) */}
                        <div className={`absolute bottom-0 left-0 right-0 p-4 text-center ${currentTheme.buttonBg} text-white`}>
                            {currentImage.description} ({currentIndex + 1} de {totalImages})
                        </div>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default ImageViewerModal;