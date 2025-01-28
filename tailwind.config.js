/** @type {import(tailwindcss).Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  safelist: [
    {
      pattern: /bg-\[url\(.*?\)\]/,
    },
  ],
  theme: {
    extend: {
      colors: {
        alpha: '#e14920', 
        beta: '#708596', 
      },
    },
  },
  plugins: [],
};
