import React from "react";
import { ReactComponent as AppStore } from "../../images/Appstore.svg";
import { ReactComponent as GooglePay } from "../../images/Googlepay.svg";

export const Footer = () => {
  return (
    <div className="container text-almost-white bg-almost-black max-w-screen-lg mt-4 mx-auto pt-12 pb-8">
      <div className="footer__menu flex justify-around mb-12 ">
        <ul className="footer__menu-list max-w-60">
          <li className="menu__footer-item  pt-5">
            <p className="footer__menu-title text-2xl font-bold pb-5">
              Products
            </p>
            <a className="footer__menu-link pb-4 " href="#">
              Used
            </a>
            <a className="footer__menu-link pb-4" href="#">
              New
            </a>
            <a className="footer__menu-link pb-4" href="#">
              Sell your car
            </a>
          </li>
        </ul>
        <ul className="footer__menu-list max-w-60">
          <li className="menu__footer-item pt-5">
            <p className="footer__menu-title text-2xl font-bold pb-5">
              Resources
            </p>
            <a className="footer__menu-link pb-4" href="#">
              Blog
            </a>
            <a className="footer__menu-link pb-4" href="#">
              FAQ
            </a>
            <a className="footer__menu-link pb-4" href="#">
              Contact us
            </a>
          </li>
        </ul>
        <ul className="footer__menu-list max-w-60">
          <li className="menu__footer-item pt-5">
            <p className="footer__menu-title text-2xl font-bold pb-5">
              Work With TrueCar
            </p>
            <a className="footer__menu-link pb-4" href="#">
              Dealers
            </a>
            <a className="footer__menu-link pb-4" href="#">
              Partners
            </a>
          </li>
        </ul>
        <ul className="footer__menu-list max-w-60">
          <li className="menu__footer-item pt-5">
            <p className="footer__menu-title text-2xl font-bold pb-5">About</p>
            <a className="footer__menu-link pb-4" href="#">
              About us
            </a>
            <a className="footer__menu-link pb-4" href="#">
              Team
            </a>
            <a className="footer__menu-link pb-4" href="#">
              Careers
            </a>
          </li>
        </ul>
      </div>
      <ul className="app flex justify-center gap-10 mb-12">
        <li className="app__item">
          <AppStore />
        </li>
        <li className="app__item">
          <GooglePay />
        </li>
      </ul>
      <div className="footer__copy max-w-4xl mx-auto mb-7 text-center">
        <p className="footer__copy-text">
          For questions about the TrueCar Auto Buying Service please call
          1-888-878-3227. <br /> Certified Dealers are contractually obligated
          by TrueCar to meet certain customer service requirements and complete
          the TrueCar Dealer Certification Program.
        </p>
        <p className="footer__copy-text">
          TrueCar does not broker, sell, or lease motor vehicles. Unless
          otherwise noted, all vehicles shown on this website are offered for
          sale by licensed motor vehicle dealers. All vehicles are subject to
          prior sale. By accessing this website, you agree to the TrueCar Terms
          of Service and Privacy Policy.
        </p>
      </div>
      <nav className="copy__nav">
        <ul className="copy__nav-list flex gap-10 justify-center">
          <li className="copy__nav-item">
            <a className="copy__nav-link" href="#">
              Terms of Service
            </a>
          </li>
          <li className="copy__nav-item">
            <a className="copy__nav-link" href="#">
              Privacy Policy
            </a>
          </li>
          <li className="copy__nav-item">
            <a className="copy__nav-link" href="#">
              Do Not Sell My Personal Information
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};
