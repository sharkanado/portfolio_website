import type {Config} from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      "dark-grey": "#1f1f1f",
      purple: "#7a4cff",
      pink: "#be01d0",
      blackTrans: "#0000044",
      black: "#000",
      white: "#fff",
      transparent: "#ffffff00",
    },
    extend: {
      backgroundImage: {
        "text-gradient":
          "linear-gradient(90deg,  rgba(190,1,208,1) 0%, rgba(122,76,255,1) 50%)",
      },
    },
  },
  plugins: [],
};
export default config;
