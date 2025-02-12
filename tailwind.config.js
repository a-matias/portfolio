module.exports = {
  content: [
    './index.html', // Asegúrate de que este archivo se analice
    './src/**/*.{vue,js,ts,jsx,tsx}', // Incluir todos los archivos Vue, JS, TS, JSX, y TSX
    './dist/**/*.html', // Incluir archivos HTML generados en dist (por ejemplo, después de un build)
  ],
  theme: {
    extend: {
      animation: {
        fadeIn: 'fadeIn 1s ease-in-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
}
