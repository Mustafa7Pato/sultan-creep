import React, { useState } from "react";
import { socialIcons } from "./SocialItems";
import { Bounce } from "react-reveal";
const Footer = () => {
  const [social, setSocial] = useState(socialIcons);
  return (
    <footer className="bg-gray-800 pt-16 pb-12 text-center">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-between media">
          <div className="sm:w-full md:w-1/4 lg:w-1/3 mb-4 justify-center flex   md:mb-0">
            <img src="logo.png" alt="" className="" />
          </div>
          <div className="w-2/3 mb-4 flex md:mb-0 justify-center text-gray-200">
            <div className=" flex w-3/4 flex-wrap justify-between items-center footer-social">
              <Bounce>
                {social.map((socialIcon, index) => (
                  <a
                    key={index}
                    href={socialIcon.link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {socialIcon.icon}
                  </a>
                ))}
              </Bounce>
              <h1>:للتواصل</h1>
            </div>
          </div>
        </div>
        <div className="mt-8 border-t border-gray-700 pt-8 flex justify-center">
          <p
            className="w-full sm:w-auto text-l text-gray-400 italic"
            style={{ letterSpacing: "2px" }}
          >
            © {new Date().getFullYear()} Sultan-Creep. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
