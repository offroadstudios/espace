import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "./components/Home";
import About from "./components/Home/About";
import Interview from "./components/Home/Interview";
import Contact from "./components/Home/Contact";
import LandingPage from "./components/Home/LandingPage";
import Skills from "./components/Home/Skills";
import Testimonial from "./components/Home/Testimonial";
import Footer from "./components/Home/Footer";
import VideoGallery from "./components/Home/VideoGallery";
import GallerySection from "./components/Home/GallerySection";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
        children: [
          { path: "/", element: <LandingPage /> },
          { path: "/about", element: <About /> },
          { path: "/gallery", element: <GallerySection /> },
          { path: "/videos", element: <VideoGallery /> },


          { path: "/contacts", element: <Contact /> },
          { path: "/footer", element: <Footer /> },
        ],
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
