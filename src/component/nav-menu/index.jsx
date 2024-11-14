import React from "react";

export const NavMenu = () => {
  return (
    <div className="menu ">
      <ul className="menu__list flex space-x-9 ">
        <li className="menu__list-item">
          <a
            className="menu__list-link text-almost-white uppercase font-bold"
            href="#"
          >
            NEW CARS
          </a>
        </li>
        <li className="menu__list-item">
          <a
            className="menu__list-link text-almost-white uppercase font-bold"
            href="#"
          >
            PRE-OWNED CARS
          </a>
        </li>
        <li className="menu__list-item">
          <a
            className="menu__list-link text-almost-white uppercase font-bold"
            href="#"
          >
            FINANCE
          </a>
        </li>
        <li className="menu__list-item">
          <a
            className="menu__list-link text-almost-white uppercase font-bold"
            href="#"
          >
            LEASE VS BUY
          </a>
        </li>
        <li className="menu__list-item">
          <a
            className="menu__list-link text-almost-white uppercase font-bold"
            href="#"
          >
            CONTACT US
          </a>
        </li>
      </ul>
    </div>
  );
};
