import React, { useRef, useEffect } from "react";
import { contactData } from "../../data/data";
import { motion } from "framer-motion";
import { fadeIn } from "../../utils/varients";
import { useLocation } from "react-router-dom";
const Contact = () => {
  const { title, form } = contactData; // Removed 'info' since we are not using it
  const contactRef = useRef(null);
  const { pathname } = useLocation();

  useEffect(() => {
    if (pathname === "/contacts")
      contactRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [pathname]);

  return (
    <section ref={contactRef} className="section">
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row gap-y-16">
          {/* Removed the entire block that renders the contact info */}

          {/* form */}
          <motion.div
            variants={fadeIn("left")}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.4 }}
            className="flex-1 xl:pl-[40px] flex justify-center items-center "
          >
            <form className="flex flex-col gap-y-10 w-full">
              <input
                className="border-b border-dark placeholder:text-[#555] italic tracking-[0.06em] outline-none pb-4"
                type="text"
                placeholder={form.name}
              />
              <input
                className="border-b border-dark placeholder:text-[#555] italic tracking-[0.06em] outline-none pb-4"
                type="text"
                placeholder={form.email}
              />
              <input
                className="border-b border-dark placeholder:text-[#555] italic tracking-[0.06em] outline-none pb-4 xl:mb-[30px]"
                type="text"
                placeholder={form.message}
              />
              <button className="self-start btn btn-sm btn-dark">
                {form.btnText}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;