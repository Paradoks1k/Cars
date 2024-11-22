import React from "react";
//import { ReactComponent as Slide1 } from "../../images/slide.svg";
import "./slider.css";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
//import img from "../../images/slide.jpg";

export const Slider = () => {
  return (
    <div className="slider ">
      <div className="swiper">
        <div className="swiper-wraper">
          <Swiper
            modules={[Navigation, Pagination, Scrollbar, A11y]}
            spaceBetween={50}
            slidesPerView={2}
            navigation
            pagination={{ clickable: true }}
            scrollbar={{ draggable: true }}
            onSwiper={(swiper) => console.log(swiper)}
            onSlideChange={() => console.log("slide change")}
          >
            <SwiperSlide>
              <div className="bgi bg-no-repeat bg-cover bg-center"></div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="bgii bg-no-repeat bg-cover bg-center"></div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </div>
  );
};
