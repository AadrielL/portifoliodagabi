// src/app/layout.tsx

import './globals.css';
import { ThemeProvider } from '@/context/ThemeContext';
// Importamos apenas o GeistSans, removendo o GeistMono não utilizado
import { GeistSans } from 'geist/font';
import React from 'react';


// 🚨 CORREÇÃO: Removemos o "=>" e usamos a sintaxe correta de função padrão com "{}"
export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        // Aplicamos a variável da fonte GeistSans no <html>
        <html lang="pt-BR" className={`${GeistSans.variable}`}>
        <body
            className="font-sans antialiased"
        >
        <ThemeProvider>
            {children}
        </ThemeProvider>
        </body>
        </html>
    );
}