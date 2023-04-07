import React, { useState } from "react";
import Slider from "react-slick";
import { data } from "../data/data";
import "../style/gallery.css";
const Gallery = () => {
  const [imgs, setImgs] = useState(data);
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 3000,
    autoplaySpeed: 200,
    cssEase: "linear",
    arrows: false,
    centerMode: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          centerPadding: "50px",
          centerMode: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          centerPadding: "30px",
          centerMode: true,
        },
      },
    ],
  };

  return (
    <div className="gallery mx-auto">
      <div className=" text-center">
        <h1>
          معرض <span>اعمالنا</span>{" "}
        </h1>
        <Slider {...settings}>
          {imgs.length >= 1 ? (
            imgs.map((img, index) => {
              return (
                <div>
                  <div className="h-80 w-80 sm:p-3 my-4">
                    <img
                      src={img.image}
                      alt=""
                      className="w-full h-full shadow-xl rounded-2xl transition-all duration-300 transform-gpu hover:scale-105 shadow-md hover:shadow-lg cursor-pointer"
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
