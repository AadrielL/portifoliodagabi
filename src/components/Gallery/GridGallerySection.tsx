// src/components/Gallery/GridGallerySection.tsx - CÓDIGO FINAL E CORRIGIDO (Tipagem)

"use client";
import React, { useState, useRef, useMemo } from 'react'; // 🚨 Adicionado useMemo
import { motion, useInView } from 'framer-motion';
import Image from 'next/image';
import { useTheme } from '@/context/ThemeContext';


// Importações necessárias
import { GRID_GALLERY_DATA } from '@/data/GalleryData';
import ImageViewerModal from './ImageViewerModal';
import { IPhotoItem } from '@/types/IContent'; // Importe seu tipo IPhotoItem se ainda não fez

// Se o ImageViewerModal usar uma interface ImageItem com ID: number, defina-a aqui para referência:
// (Você deve verificar a interface ImageViewerModalProps no arquivo ImageViewerModal.tsx)
// interface ImageItem {
//     id: number;
//     url: string;
//     description: string;
//     // ... outros campos necessários pelo modal
// }


const GridGallerySection: React.FC = () => {
    const { currentTheme } = useTheme();

    // Animação de Scroll (Fade-in e Slide-up)
    const ref = useRef(null);
    const isInView = useInView(ref, { amount: 0.1 });

    // Estado para o Modal/Lightbox
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedImageIndex, setSelectedImageIndex] = useState(0);

    // Função para abrir o modal
    const handleImageClick = (index: number) => {
        setSelectedImageIndex(index);
        setIsModalOpen(true);
    };

    // 🚨 CORREÇÃO DEFINITIVA: Mapear os dados para garantir que o 'id' seja number para o Modal.
    // Usamos useMemo para garantir que o mapeamento só ocorra uma vez.
    const modalImages = useMemo(() => {
        return GRID_GALLERY_DATA.map((item, index) => ({
            // Forçamos o ID a ser o índice (number) para satisfazer o ImageItem[]
            id: index,
            url: item.url,
            description: item.description,
            // Copie aqui outros campos que o seu Modal possa exigir (ex: theme, ringColor, etc.)
            // Exemplo: theme: item.theme,
        }));
    }, []);


    // Variantes da Animação do Contêiner
    const containerVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.8, staggerChildren: 0.05 } },
    };

    // Variantes para os itens do grid (efeito cascata)
    const itemVariants = {
        hidden: { opacity: 0, scale: 0.9 },
        visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
    };


    return (
        <section id="portfolio" className="py-20 px-4 md:px-8 text-center">

            <motion.h2
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className={`text-5xl font-extrabold mb-12 ${currentTheme.primaryText}`}
            >
                Portfólio de Destaque
            </motion.h2>

            <motion.div
                ref={ref}
                variants={containerVariants}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"} // Animação reversa ao scroll

                // LAYOUT 4x4 (grid-cols-4 em telas grandes)
                className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 max-w-7xl mx-auto"
            >
                {GRID_GALLERY_DATA.map((item, index) => (
                    <motion.div
                        key={item.id}
                        variants={itemVariants}

                        className={`relative group overflow-hidden rounded-lg shadow-lg aspect-square cursor-pointer transition-shadow hover:shadow-2xl hover:shadow-gray-400/50`}
                        onClick={() => handleImageClick(index)}
                    >
                        <Image
                            src={item.url}
                            alt={item.description}
                            fill
                            sizes="(max-width: 768px) 50vw, 25vw"
                            style={{ objectFit: 'cover' }}
                            className="transition-transform duration-300 group-hover:scale-105"
                        />

                        {/* Overlay para "Ver Detalhes" - Reage à cor do tema */}
                        <div className={`absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300`}>
                            <p className={`text-white font-bold text-lg p-2 rounded-full ${currentTheme.buttonBg}`}>
                                Ver Detalhes
                            </p>
                        </div>
                    </motion.div>
                ))}
            </motion.div>

            {/* Modal de Visualização Ampliada */}
            <ImageViewerModal
                isOpen={isModalOpen}
                setIsOpen={setIsModalOpen}
                initialIndex={selectedImageIndex}
                // 🚨 USAR O ARRAY CORRIGIDO
                images={modalImages}
            />
        </section>
    );
};

export default GridGallerySection;