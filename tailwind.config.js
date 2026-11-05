/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        display: ['Fredoka', 'system-ui', 'sans-serif'],
        body: ['Nunito', 'system-ui', 'sans-serif'],
      },
      colors: {
        primary: {
          50: '#FFF4EE',
          100: '#FFE4D6',
          300: '#FF9E7A',
          500: '#FF5722',
          600: '#E64A19',
          700: '#BF360C',
          900: '#5D1A06',
        },
        secondary: {
          50: '#EFFBF9',
          100: '#D1F3EE',
          300: '#5EEAD4',
          500: '#0D9488',
          700: '#0F766E',
          900: '#134E4A',
        },
        accent: {
          50: '#FFFBEB',
          100: '#FEF3C7',
          300: '#FCD34D',
          400: '#FBBF24',
        },
        success: {
          50: '#F0FDF4',
          100: '#DCFCE7',
          500: '#16A34A',
          700: '#15803D',
          900: '#14532D',
        },
        warning: {
          50: '#FFFBEB',
          100: '#FEF3C7',
          500: '#F59E0B',
          700: '#B45309',
          900: '#78350F',
        },
        error: {
          50: '#FEF2F2',
          100: '#FEE2E2',
          500: '#DC2626',
          700: '#B91C1C',
          900: '#7F1D1D',
        },
        cream: '#FFF8F1',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-12px)' },
        },
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(16px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        popIn: {
          '0%': { opacity: '0', transform: 'scale(0.9)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
      },
      animation: {
        float: 'float 6s ease-in-out infinite',
        'fade-up': 'fadeUp 0.5s ease-out both',
        'pop-in': 'popIn 0.4s ease-out both',
      },
    },
  },
  plugins: [],
};
