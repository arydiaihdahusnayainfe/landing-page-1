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
    },
    plugins: [],
  },
};
