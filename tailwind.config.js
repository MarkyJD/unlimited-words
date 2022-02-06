module.exports = {
  darkMode: 'class',
  content: ['./src/**/*.{js,jsx}'],
  theme: {
    extend: {
      keyframes: {
        wiggle: {
          '0%, 100%': { transform: 'rotate(-3deg)' },
          '50%': { transform: 'rotate(3deg)' },
        },
      },
      animation: {
        wiggle: 'wiggle 300ms ease-in-out ',
      },
      fontFamily: {
        hand: ['"Gochi Hand"', 'cursive'],
      },
    },
  },
  plugins: [],
};
