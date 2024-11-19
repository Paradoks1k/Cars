import React from "react";

export const VideoSection = () => {
  return (
    <div>
      <div className="video pb-36">
        <div className="container max-w-screen-xl  mx-auto pb-8">
          <h2 className="section-title video-title mb-5 text-center text-4xl font-bold">
            WELCOME TO D&M LEASING
          </h2>
          <p className="video__text text-xl font-bold mb-12 text-center">
            Find out how easy it is to lease from D&M
          </p>
          <iframe
            className="my-0 mx-auto block"
            width="1000"
            height="500"
            src="https://www.youtube.com/embed/3zv9HghzvSk?si=eLJNvB-Y7if0PXUR"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin"
            allowfullscreen
          ></iframe>
        </div>
      </div>
    </div>
  );
};
