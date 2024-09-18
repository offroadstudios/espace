import React, { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import { about1Data } from "../../data/data";
import { fadeIn } from "../../utils/varients";
import image from "./../../asset/about1/image.png"

import styled from "styled-components";
import tw from "twin.macro";

const AboutContainer = styled.div`
  ${tw`
    mt-40
    mb-40
    h-full
    w-full
  `}
`;

const FlexContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center; // Center children horizontally in a column layout
  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: center; // Center children horizontally in a row layout
  }
`;


const ImageContainer = styled.div`
  ${tw`
    p-1
  `}
  border-radius: 0px;
  img {
    border-radius: 0px;
  }
`;

const About1 = () => {
  const aboutRef = useRef(null);
  const { pathname } = useLocation();
  const { title, subtitle1, subtitle2, btnText, btnIcon } = about1Data;

  useEffect(() => {
    if (pathname === "/about1")
      aboutRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [pathname]);

  return (
    <AboutContainer ref={aboutRef}>
      <div className="container mx-auto">
      <FlexContainer className="gap-x-[70px] items-center justify-center">
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
    className="flex-1 text-center"
  >
    <h2 className="h2 w-full text-center">{title}</h2>
    <div className="flex flex-col items-center">
      <div className="max-w-[530px] text-grey text-center">
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

export default About1;
