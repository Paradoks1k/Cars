import React from "react";

export const Wraper = ({ children }) => {
  return <div className=" mx-auto min-h-full flex flex-col">{children} </div>;
};
