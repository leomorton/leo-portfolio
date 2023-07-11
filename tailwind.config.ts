/** @type {import('tailwindcss').Config} */
import theme from "tailwindcss/defaultTheme";

import { type Config } from "tailwindcss";

export default {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    fontFamily: {
      halogen: ["halogen", "sans-serif"],
      test: ["Arial"],
    },
    screens: {
      tiny: {'max': '200px'},
      ...theme.screens,
    },
  },
  plugins: [],
} satisfies Config;
