import React from "react";
// import { Outlet } from "react-router-dom";
import About from "./About";
import About1 from "./About1";
import Contact from "./Contact";
import Footer from "./Footer";
import GallerySection from "./GallerySection";
import Interview from "./Interview";
import Interview1 from "./Interview1";

import LandingPage from "./LandingPage";
import Skills from "./Skills";
import Testimonial from "./Testimonial";

const index = () => {
  return (
    <>
      <LandingPage />
      {/* <Outlet /> */}
      <div/>
      <About />
      <Interview />

      <About1 />

      <Interview1 />

      <Contact />

      <Footer />
    </>
  );
};

export default index;
