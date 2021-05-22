const colors = require('tailwindcss/colors')

module.exports = {
  purge: {
    enabled: false,
    content: [
      './src/**/*.{js,jsx,ts,tsx}',
      './public/index.html'
    ]
  },
  darkMode: false,
  theme: {
    colors: {
      ...colors,
      primary: '#FF6C1A',
      primaryDark: '#E56117',
      error: '#ea0c00',
      errorDark: '#b91c1c',
      success: '#059669',
      successDark: '#047857'
    },
    fontFamily: {
      'sans': ['Inter', 'ui-sans-serif', 'system-ui']
    },
    extend: {
      transitionProperty: {
        'height': 'height'
      }
    }
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/line-clamp')
  ],
  variants: {
    extend: {
      backgroundColor: ['active'],
      boxShadow: ['active']
    }
  }
}
