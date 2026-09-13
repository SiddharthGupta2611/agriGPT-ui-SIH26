/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: [
          '-apple-system',
          'BlinkMacSystemFont',
          '"SF Pro Text"',
          '"SF Pro Display"',
          '"Segoe UI"',
          'Roboto',
          'sans-serif',
        ],
      },
      colors: {
        brand: {
          50: '#f0fdf4',
          100: '#dcfce7',
          200: '#bbf7d0',
          300: '#86efac',
          400: '#4ade80',
          500: '#22c55e',
          600: '#16a34a',
          700: '#15803d',
          800: '#166534',
          900: '#14532d',
          950: '#052e16',
        }
      },
      boxShadow: {
        'glow-emerald': '0 0 25px -5px rgba(16, 185, 129, 0.3)',
        'glow-amber': '0 0 25px -5px rgba(245, 158, 11, 0.3)',
        'glass-card': '0 8px 32px 0 rgba(0, 0, 0, 0.37)',
      },
      animation: {
        'pulse-subtle': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'wave-bar-1': 'wave 1.2s ease-in-out infinite',
        'wave-bar-2': 'wave 1.4s ease-in-out 0.2s infinite',
        'wave-bar-3': 'wave 1.1s ease-in-out 0.4s infinite',
        'wave-bar-4': 'wave 1.3s ease-in-out 0.1s infinite',
        'wave-bar-5': 'wave 1.5s ease-in-out 0.3s infinite',
        'scan': 'scan 2.5s ease-in-out infinite',
      },
      keyframes: {
        wave: {
          '0%, 100%': { transform: 'scaleY(0.3)' },
          '50%': { transform: 'scaleY(1)' },
        },
        scan: {
          '0%, 100%': { transform: 'translateY(0%)' },
          '50%': { transform: 'translateY(100%)' },
        }
      }
    },
  },
  plugins: [],
}
