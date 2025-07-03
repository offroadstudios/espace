import React, { useEffect, useRef } from "react";
import { videoData } from "../../data/data";
import { motion } from "framer-motion";
import { fadeIn } from "../../utils/varients";
import { useLocation } from "react-router-dom";

const VideoGallery = () => {
  const galleryRef = useRef(null);
  const { pathname } = useLocation();

  useEffect(() => {
    if (pathname === "/videos") {
      galleryRef.current?.scrollIntoView({ behavior: "smooth" });
    }
  }, [pathname]);

  return (
    <motion.section
      variants={fadeIn("up")}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.2 }}
      ref={galleryRef}
      className="section"
    >
      <div className="container mx-auto">
        <h2 className="h2 mb-8">{videoData.title}</h2>
        <div className="flex gap-4 overflow-x-auto scrollbar-thin pb-4">
          {videoData.videos.map((video, index) => (
            <div key={index} className="flex-shrink-0 w-full sm:w-1/2 lg:w-1/3">
              <div className="relative pb-[56.25%] h-0">
                <iframe
                  className="absolute top-0 left-0 w-full h-full"
                  src={`https://www.youtube.com/embed/${video.id}`}
                  title={`YouTube video ${index + 1}`}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default VideoGallery;
