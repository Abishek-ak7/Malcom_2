module.exports = {
  content: [
    './src/**/*.html',
    './src/**/*.js',
    './src/**/*.jsx',
    './src/**/*.ts',
    './src/**/*.tsx',
  ],
  theme: {
    extend: {
      fontSize: {
        '11xl': '11rem',
        '12xl': '12rem',
        '13xl': '13rem',
        '14xl': '14rem',
        '15xl': '15rem',
        '16xl': '16rem',
      },
      animation: {
        fadeInUp: 'fadeInUp 5s ease-in-out forwards',
        fadeInRight: 'fadeInRight 2s ease-in-out forwards',
        fadeInLeft: 'fadeInLeft 2s ease-in-out forwards',
      },
      keyframes: {
        fadeInUp: {
          'from': { opacity: 0, transform: 'translateY(140px)' },
          'to': { opacity: 1, transform: 'translateY(0)' },
        },
        fadeInLeft: {
          'from': { opacity: 0, transform: 'translateX(-120px)' },
          'to': { opacity: 1, transform: 'translateX(0)' },
        },
        fadeInRight: {
          'from': { opacity: 0, transform: 'translateX(120px)' },
          'to': { opacity: 1, transform: 'translateX(0)' },
        },
      },
      // Extend animation delays
      animationDelay: {
        '100': '0.1s',
        '200': '0.2s',
        '300': '0.3s',
        '400': '0.4s',
        '500': '0.5s',
        '600': '0.6s',
        '700': '0.7s',
        '800': '0.8s',
        '900': '0.9s',
      },
      // Add your custom fonts here
      fontFamily: {
        'hustle': ['HUSTLE ACTLIFE', 'sans-serif'],
        'roboto': ['Roboto Medium', 'sans-serif'],
        'readya': ['Redeye Serif W00 Bold', 'mono'],
        'karatina': ['Karantina-Regular', 'sans-serif'],
        'Mr': ['Mr Bold', 'serif'],
        'arial': ['ARIAL', 'serif'],
        'Dharma': ['Dharma_Gothic_E_Bold'],
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      const newUtilities = {
        '.delay-100': { 'animation-delay': '0.1s' },
        '.delay-200': { 'animation-delay': '0.2s' },
        '.delay-300': { 'animation-delay': '0.3s' },
        '.delay-400': { 'animation-delay': '0.4s' },
        '.delay-500': { 'animation-delay': '0.5s' },
        '.delay-600': { 'animation-delay': '0.6s' },
        '.delay-700': { 'animation-delay': '0.7s' },
        '.delay-800': { 'animation-delay': '0.8s' },
        '.delay-900': { 'animation-delay': '0.9s' },
      };
      addUtilities(newUtilities, ['responsive', 'hover']);
    },
  ],
};
