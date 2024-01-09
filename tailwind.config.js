/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  variants: {
    extend: {
      // ...
      backgroundImage: ['hover'],
      textOpacity: ['hover'],
    },
  },
  theme: {
    extend: {
      boxShadow: {
        'custom': '10px 4px 14px 1px rgba(0, 0, 0, 0.50)', // Customize the values as needed
      },
    },
  },
  plugins: [],
}

