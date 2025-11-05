// src/components/Contact/ContactSection.tsx - CÓDIGO COMPLETO E LIMPO

"use client";
import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { useTheme } from '@/context/ThemeContext';
import { Mail, Phone, MapPin } from 'lucide-react';

const ContactSection: React.FC = () => {
    const { currentTheme } = useTheme();

    // Animação de Scroll (Fade-in e Slide-up/Left)
    const ref = useRef(null);
    const isInView = useInView(ref, { amount: 0.1 });

    const sectionVariants = {
        hidden: { opacity: 0, x: -50 },
        visible: { opacity: 1, x: 0, transition: { duration: 0.8, delay: 0.2 } },
    };

    return (
        <section id="contato" className="py-20 px-4 md:px-8 text-center">
            <motion.div
                ref={ref}
                variants={sectionVariants}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"} // Animação reversa
            >
                <motion.h2
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.6 }}
                    className={`text-5xl font-extrabold mb-12 ${currentTheme.primaryText}`}
                >
                    Entre em Contato
                </motion.h2>

                <div className="max-w-2xl mx-auto space-y-8">
                    <p className="text-xl text-gray-700">
                        Gostaria de discutir seu próximo projeto de fotografia? Ficarei feliz em ajudar a transformar sua visão em realidade.
                    </p>

                    <div className="flex flex-col items-center space-y-4">
                        <a
                            href="mailto:gabriela.carneiro@example.com"
                            className={`flex items-center space-x-2 text-lg hover:underline ${currentTheme.primaryText}`}
                        >
                            <Mail size={24} className={currentTheme.primaryText} />
                            <span>gabriela.carneiro@example.com</span>
                        </a>
                        <a
                            href="tel:+5511987654321"
                            className={`flex items-center space-x-2 text-lg hover:underline ${currentTheme.primaryText}`}
                        >
                            <Phone size={24} className={currentTheme.primaryText} />
                            <span>+55 (11) 98765-4321</span>
                        </a>
                        <p
                            className={`flex items-center space-x-2 text-lg ${currentTheme.primaryText}`}
                        >
                            <MapPin size={24} className={currentTheme.primaryText} />
                            <span>São Paulo, Brasil</span>
                        </p>
                    </div>

                    <motion.button
                        className={`mt-10 ${currentTheme.buttonBg} text-white text-lg font-bold py-3 px-8 rounded-full shadow-lg transition transform hover:scale-105`}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        Enviar Mensagem
                    </motion.button>
                </div>
            </motion.div>
        </section>
    );
};

export default ContactSection;