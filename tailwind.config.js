const colors = require('tailwindcss/colors')

module.exports = {
  purge: {
    enabled: true,
    content: [
      './src/**/*.{js,jsx,ts,tsx}',
      './public/index.html'
    ]
  },
  darkMode: false,
  theme: {
    colors: {
      ...colors,
      primary: '#0057ff',
      primaryDark: '#0046cc',
      error: '#ea0c00',
      errorDark: '#b91c1c',
      success: '#059669',
      successDark: '#047857'
    },
    fontFamily: {
      'sans': ['Inter', 'ui-sans-serif', 'system-ui']
    }
  },
  variants: {
    extend: {}
  },
  plugins: [
    require('@tailwindcss/line-clamp')
  ]
}
