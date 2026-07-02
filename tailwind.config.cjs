// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      animation: {
        'breathe': 'breathe 3s ease-in-out infinite',
      },
      keyframes: {
        breathe: {
          '0%, 100%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(1.03)' },
        }
      }
    },
  },
}
