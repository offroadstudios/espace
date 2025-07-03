import React, { useEffect, useRef, useState } from "react";
import { videoData } from "../../data/data";
import { motion } from "framer-motion";
import { fadeIn } from "../../utils/varients";
import { useLocation } from "react-router-dom";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const VideoGallery = () => {
  const galleryRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(null);
  const { pathname } = useLocation();

  useEffect(() => {
    if (pathname === "/videos") {
      galleryRef.current?.scrollIntoView({ behavior: "smooth" });
    }
  }, [pathname]);

  const nextVideo = (e) => {
    e.stopPropagation();
    setActiveIndex((prev) =>
      prev === videoData.videos.length - 1 ? 0 : prev + 1
    );
  };

  const prevVideo = (e) => {
    e.stopPropagation();
    setActiveIndex((prev) =>
      prev === 0 ? videoData.videos.length - 1 : prev - 1
    );
  };

  const activeVideo =
    activeIndex !== null ? videoData.videos[activeIndex].id : null;

  return (
    <>
      {activeIndex !== null && (
        <div
          className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
          onClick={() => setActiveIndex(null)}
        >
          <div
            className="relative w-full max-w-3xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="absolute left-2 top-1/2 -translate-y-1/2 text-white text-3xl p-2"
              onClick={prevVideo}
            >
              <FaChevronLeft />
            </button>
            <button
              className="absolute right-2 top-1/2 -translate-y-1/2 text-white text-3xl p-2"
              onClick={nextVideo}
            >
              <FaChevronRight />
            </button>
            <div className="relative pb-[56.25%] h-0">
              <iframe
                className="absolute top-0 left-0 w-full h-full"
                src={`https://www.youtube.com/embed/${activeVideo}?autoplay=1`}
                title="Selected video"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      )}
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
            <div
              key={index}
              className="flex-shrink-0 w-full sm:w-1/2 lg:w-1/3 cursor-pointer"
              onClick={() => setActiveIndex(index)}
            >
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
    </>
  );
};

export default VideoGallery;