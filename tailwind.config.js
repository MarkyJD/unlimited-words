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
        revealCorrect: {
          '0%': {
            transform: 'rotateX(0deg)',
            borderColor: '#cbd5e1',
          },
          '50%': {
            transform: 'rotateX(90deg)',
            backgroundColor: 'transparent',
            borderColor: '#cbd5e1',
          },
          '100%': {
            transform: 'rotateX(0deg)',
            backgroundColor: '#22c55e',
          },
        },

        revealPresent: {
          '0%': {
            transform: 'rotateX(0deg)',
            backgroundColor: 'transparent',
            borderColor: '#cbd5e1',
          },
          '50%': {
            transform: 'rotateX(90deg)',
            backgroundColor: 'transparent',
            borderColor: '#cbd5e1',
          },
          '100%': {
            transform: 'rotateX(0deg)',
            backgroundColor: '#eab308',
          },
        },

        revealAbsent: {
          '0%': {
            transform: 'rotateX(0deg)',
            backgroundColor: 'transparent',
            borderColor: '#cbd5e1',
          },
          '50%': {
            transform: 'rotateX(90deg)',
            backgroundColor: 'transparent',
            borderColor: '#cbd5e1',
          },
          '100%': {
            transform: 'rotateX(0deg)',
            backgroundColor: '#9ca3af',
          },
        },
      },
      animation: {
        wiggle: 'wiggle 300ms ease-in-out ',
        revealCorrect: 'revealCorrect 1s linear',
        revealPresent: 'revealPresent 1s linear',
        revealAbsent: 'revealAbsent 1s linear',
      },
      fontFamily: {
        hand: ['"Gochi Hand"', 'cursive'],
      },
    },
  },
  plugins: [],
};
