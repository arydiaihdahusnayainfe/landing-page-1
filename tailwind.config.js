/** @type {import('tailwindcss').Config} **/
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundColor: {
        section: "#151515",
      },
      backgroundSize: {
        "size-200": "200% 200%",
      },

      screens: {
        "mobile-l": "400px",
        // => @media (min-width: 640px) { ... }
      },
    },
    plugins: [],
  },
};
