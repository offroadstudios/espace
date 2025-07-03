import React from "react";
// import { Outlet } from "react-router-dom";
import { Header } from "../TopBar/Header";
import About from "./About";
import About1 from "./About1";
import Contact from "./Contact";
import Footer from "./Footer";
import Interview from "./Interview";
import Interview1 from "./Interview1";
import VideoGallery from "./VideoGallery";
import LandingPage from "./LandingPage";
import Skills from "./Skills";
import Testimonial from "./Testimonial";
import GallerySection from "./GallerySection";
const index = () => {
  return (
    <>
      <LandingPage />
          <Header/>

      {/* <Outlet /> */}
      <div/>
      <About />
      <Interview />

      <About1 />
<GallerySection/>
      <Interview1 />

      <VideoGallery />

      <Contact />

      <Footer />
    </>
  );
};

export default index;
