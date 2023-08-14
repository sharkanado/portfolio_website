import React from "react";
import {barlowBold} from "@/src/styles/fonts";

const SectionHeader = ({children}: {children: React.ReactNode}) => {
  return (
    <p
      className={`${barlowBold.className} text-4xl sm:text-5xl uppercase pb-10 gradientText`}
    >
      {children}
    </p>
  );
};

export {SectionHeader};
