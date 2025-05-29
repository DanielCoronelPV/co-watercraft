/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}", "./node_modules/flowbite/**/*.js"],
  theme: {
    extend: {
      colors: {

      },
    },
  },
  plugins: [
    require("daisyui", "flowbite/plugin"),
    require("tailwindcss-animated"),
  ],
  daisyui: {
    themes: false,
  },
  darkMode: "false",
};
