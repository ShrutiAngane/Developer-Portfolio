/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  mode:"jit",
  theme: {
    extend: {
      fontFamily:{
        logo: ['Tilt Neon', 'cursive'],
        lobster:['Lobster', 'cursive'],
        bree:['Bree Serif', 'serif']
      },
      animation:{
        ascend:'ascend 1s ease-in'
      },
      boxShadow :{
        custom: '0 0 12px 8px #14b8a6',

      },
      keyframes:{
        ascend:{
          '0%':{transform: 'translateY(0px)',opacity:'0.7'},
          '100%':{transform: 'translateY(2.5rem)',opacity:'1'},
        }
      },
    },
  },
  plugins: [],
}
