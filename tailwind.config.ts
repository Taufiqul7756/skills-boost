import type { Config } from "tailwindcss";
import { nextui } from "@nextui-org/react";

const colors = {
  primary: "#131836",
  hero: "#FDFCE8",
  aboutUs: "#FEEFEA",
  sunMode: "#131836",
  textSemiBold: "#007BFF",
};

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ...colors,
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
    // borderRadius: {
    //   "tl-4": "4px 4px 4px 4px",
    // },
    backgroundImage: {
      "footer-pattern": "url('/public/Vector.png')",
    },
    backgroundSize: {
      "size-2": "50%",
    },
    backgroundRepeat: {
      "repeat-2": "repeat",
    },
  },
  darkMode: "class",
  plugins: [nextui()],
};
export default config;
