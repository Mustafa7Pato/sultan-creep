import React, { useState } from "react";
import { cardsData } from "./HeadCardsData";
import { Zoom } from "react-reveal";
import "../style/headCards.css";
const HeadlineCards = () => {
  const [headCards, setHeadCards] = useState(cardsData);
  return (
    <div className="max-w-[1640px] mx-auto p-4 py-12 grid md:grid-cols-3 gap-6 head-cards">
      <Zoom>
        {headCards.map((card, index) => (
          <div key={index} className="rounded-xl relative">
            {/* Overlay */}
            <div className="absolute w-full h-full bg-black/50 rounded-xl text-white">
              <p className="font-bold text-2xl px-2 pt-4">{card.title}</p>
              <p className="px-2 font-bold text-orange-400">{card.subtitle}</p>
              <button className="btn-order mx-2 absolute bottom-4">
                اطلب اﻵن
              </button>
            </div>
            <img
              className="max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl"
              src={card.imageUrl}
              alt="/"
            />
          </div>
        ))}
      </Zoom>
    </div>
  );
};

export default HeadlineCards;
