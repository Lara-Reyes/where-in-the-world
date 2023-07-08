/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.jsx"],
  theme: {
    extend: {
      colors: {
        day: {
          lightText: "hsl(200, 15%, 8%)",
          lightInput: "hsl(0, 0%, 52%)",
          lightBackground: "hsl(0, 0%, 98%)",
          lightElements: "hsl(0, 0%, 100%)",
        },
        night: {
          darkText: "hsl(0, 0%, 100%)",
          darkBackground: "hsl(207, 26%, 17%)",
          darkElements: "hsl(209, 23%, 22%)",
        },
      },
    },
  },
  plugins: [],
};
