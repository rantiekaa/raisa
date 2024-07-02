/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        'pink': '#FF19AC',
        'dark-pink': '#CC009D',
        'primary': '#FF693B',
        'yellow': '#FFB700',
        'purple': '#C300C3',
        'grey': '#F2F2F2',
        'dark-content': '#2A2A2D',
      },
      fontFamily: {
        'peace-sans': ['"Peace Sans"', "sans"]
      },
    },
    screens: {
      'xl': '1536px',
      '2xl': '1920px',
      'lg-cutom':'1024px',
      'ipad':'767px',
      'xxs': '270px',
    }
  },
  plugins: [],
}