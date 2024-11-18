import React from "react";
import { Slider } from "../Slider";

export const MainSection = () => {
  return (
    <div>
      <div className="top flex grow text-almost-white text-center pt-40 pb-10 absolute z-10 left-0 right-0">
        <div className="container max-w-screen-lg my-0 mx-auto px-3">
          <h1 className="title pt-24 pb-10 text-center text-8xl font-bold">
            Leasing From D&M
          </h1>
          <a
            href="#"
            className="top__link bg-almost-black p-6 max-w-md inline-block uppercase text-3xl font-bold  w-full"
          >
            FIND A CAR
          </a>
        </div>
      </div>
      <Slider />
    </div>
  );
};
