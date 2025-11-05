// src/components/Gallery/LightboxModal.tsx
import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface LightboxModalProps {
    src: string;
    alt: string;
    description?: string;
    onClose: () => void;
}

const LightboxModal: React.FC<LightboxModalProps> = ({ src, alt, description, onClose }) => {
    return (
        <AnimatePresence>
            {src && ( // Renderiza apenas se 'src' for fornecido
                <motion.div
                    className="fixed inset-0 bg-black bg-opacity-80 flex justify-center items-center z-50 cursor-pointer p-4"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onClick={onClose}
                >
                    <motion.div
                        className="relative bg-white rounded-lg max-w-3xl max-h-[90vh] overflow-hidden shadow-2xl"
                        initial={{ scale: 0.8, y: 50 }}
                        animate={{ scale: 1, y: 0 }}
                        exit={{ scale: 0.8, y: 50, opacity: 0 }}
                        transition={{ type: "spring", stiffness: 200, damping: 25 }}
                        onClick={(e) => e.stopPropagation()} // Evita fechar ao clicar na imagem
                    >
                        <img src={src} alt={alt} className="w-full h-auto max-h-[70vh] object-contain" />
                        {description && (
                            <div className="p-4 text-gray-800 border-t border-gray-200 text-center">
                                <p className="text-sm">{description}</p>
                            </div>
                        )}
                        <button
                            onClick={onClose}
                            className="absolute top-2 right-2 p-2 text-white bg-gray-800 rounded-full hover:bg-gray-700 transition"
                            aria-label="Fechar"
                        >
                            ✕
                        </button>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default LightboxModal;