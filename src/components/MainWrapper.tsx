import React from "react";
import Navbar from "./Navbar";

const MainWrapper = ({children}: {children: React.ReactNode}) => {
  return (
    <div>
      <Navbar />
      <div className="container mx-auto">{children}</div>
    </div>
  );
};

export default MainWrapper;
