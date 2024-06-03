// tailwind.config.js
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
      fontFamily: {
        'hustle': ['HUSTLE ACTLIFE', 'sans-serif'],
        'roboto':['Roboto Medium','sans-serif'],
        'readya':['Redeye Serif W00 Bold','mono'],
        'karatina':['Karantina-Regular','sans-serif'],
        'Mr':['Mr Bold','serif'],
        'arial':['ARIAL','serif']

      },
    },
  },
  plugins: [],
};
