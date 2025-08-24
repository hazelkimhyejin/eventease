module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          500: '#2563eb',
          600: '#1d4ed8',
          700: '#1e40af',
          400: '#60a5fa',
        },
        secondary: {
          500: '#16a34a',
          600: '#15803d',
        },
        accent: {
          purchaser: '#3b82f6',
          organiser: '#22c55e',
          admin: '#8b5cf6',
        },
      },
      boxShadow: {
        'md': '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -2px rgba(0, 0, 0, 0.05)',
        'xl': '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -4px rgba(0, 0, 0, 0.1)',
      },
      fontSize: {
        'base': '1.125rem',
        'xl': '1.5rem',
        '2xl': '1.875rem',
      },
    },
  },
  plugins: [],
};