module.exports = {
  darkMode: 'class',
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'matte-black': '#28282B',
      },
      linearBorderGradients: {
        directions: { // defaults to these values
          't': 'to top',
          'tr': 'to top right',
          'r': 'to right',
          'br': 'to bottom right',
          'b': 'to bottom',
          'bl': 'to bottom left',
          'l': 'to left',
          'tl': 'to top left',
        },
        colors: { // defaults to {}
          'red': '#f00',
          'orange': '#D35269',
          'lcolor': '#0a66c2',
          'red-blue': ['#f00', '#00f'],
          'blue-orange': ['#2563EB', '#D35269'],
          'orange-blue': ['#D35269', '#2563EB'],
          'blue-green': ['#0000ff', '#00FF00'],
          'red-green-blue': ['#f00', '#0f0', '#00f'],
          'black-white-with-stops': ['#000', '#000 45%', '#fff 55%', '#fff'],
        },
        background: {
          'gray-50': '#F9FAFB',
          'gray-900':'#111827',
          'none':'#0000ff',
          'bl': '#000000',
          'wh': '#ffffff'
        },
        border: { // defaults to these values (optional)
          '1': '1px',
          '2': '2px',
          '4': '6px',
        },
      },
      colors: {
        'orange': '#D35269',
        'lcolor': '#0a66c2'
      },
        backdropBlur: {
          sm: '6px',
        },
        fontFamily: {
          Dosis: ['Dosis', 'sans-serif'],
          RobotoC: ['Roboto Condensed', 'sans-serif'],
          Josefin: ['Josefin Sans', 'sans-serif'],
          Fira: ['Fira Code', 'monospace'],
        },
        fontSize: {
          '1xl': '1.5rem',
        },
      width: {
        '192': '48rem',
        'lg': '56rem',
        'xlg': '400px',
      }
    },
  },
  plugins: [
    require('tailwindcss-border-gradient-radius'),
  ],
}
