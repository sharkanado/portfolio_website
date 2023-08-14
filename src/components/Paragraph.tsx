import React from "react";
import {montserrat} from "@/src/styles/fonts";

const Paragraph = ({
  children,
  align,
}: {
  children: React.ReactNode;
  align: "text-center" | "text-left";
}) => {
  return (
    <p
      className={`${montserrat.className} ${align} leading-loose max-w-5xl sm:text-lg text-md`}
    >
      {children}
    </p>
  );
};

export default Paragraph;
