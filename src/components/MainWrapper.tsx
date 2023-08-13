import React from "react";

const MainWrapper = ({children}: {children: React.ReactNode}) => {
  return (
    <div>
      <div className="container mx-auto">{children}</div>
    </div>
  );
};

export default MainWrapper;
