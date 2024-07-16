/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{vue,js,ts}",
    "./components/**/*.{vue,js,ts}",
    "./pages/**/*.{vue,js,ts}",
  ],
  theme: {
    extend: {},
    colors: {
      primary: "#14121f",
      white: "#ffff",
      "dark-gray": "#4a4a4a",
      "light-gray": "#adb5bd",
      "gray-blue": "#6c757d",
      "dark-navy": "#343a40",
    },
  },
  plugins: [],
};
