module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        landing_bg: "url('/landing_bg.svg')",
      },
    },
    colors: {
      water: '#3C91D6', // #009BAA
      earth: '#27D664', // Alt - #008271
      fire: '#D64C47', // Alt - #D62727
      air: '#D68D1C', // #F67E00
      soil: '#633A11',
    },
  },
  plugins: [
    require('@tailwindcss/line-clamp'),
    // ...
  ],
}
