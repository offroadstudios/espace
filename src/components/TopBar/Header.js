import React, { useState, useEffect, useCallback } from "react";
// ── Components ────────────────────────────────────────────────────────────────
import Nav from "./Nav";
import NavMobile from "./NavMobile";
import Socials from "./Social";

// ── Assets ────────────────────────────────────────────────────────────────────
import logo from "./../../asset/topbar/logo.png";

// ── Styling ───────────────────────────────────────────────────────────────────
import styled from "styled-components";
import tw from "twin.macro";

// Logo container keeps image vertically centered and clamps height to header
const Logo = styled.div`
  height: 70px; /* fit inside 100–110 px header */
  width: auto;
  ${tw`flex items-center`}

  img {
    height: 100%;
    width: auto;
  }
`;

// ── Header Component ──────────────────────────────────────────────────────────
export const Header = () => {
  const [isActive, setIsActive] = useState(false); // header shrinks after scroll
  const [navMobile, setNavMobile] = useState(false); // mobile nav visibility
  const [toggleMenu, setToggleMenu] = useState(false); // hamburger animation state

  // Scroll listener: add & clean up
  useEffect(() => {
    const handleScroll = () => setIsActive(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Toggle mobile nav with basic error handling
  const toggleMobileNav = useCallback(() => {
    try {
      setNavMobile((prev) => !prev);
      setToggleMenu((prev) => !prev);
    } catch (err) {
      // Log any unexpected errors
      console.error("[Header] toggleMobileNav error:", err);
    }
  }, []);

  return (
    <header
      className={`${
        isActive
          ? "h-[100px] lg:h-[110px] shadow-lg bg-white"
          : "h-[110px] bg-transparent text-black"
      } z-50 fixed left-0 right-0 max-w-[1920px] w-full mx-auto transition-all duration-300`}
    >
      {/* Wrapper keeps content centered and spaced */}
      <div className="relative flex justify-between items-center h-full pl-[20px] pr-[20px] xl:pr-[60px]">
        {/* Logo */}
        <a href="/">
          <Logo>
            <img src={logo} alt="Espace" />
          </Logo>
        </a>

        {/* Desktop Navigation */}
        <div className="hidden xl:flex">
          <Nav />
        </div>

        {/* Mobile Hamburger Button: centered vertically & aligned right */}
        <div
          onClick={toggleMobileNav}
          className={`xl:hidden ${
            isActive ? "child:bg-black" : "child:bg-white"
          } absolute right-[20px] top-1/2 -translate-y-1/2 w-7 h-5 cursor-pointer`} // centered vertically
        >
          <span
            className={`absolute top-0 left-1 w-[22px] h-[2px] ${
              toggleMenu ? "rotate-45 translate-y-2" : "rotate-0 translate-y-0"
            } transition-all duration-200`}
          ></span>
          <span
            className={`absolute top-2 left-1 w-[22px] h-[2px] ${
              toggleMenu ? "hidden" : "static"
            } transition-all duration-200`}
          ></span>
          <span
            className={`absolute top-4 left-1 w-[22px] h-[2px] ${
              toggleMenu ? "-rotate-45 -translate-y-2" : "rotate-0 translate-y-0"
            } transition-all duration-200`}
          ></span>
        </div>

        {/* Mobile Navigation Overlay */}
        <div
          className={`${navMobile ? "max-h-full" : "max-h-0 overflow-hidden"} ${
            isActive ? "top-[100px] lg:top-[110px]" : "top-[120px] lg:top-[150px]"
          } fixed left-0 -z-10 w-full h-full text-black bg-white transition-all duration-300`}
        >
          <NavMobile />
        </div>

        {/* Social Icons (Desktop) */}
        <div className="hidden xl:flex">
          <Socials />
        </div>
      </div>
    </header>
  );
};

export default Header;