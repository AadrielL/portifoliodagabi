// src/types/framer.d.ts

import * as React from 'react';
import { MotionProps } from 'framer-motion';

// 🚨 Estende a interface do React para incluir a propriedade 'variants'
// Isso deve ser feito de forma correta, mas a maneira mais simples é forçar a tipagem do elemento.

declare module 'framer-motion' {
    // Declara que a tag 'header' do motion aceita as propriedades de MotionProps
    export interface MotionHeaderProps extends React.HTMLAttributes<HTMLElement>, MotionProps {}
}

// O VS Code geralmente resolve o problema apenas com a declaração acima, mas
// se o seu setup estiver rígido, a solução é forçar o tipo.