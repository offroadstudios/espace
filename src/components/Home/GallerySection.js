import React, { useState, useRef, useEffect } from "react";
import { galleryData } from "../../data/data";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import { motion } from "framer-motion";
import { fadeIn } from "../../utils/varients";
import { useLocation } from "react-router-dom";

const slides = galleryData.images.map(({ original, width, height }) => ({
  src: original,
  width,
  height,
}));

const GallerySection = () => {
  const [index, setIndex] = useState(-1);
  const displayPhoto = (i) => {
    setIndex(i);
  };

  const { title, btnText, btnIcon, images } = galleryData;
  const galleryRef = useRef(null);
  const { pathname } = useLocation();

  useEffect(() => {
    if (pathname === "/gallery") {
      galleryRef.current?.scrollIntoView({ behavior: "smooth" });
    }
  }, [pathname]);

  return (
    <section
      ref={galleryRef}
      className="bg-[#F9F9F9] min-h-screen section relative mt-[40px] lg:mt-0 px-4 md:px-10"
    >
      <div className="container mx-auto">
        <motion.h2
          variants={fadeIn("up")}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.6 }}
          className="h2 max-w-[370px] lg:mb-5 text-center md:text-left"
        >
          {title}
        </motion.h2>
      </div>

      <motion.div
        variants={fadeIn("up")}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.2 }}
        className="mb-8 lg:mb-20"
      >
        <Swiper
          spaceBetween={20}
          breakpoints={{
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
        >
          {images.map((img, i) => (
            <SwiperSlide key={i}>
              <img
                src={img.src}
                alt="gallery"
                className="w-full h-full object-cover cursor-pointer"
                onClick={() => displayPhoto(i)}
              />
            </SwiperSlide>
          ))}
        </Swiper>
        <Lightbox
          slides={slides}
          styles={{ container: { backgroundColor: "rgba(0,0,0,.9)" } }}
          open={index >= 0}
          index={index}
          close={() => setIndex(-1)}
        />
      </motion.div>

      <motion.div
        variants={fadeIn("up")}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.2 }}
        className="flex justify-center"
      >
        <button className="btn btn-lg btn-dark">
          {btnText}
          <div className="text-xl">{btnIcon}</div>
        </button>
      </motion.div>
    </section>
  );
};

export default GallerySection;
