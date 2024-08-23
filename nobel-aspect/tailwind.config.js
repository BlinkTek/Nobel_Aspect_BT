/** @type {import('tailwindcss').Config} */

const { nextui } = require("@nextui-org/react");

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        siteNeutral: {
          0: "#FFFFFF",
          100: "#F8F9FC",
          200: "#F1F3F9",
          300: "#E1E6EF",
          700: "#3F444D",
          800: "#23272F",
          900: "#1B1F27",
        },
        sitePrimary: {
          100: "#ECFEF6",
          700: "#067A49",
          800: "#05613A",
          900: "#04492C",
        },
        siteRubinRed: {
          100: "#FFE0E6",
          700: "#CA0026",
          800: "#AD0021",
          900: "#7A0017",
        },
        siteSuccess: {
          100: "#EDFDF8",
          700: "#08875D",
          800: "#04724D",
          900: "#066042",
        },
        siteWarning: {
          100: "#FEF4EB",
          700: "#E5730B",
          800: "#CD6709",
          900: "#B05808",
        },
        siteDanger: {
          100: "#FEF1F2",
          700: "#E02D3C",
          800: "#BA2532",
          900: "#981B25",
        },
        siteTextIcon: {
          primary: "#1D2433",
          secondary: "#1D2433CC",
          disabled: "#1D2433A6",
        },
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "bg-gradient": "linear-gradient(180deg, #EBFEF6 0%, #FFE0E6 100%)",
      },
    },
  },
  darkMode: "class",
  plugins: [nextui()],
};
