/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      backgroundImage: {
        'hero-pattern': "url('./assets/wd.jpg')",
    },
  },
  plugins: [],
}
}
