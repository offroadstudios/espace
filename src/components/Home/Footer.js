import React, { useEffect, useRef } from "react";
import { footerData } from "../../data/data";
import { motion } from "framer-motion";
import { fadeIn } from "../../utils/varients";
import { useLocation } from "react-router-dom";
import { FaWhatsapp } from "react-icons/fa";

const staggerContainer = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.3,
      delayChildren: 0.2,
    },
  },
};

const Footer = () => {
  const { about, links, program, newsletter } = footerData || {};

  const footerRef = useRef(null);
  const { pathname } = useLocation();

  useEffect(() => {
    if (pathname === "/footer")
      footerRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [pathname]);

  return (
    <>
      {/* WhatsApp Floating Button */}
   <a
    href="https://wa.me/923232090000"
    target="_blank"
    rel="noopener noreferrer"
    className="fixed bottom-6 right-6 z-50 bg-green-500 hover:bg-green-600 text-white w-[56px] h-[56px] rounded-full shadow-lg flex items-center justify-center transition-transform transform hover:scale-110 group"
    title="Contact on WhatsApp"
  >
    <FaWhatsapp className="text-2xl group-hover:scale-110 transition-all" />
  </a>

      <footer ref={footerRef} className="bg-dark section">
        <div className="container mx-auto">
          {/* grid */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.1 }}
            className="flex flex-col lg:flex-row lg:justify-between text-white gap-x-5 gap-y-14"
          >
            {/* about */}
            <motion.div
              variants={fadeIn("up")}
              className="flex-1 flex flex-col gap-y-6"
            >
              <div className="font-primary text-xl uppercase tracking-[0.08em]">
                {about?.title}
              </div>
              <div className="leading-relaxed text-[#DBDBDB]">
                {about?.subtitle}
              </div>
              <div className="flex flex-col gap-y-4 font-semibold text-[#DBDBDB]">
                <div className="flex items-center gap-x-[10px]">
                  <div>{about?.address?.icon}</div>
                  <div>{about?.address?.name}</div>
                </div>
                <div className="flex items-center gap-x-[10px]">
                  <div>{about?.phone?.icon}</div>
                  <div>{about?.phone?.number}</div>
                </div>
                <div className="flex items-center gap-x-[10px]">
                  <div>{about?.email?.icon}</div>
                  <div>{about?.email?.address}</div>
                </div>
              </div>
            </motion.div>

            {/* newsletter */}
            <motion.div variants={fadeIn("up")} className="flex-1">
              <div className="font-primary text-xl uppercase tracking-[0.08em] mb-6">
                {newsletter?.title}
              </div>
              <div className="leading-relaxed mb-9 text-[#DBDBDB]">
                {newsletter?.subtitle}
              </div>
              <form className="flex justify-between items-start border-b border-[#B6B6B6]">
                <input
                  className="outline-none placeholder:text-base italic placeholder:capitalize bg-transparent pb-2"
                  type="text"
                  placeholder={newsletter?.form?.placeholder}
                />
                <button type="submit" className="text-2xl cursor-pointer">
                  {newsletter?.form?.icon}
                </button>
              </form>
            </motion.div>
          </motion.div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
