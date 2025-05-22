/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'primary-blue': '#005B99',
        'secondary-blue': '#4DA8DA',
        'gray-light': '#F5F6FA',
        'gray-dark': '#2D3748',
        'accent-yellow': '#FFC107',
        'accent-green': '#28A745',
      },
      fontFamily: {
        'poppins': ['Poppins', 'sans-serif'],
        'lato': ['Lato', 'sans-serif'],
      },
      boxShadow: {
        'card': '0 4px 6px rgba(0, 0, 0, 0.1)',
      },
      fontSize: {
        'title-large': '2.25rem',    // 36px
        'title-medium': '1.875rem',  // 30px
        'title-small': '1.5rem',     // 24px
        'subtitle': '1.25rem',       // 20px
        'body': '1rem',              // 16px
        'small': '0.875rem',         // 14px
      },
      spacing: {
        'section': '4rem',           // 64px
        'container': '1200px',
      },
    },
  },
  plugins: [],
} 