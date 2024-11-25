import React from "react";
import { ReactComponent as Blog1 } from "../../images/blog1.svg";
import { ReactComponent as Blog2 } from "../../images/blog2.svg";

export const BlogSection = () => {
  return (
    <div className="blog pb-28">
      <div className="container bg-cover max-w-screen-xl  mx-auto pt-12 pb-8">
        <div className="blog-items grid grid-cols-2 gap-10">
          <div className="blog-item flex justify-between flex-wrap">
            <div className="imageblog ml-20">
              {" "}
              <Blog1 className="mb-7 w-full" />
              <h4 className="blog-item-title basis-[446px] text-2xl font-bold">
                An easier way to buy your next Toyota
              </h4>
              <a
                href="#"
                className="blog-item-link w-20 px-5 py-1 bg-almost-blue text-almost-white"
              >
                more
              </a>
            </div>
          </div>
          <div className="blog-item flex justify-between flex-wrap">
            <div className="imageblog">
              {" "}
              <Blog2 className="mb-7 w-full" />
              <h4 className="blog-item-title basis-[446px] text-2xl font-bold">
                A Guide to Road-Tripping With Pets
              </h4>
              <a
                href="#"
                className="blog-item-link  w-20 px-5 py-1 bg-almost-blue text-almost-white"
              >
                more
              </a>
            </div>
          </div>
        </div>
        <a
          className="blog-link btn uppercase w-56 my-0 mx-auto text-center block mt-16 "
          href=""
        >
          SHOW MORE
        </a>
        a
      </div>
    </div>
  );
};
