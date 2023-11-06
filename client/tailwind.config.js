/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/react/utils/withMT");
module.exports = withMT({
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
     letterSpacing: {
        widest: '.25em',
        wider: '.2em',
        wide: '.1em',
        normal: '0',
        narrow: '-.1em',
        narrower: '-.2em',
        narrowest: '-.3em',
      },
      colors:{
        primary: '#1D5B79',
        secondary : '#2EC0BB',
        heading : '#233036',
        body:'#667074',
        light : '#F6F6F6',
        yellowLight : '#FFF3D9',
        greenLight : '#CCF0EE',
        purpleLight : '#AEA3E1',
      } ,
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
});

