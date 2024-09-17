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
    { href: "/gallery", name: "Gallery" },
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
  title: "My Story:",
  subtitle1:
"Trained in the prestigious National College of Arts in Lahore, Anam Jawad has quickly risen to prominence through her unique miniature paintings. Gaining instant acclaim, her Stitched Lips thesis series sold out on the day of its exhibition. She has showcased her work at Ejaz Art Gallery, sharing the stage with notable artists such as Tahir bin Qalandar.",
    subtitle2:
    "While her roots are in traditional art forms, Anam Jawad is now making waves in the digital art sphere, ingeniously blending classical techniques with modern technology. Thank you for visitingExplore the site to discover more of Anamjawads groundbreaking work.",
    btnText: "Know more",
  btnIcon: <IoMdArrowForward />,
};

export const galleryData = {
  title: "Check my gallery:",
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
  title: "Get in touch with me:",
  // info: [
  //   {
  //     title: "LA office",
  //     subtitle:
  //       "In velit arcu posuere integer sit amet, consectetur nun adipiscing elit. Duis porttitor massa tellus",
  //     address: {
  //       icon: <FaMapMarkerAlt />,
  //       name: "784 Norman Street, Los Angeles",
  //     },
  //     phone: {
  //       icon: <FaPhoneAlt />,
  //       number: "+49 93 30493943",
  //     },
  //     email: {
  //       icon: <FaEnvelope />,
  //       address: "contact@yourcompany.com",
  //     },
  //     link: "Get location",
  //   },
  //   {
  //     title: "NYC office",
  //     subtitle:
  //       "Sit amet, consectetur nun in velit arcu posuere integer. Adipiscing elit duis porttitor massa tellus",
  //     address: {
  //       icon: <FaMapMarkerAlt />,
  //       name: "1630 Elm Drive, New York City",
  //     },
  //     phone: {
  //       icon: <FaPhoneAlt />,
  //       number: "+49 34 36573355",
  //     },
  //     email: {
  //       icon: <FaEnvelope />,
  //       address: "contact@yourcompany.com",
  //     },
  //     link: "Get location",
  //   },
  // ],
  form: {
    name: "Write your name here",
    email: "Write your email address",
    message: "Write your messages here",
    btnText: "Send it",
  },
};
export const footerData = {
  about: {
    title: "Anam Jawad",
    subtitle: "Miniature - Digital - Artist",
  },
  links: {
    title: "Useful links",
    items: [
      { href: "/about", name: "About me" },
      { href: "/gallary", name: "My gallery" },
      { href: "/services", name: "My services" },
      { href: "/contacts", name: "Contact me" },
    ],
  },
  newsletter: {
    title: "Newsletter",
    subtitle: "Subscribe to the newsletter.",
    form: {
      placeholder: "info@anamjawad.com",
      icon: <FiSend />,
    },
  },
};
