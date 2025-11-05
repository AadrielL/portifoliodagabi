// src/components/Gallery/PhotoCard.tsx

"use client";
import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { IPhotoItem } from '@/types/IContent';

interface PhotoCardProps {
    item: IPhotoItem;
    isCentered: boolean;
    ringColorClass: string;
}

const PhotoCard: React.FC<PhotoCardProps> = ({ item, isCentered, ringColorClass }) => {

    // Controla o fator de escala e profundidade visual (shadow)
    const scaleFactor = isCentered ? 1.05 : 0.9;
    const shadowClass = isCentered ? 'shadow-2xl ring-4' : 'shadow-md ring-1';

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            // 🚨 w-full h-full para se adaptar ao container pai (Gallery3D)
            className={`w-full h-full p-4`}
        >
            <motion.div
                className={`relative w-full h-full rounded-xl overflow-hidden cursor-pointer 
                            ${shadowClass} 
                            ${isCentered ? ringColorClass : 'ring-gray-300'}`}
                whileHover={{ scale: 1.05 }}
                style={{
                    scale: scaleFactor,
                    transition: 'scale 0.5s ease-in-out, box-shadow 0.3s'
                }}
            >
                {/* 🚨 Next/Image com 'fill' exige um container 'relative w/h full' */}
                <Image
                    src={item.url}
                    alt={item.description}
                    fill
                    sizes="(max-width: 768px) 80vw, 400px"
                    style={{ objectFit: 'cover' }}
                    className="transition-opacity duration-500"
                    priority={isCentered}
                />

                {/* Overlay de Título/Tema */}
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4 text-white">
                    <h3 className="text-lg font-bold">{item.theme}</h3>
                    <p className="text-sm">{item.description}</p>
                </div>
            </motion.div>
        </motion.div>
    );
};

export default PhotoCard;