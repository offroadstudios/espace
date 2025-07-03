
 import React, { useState, useEffect } from "react";

 import Nav from "./Nav";
 import NavMobile from "./NavMobile";
 import Socials from "./Social";
 import logo from './../../asset/topbar/logo.png';
 import styled from "styled-components";
 
 
 const Logo = styled.div`

  width: 200px;
  height: 110px;
  img {
    width: 100%;
    height: 100%;
  }
`;
 export const Header = () => {
   const [isActive, setIsActive] = useState(false);
   const [navMobile, setNavMobile] = useState(false);
   const [toggleMenu, setToggleMenu] = useState(false);
 
   useEffect(() => {
     const handleScroll = () => {
       window.scrollY > 50 ? setIsActive(true) : setIsActive(false);
     };
     window.addEventListener("scroll", handleScroll);
     return () => window.removeEventListener("scroll", handleScroll);
   }, []);
 
   const toggleMobileNav = () => {
     setNavMobile((prev) => !prev);
     setToggleMenu((prev) => !prev);
   };
   return (
     <header
       className={`${
         isActive
           ? "h-[100px] lg:h-[110px] shadow-lg bg-white"
           : "h-[110px] bg-transparent text-black"
       } z-50 fixed left-0 right-0 max-w-[1920px] w-full mx-auto transition-all duration-300`}
     >
