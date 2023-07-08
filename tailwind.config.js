/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.jsx"],
  theme: {
    extend: {
      colors: {
        day: {
          text: "hsl(200, 15%, 8%)",
          input: "hsl(0, 0%, 52%)",
          background: "hsl(0, 0%, 98%)",
          elements: "hsl(0, 0%, 100%)",
          hover: "hsl(0, 0%, 95%)",
        },
        night: {
          text: "hsl(0, 0%, 100%)",
          background: "hsl(207, 26%, 17%)",
          elements: "hsl(209, 23%, 22%)",
          hover: "hsl(209, 23%, 25%)",
        },
      },
    },
  },
  plugins: [],
};
