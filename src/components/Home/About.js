import React, { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import { aboutData } from "../../data/data";
import { fadeIn } from "../../utils/varients";
import image from "./../../asset/about/image.png"

import styled from "styled-components";
import tw from "twin.macro";

const AboutContainer = styled.div`
  ${tw`
    mt-20
    h-full
  `}
`;

const FlexContainer = styled.div`
  display: flex;
  flex-direction: column;
  @media (min-width: 768px) {
    flex-direction: row;
  }
`;

const ImageContainer = styled.div`
  ${tw`
    p-4
  `}
  border-radius: 4px;
  img {
    border-radius: 4px;
  }
`;

const About = () => {
  const aboutRef = useRef(null);
  const { pathname } = useLocation();
  const { title, subtitle1, subtitle2, btnText, btnIcon } = aboutData;

  useEffect(() => {
    if (pathname === "/about")
      aboutRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [pathname]);

  return (
    <AboutContainer ref={aboutRef}>
      <div className="container mx-auto">
        <FlexContainer className="gap-x-[70px] items-center">
          <motion.div
            variants={fadeIn("right")}
            whileInView={"show"}
            viewport={{ once: false, amount: 1 }}
            className="flex-1"
          >
            <ImageContainer>
              <img src={image} alt="About" />
            </ImageContainer>
          </motion.div>
          <motion.div
            variants={fadeIn("left")}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.6 }}
            className="flex-1"
          >
            <h2 className="h2">{title}</h2>
            <div className="flex flex-col items-end">
              <div className="max-w-[530px] text-grey">
                <p className="mb-6">{subtitle1}</p>
                <p className="mb-9">{subtitle2}</p>
                <button className="btn btn-lg btn-link hover:bg-black/80 hover:text-white p-1 px-3 border-[1px] border-black/80">
                  {btnText}
                  <div className="text-xl">{btnIcon}</div>
                </button>
              </div>
            </div>
          </motion.div>
        </FlexContainer>
      </div>
    </AboutContainer>
  );
}

export default About;
