import {Montserrat, Barlow} from "next/font/google";

const barlow = Barlow({
  subsets: ["latin"],
  weight: "400",
});

const barlowBold = Barlow({
  subsets: ["latin"],
  weight: "600",
});

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: "400",
});

const montserratBold = Montserrat({
  subsets: ["latin"],
  weight: "600",
});

export {barlow, montserrat, montserratBold, barlowBold};
