import daisyui from 'daisyui'
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#3498db',
        secondary: '#f1c40f',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [daisyui],
  daisyui: {
    themes: [
      "light",
      "dark",
      "cupcake",
      {
        mytheme: {
          primary: '#3498db',
          secondary: '#f1c40f',
          accent: '#a569bd',
          neutral: '#3d4451',
          'base-100': '#f9fafb',
          info: '#66d9ef',
          success: '#2ecc71',
          warning: '#f7dc6f',
          error: '#e74c3c',
        },
      },
    ],
  },
}