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
      fontSize:{
        '11xl':'11rem',
        '12xl':'12rem',
        '13xl':'13rem',
        '14xl':'14rem',
        '15xl':'15rem',
        '16xl':'16rem'

      },
      fontFamily: {
        'hustle': ['HUSTLE ACTLIFE', 'sans-serif'],
        'roboto':['Roboto Medium','sans-serif'],
        'readya':['Redeye Serif W00 Bold','mono'],
        'karatina':['Karantina-Regular','sans-serif'],
        'Mr':['Mr Bold','serif'],
        'arial':['ARIAL','serif'],
        'Dharma':['Dharma_Gothic_E_Bold']


      },
    },
  },
  plugins: [],
};
