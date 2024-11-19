import React from "react";
import { ReactComponent as Imp1 } from "../../images/imp1.svg";
import { ReactComponent as Imp2 } from "../../images/imp2.svg";
import { ReactComponent as Imp3 } from "../../images/imp3.svg";
import { ReactComponent as Imp4 } from "../../images/imp4.svg";

export const Important = () => {
  return (
    <div className="pb-24">
      <div className="container max-w-screen-xl my-0 mx-auto px-3">
        <h2 className="important-title mb-5 text-center text-4xl font-bold">
          Important Things to Consider
        </h2>
        <p className="important-text max-w-xl mb-12 mx-auto">
          Depending on your circumstances and what is important to you, a lease
          could be a great option for your next vehicle. Below are some
          important factors that may influence your decision.
        </p>
        <ul className="important-list grid grid-cols-4">
          <li className="important-item">
            <Imp1 className="mb-5" />
            <p className="important-item-text">
              Monthly payments on leases are <br /> generally 20% - 30% cheaper
              than loans
            </p>
          </li>
          <li className="important-item">
            <Imp2 className="mb-5" />
            <p className="important-item-text">
              You may be eligible for a tax break if you use the leased vehicle
              for business purposes
            </p>
          </li>
          <li className="important-item">
            <Imp3 className="mb-5" />
            <p className="important-item-text">
              Easy to upgrade to the newest vehicle model every few years
            </p>
          </li>
          <li className="important-item">
            <Imp4 className="mb-5" />
            <p className="important-item-text">
              There are often fees charged if you drive more than your lease's
              mileage allowance
            </p>
          </li>
        </ul>
      </div>
    </div>
  );
};
