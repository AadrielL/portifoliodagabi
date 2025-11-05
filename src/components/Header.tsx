// src/components/Header.tsx - CÓDIGO FINAL COM SMART HEADER

"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '@/context/ThemeContext';
import useScrollDirection from '@/hooks/useScrollDirection'; // 🚨 NOVO HOOK

const Header: React.FC = () => {
    const { currentTheme } = useTheme();
    // 🚨 Usa o hook para saber a direção do scroll
    const scrollDirection = useScrollDirection(10);

    // Define a classe de fundo do header (transparente no topo, sólido ao rolar)
    const isScrolled = scrollDirection !== 'initial';

    // Variantes de animação para aparecer/sumir
    const headerVariants = {
        visible: {
            y: 0,
            opacity: 1,
            transition: { duration: 0.3, ease: "easeInOut" }
        },
        hidden: {
            y: -100, // Move 100px para cima para esconder
            opacity: 0,
            transition: { duration: 0.3, ease: "easeInOut" }
        },
    };

    // Lógica para determinar o estado de animação:
    const animateState = (scrollDirection === 'down' && isScrolled) ? 'hidden' : 'visible';


    return (
        <motion.header
            // 🚨 Aplica as variantes e o estado de animação
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

                {/* 🚨 Adicione um menu Hamburger para mobile se desejar, aqui usamos a versão desktop */}
            </div>
        </motion.header>
    );
};

export default Header;