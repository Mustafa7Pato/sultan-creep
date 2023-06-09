import React, { useState } from "react";
import Slider from "react-slick";
import { data } from "../data/data";
import "../style/gallery.css";

const Gallery = () => {
  const [imgs, setImgs] = useState(data);
  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    arrows: false,
    centerPadding: "60px",
    slidesToShow: 3,
    autoplay: true,
    autoplaySpeed: 3000,
    speed: 1000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          centerPadding: "40px",
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          centerPadding: "20px",
        },
      },
    ],
  };

  return (
    <div className="gallery max-w-[1640px] mx-auto">
      <div className=" text-center">
        <h1>
          معرض <span>اعمالنا</span>{" "}
        </h1>
        <Slider {...settings}>
          {imgs.length >= 1 ? (
            imgs.map((img, index) => {
              return (
                <div key={index}>
                  {" "}
                  <div className="h-80 img-gallery w-96 sm:p-3 my-4">
                    <img
                      src={img.image}
                      alt=""
                      className="w-full   h-full shadow-xl rounded-2xl transition-all duration-300 transform-gpu hover:scale-105 shadow-md hover:shadow-lg cursor-pointer"
                    />
                  </div>
                </div>
              );
            })
          ) : (
            <h1>no current new data</h1>
          )}
        </Slider>
      </div>
    </div>
  );
};

export default Gallery;
