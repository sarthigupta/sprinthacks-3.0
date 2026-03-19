/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        custom: ['SquidGames', 'sans-serif'], // Add your font here
        Poppins: ['Poppins', 'sans-serif'],
        PoppinsBold: ['Poppins-Bold', 'sans-serif'],
      },
      animation: {
        'text-gradient': 'text-gradient 8s linear infinite',
        'text-shimmer': 'text-shimmer 2s ease-in-out infinite alternate',
        'text-glitch': 'text-glitch 2s infinite',
      },
      keyframes: {
        'text-gradient': {
          '0%, 100%': {
            'background-size': '200% 200%',
            'background-position': 'left center'
          },
          '50%': {
            'background-size': '200% 200%',
            'background-position': 'right center'
          }
        },
        'text-shimmer': {
          'from': {
            'backgroundPosition': '0% 0%'
          },
          'to': {
            'backgroundPosition': '200% 0%'
          }
        },
        'text-glitch': {
          '0%': {
            'transform': 'translate(0)'
          },
          '5%': {
            'transform': 'translate(-2px, 2px)'
          },
          '10%': {
            'transform': 'translate(2px, -2px)'
          },
          '15%': {
            'transform': 'translate(-2px, -2px)'
          },
          '20%': {
            'transform': 'translate(2px, 2px)'
          },
          '25%': {
            'transform': 'translate(0)'
          },
          '100%': {
            'transform': 'translate(0)'
          }
        }
      }
    },
  },
  plugins: [],
};
