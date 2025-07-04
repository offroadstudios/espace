import React from "react";
// import { Outlet } from "react-router-dom";
import Contact from "./Contact";
import Footer from "./Footer";
import VideoGallery from "./VideoGallery";
import LandingPage from "./LandingPage";
import GallerySection from "./GallerySection";
import HomeSectionsSlider from "./HomeSectionsSlider";
const index = () => {
  return (
    <>
      <LandingPage />

      {/* <Outlet /> */}
      <HomeSectionsSlider />
      <GallerySection/>
      <VideoGallery />

      <Contact />

      <Footer />
    </>
  );
};

export default index;
