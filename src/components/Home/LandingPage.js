import React, { useEffect, useRef } from "react";
import { useMediaQuery } from "react-responsive";
import { useLocation } from "react-router-dom";
import tattoo2 from "../../asset/landingPage/tattoo2.jpg";
import tattoo3 from "../../asset/landingPage/tattoo3.jpg";
// import useOnScreen from "../../hook/useOnScreen";
import styled from "styled-components";
import tw from "twin.macro";
// import icons


const Landing = styled.div`
  ${tw`
mt-4
    p-2

  `}
  border-radius:4px;
  `;

const LandingPage = () => {
  const { pathname } = useLocation();
  const landingRef = useRef(null);
  //   const nav = useNavigate();

  //   const isMounted = useOnScreen(landingRef);
  //   console.log(isMounted);

  const mobileScreen = useMediaQuery({
    query: "(max-width: 640px)",
  });

  useEffect(() => {
    if (pathname === "/")
      landingRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [pathname]);
  //   console.log(pathname);
  return (
    <Landing>

      <div
        ref={landingRef}
        className="h-screen w-full relative flex flex-col items-center justify-between text-white"
      >
        {mobileScreen ? (
          <img
            className="absolute top-24 left-0 w-full h-full brightness-80 py-8"
            src={tattoo2}
            alt=""
          />
        ) : (
          <img
            className="absolute top-24 left-0 w-full h-full brightness-80 object-center object-cover xl:object-fill "
            src={tattoo3}
            alt=""
          />
        )}
        <main className="z-30 flex flex-1 flex-col items-center justify-center gap-4 xl:gap-10 text-uppercase">
          <h1 className="block text-[3rem] xl:text-[8rem] font-bold w-full">
          
          </h1>

          <h2 className="rounded-md block text-[2rem] xl:text-[2rem] font-bold w-full uppercase justify-start text-black mt-48 p-4 bg-white opacity-80">  Group exhibition in Ejaz Art Gallery (Soldout)</h2>
        </main>

        <footer className="z-30 text-3xl animate-pulse mb-7">Scroll down</footer>
      </div>
    </Landing>
  );
};

export default LandingPage;
