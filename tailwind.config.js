module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      backgroundImage: {
        landing_bg: "url('/landing_bg.svg')",
      },
      colors: {
        water: '#3C91D6', // #009BAA #3b82f6 blue0-500
        earth: '#27D664', // Alt - #008271  #166534 green-800
        fire: '#D64C47', // Alt - #D62727 #b91c1c red-700
        air: '#D68D1C', // #F67E00 #f59e0b amber-500
        soil: '#633A11',
        ether: '#4338ca', // indigo-700
      },
    },
  },
  plugins: [require('@tailwindcss/line-clamp'), require('@tailwindcss/forms')],
}
