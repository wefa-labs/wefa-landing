module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './lib/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'welcome-image': "url('/images/welcome-gray.png')",
      },
    },
  },

  plugins: [
    require('@tailwindcss/line-clamp'),
    // ...
  ],
}
