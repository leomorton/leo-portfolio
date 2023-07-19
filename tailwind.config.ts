/** @type {import('tailwindcss').Config} */
import theme from "tailwindcss/defaultTheme";

import { type Config } from "tailwindcss";

export default {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        halogenLight: ["halogen-light", "sans-serif"],
        halogenRegular: ["halogen-regular", "sans-serif"],
        halogenBold: ["halogen-bold", "sans-serif"],
        halogenBlack: ["halogen-black", "sans-serif"],
      },
    },
    screens: {
      tiny: { max: "200px" },
      ...theme.screens,
    },
  },
  plugins: [],
} satisfies Config;
