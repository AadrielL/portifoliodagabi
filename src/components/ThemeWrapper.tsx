// src/components/ThemeWrapper.tsx - CÓDIGO COMPLETO (Com o export default corrigido)

"use client";
import React, { ReactNode, useEffect, useState } from 'react';
import { ThemeProvider } from '@/context/ThemeContext'; // Importação do provider

interface ThemeWrapperProps {
    children: ReactNode;
}

const ThemeWrapper: React.FC<ThemeWrapperProps> = ({ children }) => {
    // State para resolver o Hydration Mismatch no Next.js App Router
    const [hasMounted, setHasMounted] = useState(false);

    useEffect(() => {
        setHasMounted(true);
    }, []);

    if (!hasMounted) {
        // Renderiza um placeholder vazio no lado do servidor
        return <div style={{ minHeight: '550px' }} />;
    }

    // O ThemeProvider deve envolver o children
    return (
        <ThemeProvider>
            {children}
        </ThemeProvider>
    );
};

// 🚨 ESTA LINHA É CRÍTICA PARA SEU src/app/page.tsx
export default ThemeWrapper;