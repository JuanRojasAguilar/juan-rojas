import { nextui } from "@nextui-org/react";
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "everforest-back": {
          50: "#56635F",
          100: "#4F585E",
          200: "#475258",
          300: "#3D484D",
          400: "#343F44",
          500: "#2D353B",
          red: "#543A48",
          visual: "#514045",
          yellow: "#4D4C43",
          green: "#425047",
          blue: "#3A515D",
          dim: "#232A2E",
        },
        everforest: {
          red: "#E67E80",
          orange: "#E69875",
          yellow: "#DBBC7F",
          green: "#A7C080",
          blue: "#7FBBB3",
          aqua: "#83C092",
          purple: "#D699B6",
        },
        "everforest-front": "#D3C6AA",
        "everforest-statusline": {
          1: "#A7C080",
          2: "#D3C6AA",
          3: "#E67E80",
        },
        "everforest-gray": {
          1: "#7A8478",
          2: "#859289",
          3: "#9DA9A0",
        },
      },
    },
  },
  darkMode: "class",
  plugins: [nextui()],
};
