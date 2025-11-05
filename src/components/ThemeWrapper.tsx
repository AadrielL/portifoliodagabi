// src/components/ThemeWrapper.tsx

"use client";
import React, { ReactNode, useEffect, useState } from 'react';

interface ThemeWrapperProps {
    children: ReactNode;
}

// Este componente garante que o conteúdo dentro dele só será renderizado
// após a hidratação inicial, evitando o Hydration Mismatch.
const ThemeWrapper: React.FC<ThemeWrapperProps> = ({ children }) => {
    const [hasMounted, setHasMounted] = useState(false);

    useEffect(() => {
        // Marcamos como montado apenas no cliente
        setHasMounted(true);
    }, []);

    if (!hasMounted) {
        // Durante o SSR e a hidratação, renderiza um placeholder
        // Para garantir que o HTML inicial seja leve e compatível com o servidor
        return <div style={{ minHeight: '550px' }} />;
    }

    return <>{children}</>;
};

export default ThemeWrapper;