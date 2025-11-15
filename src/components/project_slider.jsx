import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper/modules";
import Test from "./Test";

const ProjectCarousel = () => {
  return (
    <div className="w-full max-w-7xl mx-auto">
      <Swiper
        spaceBetween={20}
        pagination={{ clickable: true }}
        navigation={false}
        modules={[Pagination, Navigation]}
        breakpoints={{
          0: { slidesPerView: 1 }, // mobile
          768: { slidesPerView: 1 }, // tablet
          1450: { slidesPerView: 2 }, // laptop+
        }}
        className="mySwiper"
      >
        <SwiperSlide className="justify-items-center">
          <Test path={"/lenu-portfolio.jpg"} html css javaScript projectLink={"https://lenubaridoopalace.netlify.app/"} />
        </SwiperSlide>
        <SwiperSlide className="justify-items-center">
          <Test path={"/thrillz-portfolio.jpg"} html css />
        </SwiperSlide>
        {/* <SwiperSlide className="justify-items-center">
          <Test path={"/lenu-portfolio.jpg"} />
        </SwiperSlide>
        <SwiperSlide className="justify-items-center">
          <Test path={"/thrillz-portfolio.jpg"} />
        </SwiperSlide> */}
      </Swiper>
    </div>
  );
};

export default ProjectCarousel;
