import React from "react";

const MainWrapper = ({children}: {children: React.ReactNode}) => {
  return (
    <div>
      <div className="container mx-auto px-5">{children}</div>
    </div>
  );
};

export default MainWrapper;
