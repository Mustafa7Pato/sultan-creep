import React, { useEffect, useState } from "react";
import { FaHeart, FaStar } from "react-icons/fa";
import { Zoom } from "react-reveal";

const Card = ({ item }) => {
  const [favorites, setFavorites] = useState(
    JSON.parse(localStorage.getItem("favorites")) || {}
  );

  useEffect(() => {
    localStorage.setItem("favorites", JSON.stringify(favorites));
  }, [favorites]);

  const handleFavoriteClick = (id) => {
    setFavorites((prevFavorites) => ({
      ...prevFavorites,
      [id]: (prevFavorites[id] || 0) + 1,
    }));
  };
  return (
    <Zoom>
      <div className="border shadow-lg rounded-lg overflow-hidden">
        <img
          src={item.image}
          alt={item.title}
          className="w-full h-[200px] object-cover rounded-t-lg hover:scale-110 duration-300 rounded-b"
        />
        <div className="flex flex-col justify-between px-2 py-4">
          <p className="font-bold"> {item.name} </p>
          <div className="flex justify-between mt-2">
            <div className="flex items-center mr-2">
              <FaStar className="text-orange-500" />
              <p className="ml-1"> {item.rating} </p>
            </div>
            <div className="flex items-center">
              <FaHeart
                size={20}
                className="text-red-500 cursor-pointer active:text-red-900"
                onClick={() => handleFavoriteClick(item.id)}
              />
              <span className="ml-1">
                {favorites[item.id]
                  ? favorites[item.id]
                  : (Math.random() * 999 + 1).toFixed(0)}
              </span>
            </div>
            <p>
              <span className="bg-orange-500 text-white p-1 relative bottom-0  rounded-full">
                {" "}
                {item.price}{" "}
              </span>
            </p>
          </div>
        </div>
      </div>
    </Zoom>
  );
};

export default Card;
