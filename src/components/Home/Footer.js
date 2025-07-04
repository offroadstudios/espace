import React, { useEffect, useRef, useState, useCallback } from "react";
import { footerData } from "../../data/data";
import { motion } from "framer-motion";
import { fadeIn } from "../../utils/varients";
import { useLocation } from "react-router-dom";
import { FaWhatsapp } from "react-icons/fa";
// ── PDF Asset ────────────────────────────────────────────────────────────────
const manualPdfUrl = "/Manual.pdf";

// ── Framer-motion stagger container ──────────────────────────────────────────
const staggerContainer = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.3, delayChildren: 0.2 },
  },
};

const Footer = () => {
  const { about, newsletter } = footerData || {};

  const footerRef   = useRef(null);
  const { pathname } = useLocation();

  // ── Lightbox state ────────────────────────────────────────────────────────
  const [showManual, setShowManual] = useState(false);
  const openManual  = useCallback(() => setShowManual(true), []);
  const closeManual = useCallback(() => setShowManual(false), []);

  // ── Scroll into view if routed directly to /footer ────────────────────────
  useEffect(() => {
    if (pathname === "/footer") footerRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [pathname]);

  return (
    <>
      {/* Floating WhatsApp button */}
      <a
        href="https://wa.me/923232090000"
        target="_blank"
        rel="noopener noreferrer"
        title="Contact on WhatsApp"
        className="fixed bottom-6 right-6 z-50 bg-green-500 hover:bg-green-600 text-white w-[56px] h-[56px] rounded-full shadow-lg flex items-center justify-center transition-transform transform hover:scale-110 group"
      >
        <FaWhatsapp className="text-2xl group-hover:scale-110 transition-all" />
      </a>

      {/* ── USER-MANUAL LIGHTBOX ───────────────────────────────────────────── */}
      {showManual && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4"
          onClick={closeManual}
        >
          <div
            className="relative w-full max-w-3xl h-[90vh] bg-white rounded-md overflow-hidden"
            onClick={(e) => e.stopPropagation()} // prevent close on inner click
          >
            {/* close button */}
            <button
              onClick={closeManual}
              className="absolute top-3 right-3 text-3xl leading-none font-bold text-gray-600 hover:text-black"
              aria-label="Close"
            >
              &times;
            </button>
            {/* embedded PDF */}
            <iframe
              src={`${manualPdfUrl}#toolbar=0&navpanes=0&scrollbar=0`}
              title="User Manual"
              className="w-full h-full border-0"
              loading="lazy"
            />
          </div>
        </div>
      )}

      {/* ── FOOTER ─────────────────────────────────────────────────────────── */}
      <footer ref={footerRef} className="bg-dark section">
        <div className="container mx-auto">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.1 }}
            className="flex flex-col lg:flex-row lg:justify-between text-white gap-x-5 gap-y-14"
          >
            {/* About */}
            <motion.div variants={fadeIn("up")} className="flex-1 flex flex-col gap-y-6">
              <div className="font-primary text-xl uppercase tracking-[0.08em]">{about?.title}</div>
              <div className="leading-relaxed text-[#DBDBDB]">{about?.subtitle}</div>
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

            {/* Newsletter */}
            <motion.div variants={fadeIn("up")} className="flex-1">
              <div className="font-primary text-xl uppercase tracking-[0.08em] mb-6">
                {newsletter?.title}
              </div>
              <div className="leading-relaxed mb-9 text-[#DBDBDB]">{newsletter?.subtitle}</div>
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

          {/* User-manual link */}
          <div className="mt-10 text-center">
            <button
              onClick={openManual}
              className="inline-block text-[#DBDBDB] hover:text-white underline underline-offset-4 transition"
            >
              View&nbsp;User&nbsp;Manual&nbsp;(PDF)
            </button>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
