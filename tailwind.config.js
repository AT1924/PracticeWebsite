module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}",],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    colors: {
      'blue': '#ddfffc',
      'purple': '#f2e2ff',
      'pink': '#FEC8D8',
      'orange': '#ff7849',
      'green': '#13ce66',
      'yellow': '#ffffe3',
      'gray-dark': '#273444',
      'lilac': '#e2eeff',
      'gray-light': '#d3dce6',
      'white': '#FFFFFF',
    },
    extend: {
      keyframes: {
        wiggle: {
            '0%, 100%': {
                transform: 'rotate(-3deg)'
            },
            '50%': {
                transform: 'rotate(3deg)'
            },
        }
    },
    animation: {
        wiggle: 'wiggle 1s ease-in-out infinite',
    }
    },
  },
  plugins: [],
}
