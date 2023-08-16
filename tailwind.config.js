/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        body: '#f7fafd',
        lightgreen: '#e0f3f3',
        darkgreen: '#5dc2c4',
        lightred: '#ffece8',
        darkred: '#f46d51',
        roundone: '#d9edff',
        roundtwo: '#ffdad9',
        roundthree: '#d9daff',
        textblue: '#365e7b',
        textgrey: '#c6ced5',
      },
      fontFamily: {
        inter: ['Inter', 'sans'],
      },
    },
  },
  plugins: [],
}
