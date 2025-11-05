/** @type {import('tailwindcss').Config} */
module.exports = {
    // 🚨 CORREÇÃO: Informar ao Tailwind onde procurar as classes
    content: [
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/contexts/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/constants/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            fontFamily: {
                // Mantenha a configuração Geist/Next.js
                sans: ['var(--font-geist-sans)', 'sans-serif'],
                mono: ['var(--font-geist-mono)', 'monospace'],
            },
        },
    },
    plugins: [],
}