module.exports = {
  content: [
    './index.html'
  ],
  theme: {
    screens:{
      'sm': '800px',
      // => @media (min-width: 640px) { ... }

      'md': '1000px',
      // => @media (min-width: 768px) { ... }

      'lg': '1200px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1400px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1600px',
      // => @media (min-width: 1536px) { ... }
    },
    extend: {
      screens:{
        '3xl': '1800px'
      }
    },
  },     
  plugins: [],
}
