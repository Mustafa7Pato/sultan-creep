import React, { useState } from "react";
import "../style/cusroul.css";
import { AiFillFire } from "react-icons/ai";
import { socialIcons } from "./SocialItems";
import { Bounce } from "react-reveal";

const Carsoul = () => {
  const [social, setSocial] = useState(socialIcons);
  return (
    <div className="relative carsoul max-w-[1640px] mx-auto">
      <div className="flex justify-center items-center h-full">
        <h1>
          The <span>Best</span>
        </h1>
        <h1>
          Creep <span>&Pizza</span>
          <AiFillFire className="icon" />{" "}
        </h1>
      </div>
      <div className="social-icons flex">
        <Bounce left>
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
      </div>
    </div>
  );
};

export default Carsoul;
