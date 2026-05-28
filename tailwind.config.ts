import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#00f0ff', // Neon Cyan
          50: '#f0fdfe',
          100: '#cffafe',
          200: '#a5f8ff',
          300: '#67f0ff',
          400: '#22e8ff',
          500: '#00f0ff',
          600: '#00d9e9',
          700: '#00a8c9',
          800: '#0886a1',
          900: '#0a5f7f',
          container: '#051424',
          fixed: '#00f0ff',
          'fixed-dim': '#00dbe9',
        },
        secondary: {
          DEFAULT: '#8000ff', // Deep Purple
          50: '#faf5ff',
          100: '#f3e8ff',
          200: '#e9d5ff',
          300: '#d8b4fe',
          400: '#b888ff',
          500: '#a855f7',
          600: '#8000ff',
          700: '#6d28d9',
          800: '#5b21b6',
          900: '#3f0f5c',
          container: '#1a0b2e',
        },
        surface: {
          DEFAULT: '#051424',
          50: '#f8fafc',
          100: '#f1f5f9',
          200: '#e2e8f0',
          900: '#0f172a',
        },
        'surface-bright': '#2c3a4c',
        'surface-container-lowest': '#010f1f',
        'surface-container-low': '#0d1c2d',
        'surface-container': '#132337',
        'surface-container-high': '#1a2d3a',
        outline: 'rgba(255,255,255,0.1)',
        'on-surface': '#e2e8f0',
        'on-surface-variant': '#94a3b8',
        accent: '#00f0ff',
        success: '#10b981',
        warning: '#f59e0b',
        error: '#ef4444',
      },
      backgroundImage: {
        'glass-gradient': 'linear-gradient(135deg, rgba(255,255,255,0.05) 0%, rgba(255,255,255,0.01) 100%)',
        'neon-gradient': 'linear-gradient(135deg, #00f0ff 0%, #8000ff 100%)',
        'purple-gradient': 'linear-gradient(135deg, #8000ff 0%, #00f0ff 100%)',
        'cyan-gradient': 'linear-gradient(135deg, #00f0ff 0%, #00dbe9 100%)',
        'dark-gradient': 'linear-gradient(180deg, #051424 0%, #0a1628 50%, #051424 100%)',
        'radial-gradient': 'radial-gradient(circle at center, rgba(0,240,255,0.1) 0%, transparent 70%)',
      },
      boxShadow: {
        'neon-glow': '0 0 20px rgba(0,240,255,0.3)',
        'neon-glow-lg': '0 0 40px rgba(0,240,255,0.4)',
        'neon-glow-sm': '0 0 10px rgba(0,240,255,0.2)',
        'purple-glow': '0 0 20px rgba(128,0,255,0.3)',
        'glass-card': '0 8px 32px 0 rgba(0, 0, 0, 0.37)',
        'glass-hover': '0 8px 32px 0 rgba(0, 240, 255, 0.1)',
        'premium': '0 20px 60px rgba(0, 0, 0, 0.5)',
        'inner-glow': 'inset 0 0 20px rgba(0, 240, 255, 0.1)',
      },
      backdropBlur: {
        'xl': '24px',
        '2xl': '32px',
        '3xl': '40px',
      },
      animation: {
        'shimmer': 'shimmer 2s infinite linear',
        'float': 'float 6s ease-in-out infinite',
        'pulse-glow': 'pulseGlow 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'slide-up': 'slideUp 0.5s ease-out',
        'slide-down': 'slideDown 0.5s ease-out',
        'fade-in': 'fadeIn 0.5s ease-out',
        'scale-in': 'scaleIn 0.5s ease-out',
        'bounce-light': 'bounceLight 1s ease-in-out infinite',
        'glow': 'glow 2s ease-in-out infinite',
        'gradient-shift': 'gradientShift 3s ease-in-out infinite',
      },
      keyframes: {
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        pulseGlow: {
          '0%, 100%': { boxShadow: '0 0 20px rgba(0,240,255,0.3)' },
          '50%': { boxShadow: '0 0 40px rgba(0,240,255,0.6)' },
        },
        slideUp: {
          'from': { opacity: '0', transform: 'translateY(20px)' },
          'to': { opacity: '1', transform: 'translateY(0)' },
        },
        slideDown: {
          'from': { opacity: '0', transform: 'translateY(-20px)' },
          'to': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          'from': { opacity: '0' },
          'to': { opacity: '1' },
        },
        scaleIn: {
          'from': { opacity: '0', transform: 'scale(0.95)' },
          'to': { opacity: '1', transform: 'scale(1)' },
        },
        bounceLight: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        glow: {
          '0%, 100%': { opacity: '0.5' },
          '50%': { opacity: '1' },
        },
        gradientShift: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
      },
      transitionTimingFunction: {
        'smooth': 'cubic-bezier(0.4, 0, 0.2, 1)',
        'premium': 'cubic-bezier(0.34, 1.56, 0.64, 1)',
      },
    },
  },
  plugins: [
    require('tailwindcss-animate'),
  ],
};
export default config;