// src/components/Header.tsx - CÓDIGO FINAL COMPLETO E CORRIGIDO

"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '@/context/ThemeContext';
import useScrollDirection from '@/hooks/useScrollDirection';

// O componente Header não recebe props, então ele volta a ser um React.FC simples.
const Header: React.FC = () => {
    const { currentTheme } = useTheme();
    const scrollDirection = useScrollDirection(10);
    const isScrolled = scrollDirection !== 'initial';

    // Variantes de animação para aparecer/sumir
    const headerVariants = {
        visible: {
            y: 0,
            opacity: 1,
            // 🚨 CORREÇÃO DE TIPAGEM: Usar a curva de Bézier em vez da string "easeInOut"
            transition: { duration: 0.3, ease: [0.42, 0, 0.58, 1] }
        },
        hidden: {
            y: -100, // Move 100px para cima para esconder
            opacity: 0,
            // 🚨 CORREÇÃO DE TIPAGEM: Usar a curva de Bézier
            transition: { duration: 0.3, ease: [0.42, 0, 0.58, 1] }
        },
    };

    const animateState = (scrollDirection === 'down' && isScrolled) ? 'hidden' : 'visible';

    return (
        <motion.header
            initial="visible"
            animate={animateState}
            variants={headerVariants}

            className={`fixed top-0 left-0 w-full z-50 transition-colors duration-300 ${
                isScrolled
                    ? `shadow-lg backdrop-blur-sm ${currentTheme.headerBgScrolled}`
                    : 'bg-transparent'
            }`}
        >
            <div className="max-w-7xl mx-auto px-4 md:px-8 py-4 flex justify-between items-center">

                {/* Logo/Título */}
                <a href="#apresentacao" className={`text-2xl font-black ${currentTheme.primaryText} transition-colors duration-1000`}>
                    GABRIELA
                </a>

                {/* Links de Navegação */}
                <nav className={`hidden md:flex space-x-8 text-lg font-medium ${currentTheme.primaryText} transition-colors duration-1000`}>
                    <a href="#apresentacao" className="hover:opacity-75 transition">Início</a>
                    <a href="#portfolio" className="hover:opacity-75 transition">Portfólio</a>
                    <a href="#contato" className="hover:opacity-75 transition">Contato</a>
                </nav>
            </div>
        </motion.header>
    );
};

export default Header;