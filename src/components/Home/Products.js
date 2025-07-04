import React, { useEffect, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import { productsData } from "../../data/data";
import { motion } from "framer-motion";
import { fadeIn } from "../../utils/varients";
import { useLocation } from "react-router-dom";

const Products = () => {
  const { images, title } = productsData;
  const productsRef = useRef(null);
  const { pathname } = useLocation();

  useEffect(() => {
    if (pathname === "/products") {
      productsRef.current?.scrollIntoView({ behavior: "smooth" });
    }
  }, [pathname]);

  return (
    <section
      ref={productsRef}
      id="products"
      className="section min-h-screen flex items-center bg-[#F9F9F9]"
    >
      <div className="container mx-auto w-full">
        <motion.h2
          variants={fadeIn("up")}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.6 }}
          className="h2 mb-8"
        >
          {title}
        </motion.h2>
        <motion.div
          variants={fadeIn("up")}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.2 }}
        >
          <Swiper
            modules={[Autoplay, Pagination]}
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            loop={true}
            pagination={{ clickable: true }}
            className="w-full"
          >
            {images.map((img, i) => (
              <SwiperSlide key={i} className="flex justify-center">
                <img
                  src={img}
                  alt={`Product ${i + 1}`}
                  className="object-cover max-h-[600px] w-full"
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </motion.div>
      </div>
    </section>
  );
};

export default Products;
