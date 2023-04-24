import React, { useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { navItems } from "./SocialItems";
import { MdFavorite } from "react-icons/md";
import "../style/navbar.css";
import { Bounce } from "react-reveal";
const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [socialItems, setSocialitem] = useState(navItems);
  return (
    <div className=" mx-auto w-full flex justify-between items-center p-4 max-h-20 fixed z-10 navigation">
      {/* Left side */}
      <div className="flex items-center">
        <div onClick={() => setNav(!nav)} className="cursor-pointer">
          <AiOutlineMenu size={30} className="text-yellow-300" />
        </div>
        <a href="#">
          <img src="logo.png" alt="logo" className="rounded-full" />
        </a>
      </div>
      <a href="#menu">
        <h1 className="menu">Menu</h1>
      </a>
      {/* Cart button */}
      <button className="bg-red-500 border-none text-white hidden md:flex items-center py-2 rounded-full">
        <MdFavorite size={20} className="mr-2" /> Favorite
      </button>

      {/* Mobile Menu */}
      {/* Overlay */}
      {nav ? (
        <div className="bg-black/80 fixed w-full h-screen z-10 top-0 left-0"></div>
      ) : (
        ""
      )}

      {/* Side drawer menu */}
      <div
        className={
          nav
            ? "fixed top-0 left-0 w-[300px] h-screen novbar z-10 duration-300 rounded-r"
            : "fixed top-0 left-[-100%] w-[300px] h-screen bg-white z-10 duration-300"
        }
      >
        <AiOutlineClose
          onClick={() => setNav(!nav)}
          size={30}
          className="absolute right-4 top-4 cursor-pointer"
        />
        <nav className="menu-bar">
          <ul className="flex flex-col justify-around p-4 text-gray-800">
            <Bounce left>
              {socialItems.map((item) => (
                <li key={item.id} className="text-xl py-4 flex items-center">
                  <a
                    href={item.href}
                    className="flex items-center transition-colors duration-300 ease-in-out hover:text-red-500 hover:bg-gray-100 rounded-full p-1 cursor-pointer"
                  >
                    {item.icon}
                    {item.text}
                  </a>
                </li>
              ))}
            </Bounce>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
