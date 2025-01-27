/** @type {import('tailwindcss').Config} */
import customColors from './src/app/styles/colorPalette/colors.js';
export default {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {
      colors: {
        ...customColors
      }
    }
  },

  plugins: []
};
