const colors = require('tailwindcss/colors');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        gray: colors.zinc,
        dark: {
          bg: '#09090b', // Zinc 950 - Deep, neutral black
          card: '#18181b', // Zinc 900 - Subtle card background
          text: '#f4f4f5', // Zinc 100 - High contrast text
          secondary: '#a1a1aa', // Zinc 400 - Muted secondary text
          border: '#27272a', // Zinc 800 - Subtle borders
        },
        primary: {
          50: '#eef2ff',
          100: '#e0e7ff',
          200: '#c7d2fe',
          300: '#a5b4fc',
          400: '#818cf8',
          500: '#667eea',
          600: '#5a67d8',
          700: '#4c51bf',
          800: '#3730a3',
          900: '#312e81',
        },
        accent: {
          400: '#a855f7',
          500: '#764ba2',
          600: '#6b3fa0',
        },
        glow: {
          400: '#f5a0ff',
          500: '#f093fb',
        },
      },
      fontFamily: {
        sans: ['Inter', 'SF Pro Display', 'Helvetica Neue', 'Arial', 'sans-serif'],
        mono: ['JetBrains Mono', 'SF Mono', 'Courier New', 'monospace'],
      },
      animation: {
        'fade-in-up': 'fadeInUp 0.6s ease-out',
        'glow-pulse': 'glowPulse 3s ease-in-out infinite',
      },
      keyframes: {
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        glowPulse: {
          '0%, 100%': { boxShadow: '0 0 5px rgba(102,126,234,0.3)' },
          '50%': { boxShadow: '0 0 20px rgba(102,126,234,0.6)' },
        },
      },
    },
  },
  plugins: [],
  darkMode: 'class',
};
