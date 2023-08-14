import React from "react";
import {montserrat} from "@/src/styles/fonts";
import {SocialLinksHorizontal} from "./SocialLinks";

const Footer = () => {
  return (
    <div
      className={`${montserrat.className} bg-opacity-50 bg-black k py-10 flex justify-center`}
    >
      <SocialLinksHorizontal size={20} />
    </div>
  );
};

export default Footer;
