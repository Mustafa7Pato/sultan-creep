import React from "react";
import { BsFacebook, BsWhatsapp, BsPhoneFill } from "react-icons/bs";
import { AiFillMobile, AiOutlineInstagram } from "react-icons/ai";
export const navItems = [
  {
    id: 1,
    icon: <BsFacebook size={25} className="mr-4 text-blue-500" />,
    text: "Facebook",
    href: "https://www.facebook.com",
    hover: "text-blue-500",
  },
  {
    id: 2,
    icon: <AiOutlineInstagram size={25} className="mr-4 text-pink-500" />,
    text: "Instagram",
    href: "https://www.instagram.com",
    hover: "text-pink-500",
  },
  {
    id: 3,
    icon: <BsWhatsapp size={25} className="mr-4 text-green-500" />,
    text: "WhatsApp",
    href: "https://wa.me/+201111680029",
    hover: "text-green-500",
  },
  {
    id: 4,
    icon: <BsPhoneFill size={25} className="mr-4 text-red-500" />,
    text: "Mobile",
    href: "tel:+201111680029",
    hover: "text-red-500",
  },
];
export const socialIcons = [
  {
    icon: <BsFacebook size={30} />,
    link: "https://www.facebook.com",
  },
  {
    icon: <AiOutlineInstagram size={30} />,
    link: "https://www.instagram.com",
  },
  {
    icon: <BsWhatsapp size={30} />,
    link: "https://wa.me/+201111680029",
  },
  {
    icon: <AiFillMobile size={30} />,
    link: "tel:+201111680029",
  },
];
