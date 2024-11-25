import React from "react";
import "./Chose.css";
import { BlogSection } from "../Blog-section";
import { ReactComponent as Card1 } from "../../images/card1.svg";
import { ReactComponent as Card2 } from "../../images/card2.svg";
import { ReactComponent as Card3 } from "../../images/card3.svg";
import { ReactComponent as Card4 } from "../../images/card4.svg";

export const Choose = () => {
  return (
    <div className="choose pt-24 pb-36">
      <div className="container">
        <h2 className="coose-title text-2xl font-bold text-center">
          Choose your car
        </h2>
        <div className="tabs">
          <div className="tabs-btn mt-12 px-36 flex justify-between gap-20 pb-24">
            <button className="tabs-btn-item tabs-btn-item--active text-2xl font-bold cursor-pointer border-none bg-transparent p-0">
              Car and Minivan
            </button>
            <button className="tabs-btn-item tabs-btn-item--active text-2xl font-bold cursor-pointer border-none bg-transparent p-0">
              Trucks
            </button>
            <button className="tabs-btn-item tabs-btn-item--active text-2xl font-bold cursor-pointer border-none bg-transparent p-0">
              Crossovers & SUVs
            </button>
            <button className="tabs-btn-item tabs-btn-item--active text-2xl font-bold cursor-pointer border-none bg-transparent p-0">
              Electrified
            </button>
          </div>
          <div className="tabs-content">
            <div className="tabs-content-item grid grid-cols-4 gap-10 pl-9 s">
              <div className="car-card text-center max-w-[269px]">
                <Card1 />
                <div className="card-content  ">
                  <h4 className="card-title mt-5 text-xl font-bold mb-5 ">
                    Toyota Crown 2023
                  </h4>
                  <p className="card-text  mb-5">starting from $ 39900</p>
                  <p className="card-price  text-xl font-bold mb-5">
                    $ 650/mo{" "}
                  </p>
                </div>
                <a href="" className="card-link block text-almost-blue">
                  see details
                </a>
              </div>
              <div className="car-card text-center max-w-[269px]">
                <Card2 />
                <div className="card-content  ">
                  <h4 className="card-title mt-5 text-xl font-bold mb-5 ">
                    Toyota Crown 2023
                  </h4>
                  <p className="card-text  mb-5">starting from $ 39900</p>
                  <p className="card-price  text-xl font-bold mb-5">
                    $ 650/mo{" "}
                  </p>
                </div>
                <a href="" className="card-link block text-almost-blue">
                  see details
                </a>
              </div>
              <div className="car-card text-center max-w-[270px]">
                <Card3 />
                <div className="card-content  ">
                  <h4 className="card-title mt-5 text-xl font-bold mb-5 ">
                    Toyota Crown 2023
                  </h4>
                  <p className="card-text  mb-5">starting from $ 39900</p>
                  <p className="card-price  text-xl font-bold mb-5">
                    $ 650/mo{" "}
                  </p>
                </div>
                <a href="" className="card-link block text-almost-blue">
                  see details
                </a>
              </div>
              <div className="car-card text-center max-w-[269px]">
                <Card4 />
                <div className="card-content  ">
                  <h4 className="card-title mt-5 text-xl font-bold mb-5 ">
                    Toyota Crown 2023
                  </h4>
                  <p className="card-text  mb-5">starting from $ 39900</p>
                  <p className="card-price  text-xl font-bold mb-5">
                    $ 650/mo{" "}
                  </p>
                </div>
                <a href="" className="card-link block text-almost-blue">
                  see details
                </a>
              </div>
            </div>
            <div className="tabs-content-item grid grid-cols-4 gap-10 pl-9 mt-20">
              <div className="car-card text-center max-w-[269px]">
                <Card1 />
                <div className="card-content  ">
                  <h4 className="card-title mt-5 text-xl font-bold mb-5 ">
                    Toyota Crown 2023
                  </h4>
                  <p className="card-text  mb-5">starting from $ 39900</p>
                  <p className="card-price  text-xl font-bold mb-5">
                    $ 650/mo{" "}
                  </p>
                </div>
                <a href="" className="card-link block text-almost-blue">
                  see details
                </a>
              </div>
              <div className="car-card text-center max-w-[269px]">
                <Card2 />
                <div className="card-content  ">
                  <h4 className="card-title mt-5 text-xl font-bold mb-5 ">
                    Toyota Crown 2023
                  </h4>
                  <p className="card-text  mb-5">starting from $ 39900</p>
                  <p className="card-price  text-xl font-bold mb-5">
                    $ 650/mo{" "}
                  </p>
                </div>
                <a href="" className="card-link block text-almost-blue">
                  see details
                </a>
              </div>
              <div className="car-card text-center max-w-[270px]">
                <Card3 />
                <div className="card-content  ">
                  <h4 className="card-title mt-5 text-xl font-bold mb-5 ">
                    Toyota Crown 2023
                  </h4>
                  <p className="card-text  mb-5">starting from $ 39900</p>
                  <p className="card-price  text-xl font-bold mb-5">
                    $ 650/mo{" "}
                  </p>
                </div>
                <a href="" className="card-link block text-almost-blue">
                  see details
                </a>
              </div>
              <div className="car-card text-center max-w-[269px]">
                <Card4 />
                <div className="card-content  ">
                  <h4 className="card-title mt-5 text-xl font-bold mb-5 ">
                    Toyota Crown 2023
                  </h4>
                  <p className="card-text  mb-5">starting from $ 39900</p>
                  <p className="card-price  text-xl font-bold mb-5">
                    $ 650/mo{" "}
                  </p>
                </div>
                <a href="" className="card-link block text-almost-blue">
                  see details
                </a>
              </div>
            </div>
            <div className="tabs-content-item grid grid-cols-4 gap-10 pl-9 mt-20">
              <div className="car-card text-center max-w-[269px]">
                <Card1 />
                <div className="card-content  ">
                  <h4 className="card-title mt-5 text-xl font-bold mb-5 ">
                    Toyota Crown 2023
                  </h4>
                  <p className="card-text  mb-5">starting from $ 39900</p>
                  <p className="card-price  text-xl font-bold mb-5">
                    $ 650/mo{" "}
                  </p>
                </div>
                <a href="" className="card-link block text-almost-blue">
                  see details
                </a>
              </div>
              <div className="car-card text-center max-w-[269px]">
                <Card2 />
                <div className="card-content  ">
                  <h4 className="card-title mt-5 text-xl font-bold mb-5 ">
                    Toyota Crown 2023
                  </h4>
                  <p className="card-text  mb-5">starting from $ 39900</p>
                  <p className="card-price  text-xl font-bold mb-5">
                    $ 650/mo{" "}
                  </p>
                </div>
                <a href="" className="card-link block text-almost-blue">
                  see details
                </a>
              </div>
              <div className="car-card text-center max-w-[270px]">
                <Card3 />
                <div className="card-content  ">
                  <h4 className="card-title mt-5 text-xl font-bold mb-5 ">
                    Toyota Crown 2023
                  </h4>
                  <p className="card-text  mb-5">starting from $ 39900</p>
                  <p className="card-price  text-xl font-bold mb-5">
                    $ 650/mo{" "}
                  </p>
                </div>
                <a href="" className="card-link block text-almost-blue">
                  see details
                </a>
              </div>
              <div className="car-card text-center max-w-[269px]">
                <Card4 />
                <div className="card-content  ">
                  <h4 className="card-title mt-5 text-xl font-bold mb-5 ">
                    Toyota Crown 2023
                  </h4>
                  <p className="card-text  mb-5">starting from $ 39900</p>
                  <p className="card-price  text-xl font-bold mb-5">
                    $ 650/mo{" "}
                  </p>
                </div>
                <a href="" className="card-link block text-almost-blue">
                  see details
                </a>
              </div>
            </div>
          </div>
        </div>
        <a
          className="blog-link btn uppercase w-56 my-0 mx-auto text-center block mt-16 "
          href=""
        >
          SHOW MORE
        </a>

        <BlogSection />
      </div>
    </div>
  );
};
