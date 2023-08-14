import type {Config} from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      grey: "#1f1f1f",
      "dark-grey": "#141414",
      "light-grey": "#ddd",
      purple: "#7a4cff",
      pink: "#be01d0",
      black: "#000",
      white: "#fff",
      transparent: "#ffffff00",
    },
    extend: {
      backgroundImage: {
        "main-bg": "url('/bg.png')",
        "text-gradient":
          "linear-gradient(90deg,  rgba(190,1,208,1) 0%, rgba(122,76,255,1) 50%)",
        "btn-gradient":
          "linear-gradient(90deg, rgba(122,76,255,1) 0%, rgba(66,0,255,1) 100%)",
      },
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        myTheme: {
          "base-100": "#333",
        },
      },
    ],
  },
};
export default config;
