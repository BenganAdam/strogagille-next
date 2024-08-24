import type { Config } from "tailwindcss";
import { fontFamily } from "tailwindcss/defaultTheme";

export const colors = {
  "primary-dark-grey": "#27272a",
  "primary-grey": "#3c3f48",
  "primary-yellow": "#F9D697",
  "primary-dark-yellow": "#F8B130",
  "primary-red": "#761919d1",
  "primary-woodsmoke": "#16181d",

  "neutrals-black": "#000000",
  "neutrals-grey": "#ccc",
  "neutrals-white": "#fff",
  "black-to-transparent":
    "linear-gradient(to right, rgba(255,0,0,0), rgba(0,0,0,1))",
} as const;

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/lib/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors,
      fontFamily: {
        oswald: ["var(--font-oswald)", ...fontFamily.sans],
        work_sans: ["var(--font-work-sans)", ...fontFamily.serif],
        ibm: ["var(--font-ibm)", ...fontFamily.sans],
        poppins: ["var(--font-poppins)", ...fontFamily.sans],
      },
      transitionProperty: {
        height: "height",
        width: "width",
        colors: "colors",
        "height-width-colors": "height, width, colors",
      },
      keyframes: {
        revealBorder: {
          "0%": { width: "0" },
          "100%": { width: "100%" },
        },
        revealUnderline: {
          "0%": { width: "0" },
          "100%": { width: "100%" },
        },
        spinner: {
          from: {
            transform: "rotate(0deg)",
          },
          to: {
            transform: "rotate(360deg)",
          },
        },
        transformAndRotateTop: {
          "0%": { width: "100%" },
          "50%": {
            width: "10%",
            transform: "rotate(-45deg) translate(-6px, 9px)",
          },
          "100%": {
            width: "100%",
            transform: "rotate(-45deg) translate(-6px, 9px)",
          },
        },
        transformAndRotateBottom: {
          "0%": { width: "100%" },
          "50%": {
            width: "10%",
            transform: "rotate(45deg) translate(-6px, -9px)",
          },
          "100%": {
            width: "100%",
            transform: "rotate(45deg) translate(-6px, -9px);",
          },
        },
      },
      animation: {
        revealBorder: "revealBorder 1s .2s forwards",
        revealUnderline: "revealUnderline .5s .1s forwards",
        logoSpin: "spinner 20s linear infinite",
        resetLogoSpin: "spinner 1s ease-in-out 1",
        burgerToCrossTop: "transformAndRotateTop 0.75s ease-in-out forwards",
        burgerToCrossBottom:
          "transformAndRotateBottom 0.75s ease-in-out forwards",
        crossToBurgerTop:
          "transformAndRotateTop 0.75s ease-in-out forwards reverse",
        crossToBurgerBottom:
          "transformAndRotateBottom 0.75s ease-in-out forwards reverse",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
export default config;
