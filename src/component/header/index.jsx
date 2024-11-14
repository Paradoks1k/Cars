import React from "react";
import { NavMenu } from "../nav-menu";
import { ReactComponent as LogoIcon } from "../../images/logo.svg";

export const Header = () => {
  return (
    <div className="container bg-almost-black max-w-screen-lg my-0 mx-auto px-3">
      <div className="header__inner flex justify-between py-10 items-end">
        <LogoIcon />

        <NavMenu />
      </div>
    </div>
  );
};
