import React from "react";
import "./style.css";
import { ReactComponent as Why1 } from "../../images/why1.svg";
import { ReactComponent as Why2 } from "../../images/why2.svg";
import { ReactComponent as Why3 } from "../../images/why3.svg";
import { ReactComponent as Why4 } from "../../images/why4.svg";

export const SectionWhyLease = () => {
  return (
    <div className="why-lease py-36">
      <div className="container max-w-screen-xl my-0 mx-auto px-3 left-0 right-0">
        <h2 className="section-title mb-12 text-5xl font-bold text-center">
          Why Lease with D&M?
        </h2>
        <ul className="why-lease__list grid grid-cols-4 gap-10 text-center">
          <li className="why-lease__item">
            <Why1 className="mb-7 ml-20" />
            <h3 className="why-lease__item-title mb-7 text-2xl font-bold">
              Top Dealers
            </h3>
            <p className="why-lease__item-text text-left">
              TrueCar Certified Dealers compete for your business by providing
              discounted pricing on in-stock inventory.
            </p>
          </li>
          <li className="why-lease__item">
            <Why2 className="mb-7 ml-20" />
            <h3 className="why-lease__item-title mb-7 text-2xl font-bold">
              Discounted Pricing
            </h3>
            <p className="why-lease__item-text text-left">
              View local inventory from the comfort of home and get access to
              guaranteed savings on the car of your choice.
            </p>
          </li>
          <li className="why-lease__item">
            <Why3 className="mb-7 ml-20" />
            <h3 className="why-lease__item-title mb-7 text-2xl font-bold">
              Lower Payments
            </h3>
            <p className="why-lease__item-text text-left">
              Get discounted pricing when you shop for a car or truck using
              TrueCar and save on your lease payment.
            </p>
          </li>
          <li className="why-lease__item">
            <Why4 className="mb-7 ml-20" />
            <h3 className="why-lease__item-title mb-7 text-2xl font-bold">
              Easy Upgrade
            </h3>
            <p className="why-lease__item-text text-left">
              Easy to upgrade to the newest vehicle model every few years if you
              would like to be modern and comfortable
            </p>
          </li>
        </ul>
      </div>
      <div className="how-does pb-36">
        <div className="container max-w-screen-xl my-0 mx-auto px-3 left-0 right-0">
          <div className="how-does__inner max-w-xl mx-auto">
            <h2 className="section-title text-2xl font-bold pt-12 mb-6 ">
              How Does Leasing Work?
            </h2>
            <p className="how-does__text">
              Leasing a vehicle is essentially entering into a long term rental
              agreement for that vehicle. Unlike a traditional car purchase, you
              don’t actually own the vehicle. Instead, a leasing company
              purchases the vehicle from the dealer on your behalf and then you
              make monthly payments to the leasing company for the duration of
              your lease. Some leases however, do provide the option to purchase
              the vehicle at the end of the lease.
            </p>
            <h4 className="how-does__title  text-xl font-bold pt-6 mb-4">
              Similar to a short term car rental, there are rules that define:
            </h4>
            <ol className="how-does-list pt-12 pb-16 ">
              <li className="how-does-item">
                How much you can drive, stated as annual miles (excess miles are
                charged at a specified rate)
              </li>
              <li className="how-does-item">
                Types of damage that you may be liable for at the end of your
                lease
              </li>
              <li className="how-does-item">
                The procedures and costs when you return the vehicle at the end
                of your lease
              </li>
            </ol>
            <p className="how-does__text">
              Lease contracts are a commitment and ending them early can be
              difficult and expensive so it is important to consider your
              circumstances carefully before you decide.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
