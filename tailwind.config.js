/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        ivory: {
          DEFAULT: '#faf7f2',
          alt: '#f3ede3',
        },
        card: {
          DEFAULT: '#fffdf9',
          border: '#e8dfd0',
        },
        ink: '#14213d',
        muted: '#6b6a66',
        gold: '#b08d57',
        accent: {
          blue: '#3b82f6',
          purple: '#8b5cf6',
          cyan: '#22d3ee',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
        display: ['Fraunces', 'Georgia', 'serif'],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'hero-gradient': 'linear-gradient(180deg, #faf7f2 0%, #f3ede3 100%)',
        'gold-gradient': 'linear-gradient(135deg, #b08d57, #14213d)',
      },
      borderRadius: {
        card: '14px',
        pill: '999px',
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-out forwards',
        'fade-in-up': 'fadeInUp 0.6s ease-out forwards',
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
      boxShadow: {
        card: '0 12px 40px rgba(20, 33, 61, 0.07)',
      },
    },
  },
  plugins: [],
};
