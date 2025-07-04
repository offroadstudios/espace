import React from "react";
// import { Outlet } from "react-router-dom";
import { Header } from "../TopBar/Header";
import Contact from "./Contact";
import Footer from "./Footer";
import VideoGallery from "./VideoGallery";
import LandingPage from "./LandingPage";
import Skills from "./Skills";
import Testimonial from "./Testimonial";
import GallerySection from "./GallerySection";
import HomeSectionsSlider from "./HomeSectionsSlider";
const index = () => {
  return (
    <>
      <LandingPage />
          <Header/>

      {/* <Outlet /> */}
      <div/>
      <HomeSectionsSlider />
      <GallerySection/>
      <VideoGallery />

      <Contact />

      <Footer />
    </>
  );
};

export default index;
