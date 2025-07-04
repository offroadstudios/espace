import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import About from "./About";
import Interview from "./Interview";
import About1 from "./About1";
import Interview1 from "./Interview1";

const HomeSectionsSlider = () => {
  return (
    <Swiper>
      <SwiperSlide>
        <About />
      </SwiperSlide>
      <SwiperSlide>
        <Interview />
      </SwiperSlide>
      <SwiperSlide>
        <About1 />
      </SwiperSlide>
      <SwiperSlide>
        <Interview1 />
      </SwiperSlide>
    </Swiper>
  );
};

export default HomeSectionsSlider;
