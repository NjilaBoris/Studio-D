import React from "react";

const Container = ({ children, className }) => {
  return (
    <div className={`max-w-7xl mt-4 w-full mx-auto  ${className}`}>
      {children}
    </div>
  );
};

export default Container;
