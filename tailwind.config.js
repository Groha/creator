/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
      extend: {
          backgroundImage: {
              'star': "url('./img/star.svg')",
          }
      },
      fontFamily: {
          'Mulish-Regular' : 'Mulish-Regular',
          'Mulish-Light' : 'Mulish-Light',
          'Mulish-Bold' : 'Mulish-Bold',
          'Poppins-Medium' : 'Poppins-Medium',
          'Poppins-SemiBold' : 'Poppins-SemiBold',
      },
      spacing: {
          '0': '0',
          '1': '0.0625rem',
          '2': '0.125rem',
          '3': '0.1875rem',
          '4': '0.25rem',
          '5': '0.3125rem',
          '6': '0.375rem',
          '7': '0.4375rem',
          '8': '0.5rem',
          '9': '0.5625rem',
          '10': '0.625rem',
          '11': '0.6875rem',
          '12': '0.75rem',
          '13': '0.8125rem',
          '14': '0.875rem',
          '15': '0.9375rem',
          '16': '1rem',
          '17': '1.063rem',
          '18': '1.125rem',
          '19': '1.188rem',
          '20': '1.25rem',
          '21': '1.313rem',
          '22': '1.375rem',
          '23': '1.438rem',
          '24': '1.5rem',
          '25': '1.563rem',
          '26': '1.625rem',
          '27': '1.688rem',
          '28': '1.75rem',
          '29': '1.813rem',
          '30': '1.875rem',
          '31': '1.938rem',
          '32': '2rem',
          '33': '2.063rem',
          '34': '2.125rem',
          '35': '2.188rem',
          '36': '2.25rem',
          '37': '2.313rem',
          '38': '2.375rem',
          '39': '2.438rem',
          '40': '2.5rem',
          '41': '2.563rem',
          '42': '2.625rem',
          '43': '2.688rem',
          '44': '2.75rem',
          '45': '2.813rem',
          '46': '2.875rem',
          '47': '2.938rem',
          '48': '3rem',
          '49': '3.063rem',
          '50': '3.125rem',
          '51': '3.188rem',
          '52': '3.25rem',
          '53': '3.313rem',
          '54': '3.375rem',
          '55': '3.438rem',
          '56': '3.5rem',
          '57': '3.563rem',
          '58': '3.625rem',
          '59': '3.688rem',
          '60': '3.75rem',
          '61': '3.813rem',
          '62': '3.875rem',
          '63': '3.938rem',
          '64': '4rem',
          '65': '4.063rem',
          '66': '4.125rem',
          '67': '4.188rem',
          '68': '4.25rem',
          '69': '4.313rem',
          '70': '4.375rem',
          '71': '4.438rem',
          '72': '4.5rem',
          '73': '4.563rem',
          '74': '4.625rem',
          '75': '4.688rem',
          '76': '4.75rem',
          '77': '4.813rem',
          '78': '4.875rem',
          '79': '4.938rem',
          '80': '5rem',
          '81': '5.063rem',
          '82': '5.125rem',
          '83': '5.188rem',
          '84': '5.25rem',
          '85': '5.313rem',
          '86': '5.375rem',
          '87': '5.438rem',
          '88': '5.5rem',
          '89': '5.563rem',
          '90': '5.625rem',
          '91': '5.688rem',
          '92': '5.75rem',
          '93': '5.813rem',
          '94': '5.875rem',
          '95': '5.938rem',
          '96': '6rem',
          '97': '6.063rem',
          '98': '6.125rem',
          '99': '6.188rem',
          '100': '6.25rem',
      },
      colors: {
          transparent: 'transparent',
          'blue': {
              0: '#009ABE',
              1: '#8BD3E6'
          },
          'white': {
              0: '#FFFFFF'
          },
          'dark': {
              0: '#001B2E',
              1: '#131313',
              2: '#031D30',
              3: '#011C2F'
          },
          'gray': {
              0: '#ECEDF1'
          },
          'red': {
              0: '#F82F00'
          }
      },
      screens: {
          'sm': '500px',
          'md': '768px',
          'lg': '1024px',
          'xl': '1280px',
          '2xl': '1440px',
      }
  },
  plugins: [],
}