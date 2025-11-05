// src/hooks/useScrollDirection.ts

"use client";
import { useState, useEffect } from 'react';

type ScrollDirection = 'up' | 'down' | 'initial';

const useScrollDirection = (threshold = 10): ScrollDirection => {
    const [scrollDirection, setScrollDirection] = useState<ScrollDirection>('initial');
    const [lastScrollY, setLastScrollY] = useState(0);

    const updateScrollDirection = () => {
        // Obter a posição atual do scroll Y
        const currentScrollY = window.scrollY;

        // Se o scroll atual for 0, o header deve sempre aparecer
        if (currentScrollY === 0) {
            setScrollDirection('initial');
            setLastScrollY(currentScrollY);
            return;
        }

        // Se a diferença no scroll for menor que o threshold, ignoramos
        if (Math.abs(currentScrollY - lastScrollY) < threshold) {
            return;
        }

        // Define a direção do scroll
        const newDirection: ScrollDirection = currentScrollY > lastScrollY ? 'down' : 'up';

        // Atualiza apenas se a direção realmente mudou
        if (newDirection !== scrollDirection) {
            setScrollDirection(newDirection);
        }

        // Atualiza a última posição conhecida do scroll
        setLastScrollY(currentScrollY);
    };

    useEffect(() => {
        window.addEventListener('scroll', updateScrollDirection);
        return () => {
            window.removeEventListener('scroll', updateScrollDirection);
        };
    }, [lastScrollY, threshold]); // Dependências do useEffect

    return scrollDirection;
};

export default useScrollDirection;