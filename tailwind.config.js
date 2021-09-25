module.exports = {
  purge: ['./src/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    container: {
      center: true,
      screens: {
        sm: "100%",
        md: "100%",
        lg: "1024px",
        xl: "1280px"
     },
    },
    fontFamily: {
      montserrat: ['Montserrat'],
      openSans: ['Open Sans'],
    },
    extend: {
      colors: {
        'royal-blue': {
          DEFAULT: '#5B4FEF',
          '50': '#FFFFFF',
          '100': '#FFFFFF',
          '200': '#DEDBFC',
          '300': '#B2ACF8',
          '400': '#877EF3',
          '500': '#5B4FEF',
          '600': '#2F20EB',
          '700': '#1F12C6',
          '800': '#180E97',
          '900': '#110969'
        },
        'chateau-green': {
          DEFAULT: '#48AF68',
          '50': '#E7F5EC',
          '100': '#D5EEDD',
          '200': '#B1DFBF',
          '300': '#8DD0A2',
          '400': '#69C184',
          '500': '#48AF68',
          '600': '#398B53',
          '700': '#2A673D',
          '800': '#1B4328',
          '900': '#0D1E12'
        },
        'aquamarine': {
          DEFAULT: '#60F3AB',
          '50': '#FFFFFF',
          '100': '#FFFFFF',
          '200': '#EEFEF6',
          '300': '#BFFADD',
          '400': '#8FF7C4',
          '500': '#60F3AB',
          '600': '#31EF92',
          '700': '#11DC79',
          '800': '#0DAD5F',
          '900': '#097E45'
        },
        'woodsmoke': {
          DEFAULT: '#040505',
          '50': '#6A8585',
          '100': '#5F7676',
          '200': '#485A5A',
          '300': '#313E3E',
          '400': '#1B2121',
          '500': '#040505',
          '600': '#000000',
          '700': '#000000',
          '800': '#000000',
          '900': '#000000'
        },
        'black-squeeze': {
          DEFAULT: '#F4F7FB',
          '50': '#FFFFFF',
          '100': '#FFFFFF',
          '200': '#FFFFFF',
          '300': '#FFFFFF',
          '400': '#FFFFFF',
          '500': '#F4F7FB',
          '600': '#CFDCED',
          '700': '#A9C1E0',
          '800': '#84A5D2',
          '900': '#5E8AC5'
        },
       
        "theme-yellow":'#ffc727',
        "theme-yellow-dark":'#e6b323',
        "theme-dark":'#37474f'
      },

      height:{
        'screen-75':'90vh',
        'screen-50':'50vh'
      }

    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
