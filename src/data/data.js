// import Logo from "../asset/header/logo.svg";
import GalleryImg1 from "../asset/gallery/image1.jpg";
import GalleryImg2 from "../asset/gallery/image2.jpg";
import GalleryImg3 from "../asset/gallery/image3.jpg";
import GalleryImg4 from "../asset/gallery/image4.jpg";
import GalleryImg5 from "../asset/gallery/image5.jpg";
import GalleryImg6 from "../asset/gallery/image6.jpg";
import GalleryImg7 from "../asset/gallery/image7.jpg";
import GalleryImg8 from "../asset/gallery/image8.jpg";
import QuoteImg from "../asset/testimonial/quote.svg";
import { GrFacebookOption } from "react-icons/gr";
import { IoMdArrowForward } from "react-icons/io";
import { FiSend } from "react-icons/fi";
import { FaPlay, FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from "react-icons/fa";
import {
  IoLogoInstagram,
  IoLogoPinterest,
  IoLogoTwitter,
  IoLogoYoutube,
} from "react-icons/io";

export const headerData = {};

export const navData = {
  items: [
    { href: "/", name: "Home" },
    { href: "/about", name: "About" },
    // { href: "/gallery", name: "Gallery" },
    { href: "/contacts", name: "Contact" },
  ],
};

export const socialData = [
  { href: "/", icon: <IoLogoInstagram /> },
  { href: "/", icon: <IoLogoPinterest /> },
];

export const heroData = {
  title: "I’m Void Sir.",
  subtitle:
    "Tattoos have their own unique power and magic. They not only beautify the body but also the psyche.",
  btnText: "read more",
  btnIcon: <IoMdArrowForward />,
};

export const aboutData = {
  title: "About Us",
  subtitle1:
"The Portable Luxury House is a cutting-edge, mobile living solution designed for individuals seeking a seamless blend of style, comfort, and mobility. Crafted with modern materials and equipped with the latest technology, this house offers a luxurious lifestyle while being entirely portable. Whether you're looking to settle temporarily or move to a new location, this house provides all the amenities of a permanent residence with the flexibility of mobile living.",
  btnIcon: <IoMdArrowForward />,
};

export const about1Data = {
  title: "Sustainable and Off-Grid Readys",
  subtitle1:
"Live sustainably with our energy-efficient design. Equipped with solar panels, rainwater harvesting systems, and advanced filtration, our homes are perfect for off-grid living. Enjoy self-sufficient, eco-conscious living without sacrificing modern conveniences.",
  btnIcon: <IoMdArrowForward />,
};
export const galleryData = {
  title: "",
  btnText: "View all",
  btnIcon: <IoMdArrowForward />,
  images: [
    {
      src: GalleryImg1,
      original: GalleryImg1,
      width: 350,
      height: 500,
    },
    {
      src: GalleryImg2,
      original: GalleryImg2,
      width: 465,
      height: 540,
    },
    {
      src: GalleryImg3,
      original: GalleryImg3,
      width: 450,
      height: 480,
    },
    {
      src: GalleryImg4,
      original: GalleryImg4,
      width: 465,
      height: 540,
    },
    {
      src: GalleryImg5,
      original: GalleryImg5,
      width: 465,
      height: 540,
    },
    {
      src: GalleryImg6,
      original: GalleryImg6,
      width: 464,
      height: 412,
    },
    {
      src: GalleryImg7,
      original: GalleryImg7,
      width: 465,
      height: 540,
    },
    {
      src: GalleryImg8,
      original: GalleryImg8,
      width: 465,
      height: 412,
    },
  ],
};

export const interviewData = {
  title:
    "",
  btnText: "Watch it now",
  btnIcon: <FaPlay />,
};
export const interview1Data = {
  title:
    "",
  btnText: "Watch it now",
  btnIcon: <FaPlay />,
};
export const testimonialData = [
  {
    quoteImg: QuoteImg,
    message:
      "The entire team is extremely kind and friendly. They're fantastic. They're great at what they do! And it's unique.They will properly consult with you.",
    name: "Jack Geoffrey",
    occupation: "Tattoo Artist",
    scroll: ">>>"
  },
  {
    quoteImg: QuoteImg,
    message:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam culpa asperiores officia natus dignissimos autem possimus molestias aperiam?",
    name: "Douglas Hane",
    occupation: "Tattoo Artist",
    scroll: "<<<",
  },
];

export const contactData = {
  title: "To know more or get a quote",
  info: [
    {
      title: "Lahoro office",
      address: {
        icon: <FaMapMarkerAlt />,
        name: "784 Norman Street, Lahore",
      },
      phone: {
        icon: <FaPhoneAlt />,
        number: "+92 321 321321",
      },
      email: {
        icon: <FaEnvelope />,
        address: "info@espace.com",
      },
      link: "Get location",
    },
    
  ],
  form: {
    name: "Write your name here",
    email: "Write your email address",
    message: "Write your messages here",
    btnText: "Send it",
  },
};
export const footerData = {
  about: {
    title: "E-Space",
    subtitle: "MOVABLE HOMES",
  },
  links: {
    title: "Useful links",
    items: [
      { href: "/about", name: "About us" },
      { href: "/services", name: "Book a demo" },
      { href: "/contacts", name: "Contact Us" },
    ],
  },
  newsletter: {
    title: "Use Manual",
    form: {
      placeholder: "info@espace.com",
      icon: <FiSend />,
    },
  },
};
