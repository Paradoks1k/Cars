import React from "react";

export const Wraper = ({ children }) => {
  return (
    <div className=" container mx-auto py-4 px-2 min-h-full flex flex-col">
      {children}{" "}
    </div>
  );
};
