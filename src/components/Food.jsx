import React from "react";
import { Fade } from "react-reveal";
import Card from "./Card.jsx";
import "../style/food.css";
import DataNotFound from "./DataNotFound.jsx";
const Food = ({ itemsData, filterbyCategory, allCategory, filterbyPrice }) => {
  const onFilter = (cat) => {
    filterbyCategory(cat);
  };
  const onFilterPrice = (cat) => {
    filterbyPrice(cat);
  };
  return (
    <div className="max-w-[1640px] m-auto px-4 py-12" id="menu">
      <h1 className="text-orange-600 font-bold text-4xl text-center">
        Sultan Menu
      </h1>
      {/* Filter Row */}
      <div className="flex flex-col lg:flex-row justify-between">
        {/* Fliter Type */}
        <Fade left>
          <div>
            <p className="font-bold text-gray-700 text-xl">تصنيف حسب النوع</p>
            <div className="flex justfiy-between flex-wrap">
              {allCategory.length >= 1 ? (
                allCategory.map((cat, index) => {
                  return (
                    <button
                      key={index}
                      onClick={() => onFilter(cat)}
                      className="m-2 btn-cat"
                    >
                      {" "}
                      {cat}{" "}
                    </button>
                  );
                })
              ) : (
                <h1>No categories now</h1>
              )}
            </div>
          </div>
        </Fade>

        {/* Filter Price */}
        <Fade right>
          <div>
            <p className="font-bold text-gray-700">تصنيف حسب السعر</p>
            <div className="flex justify-between max-w-[390px] w-full">
              <button
                onClick={() => onFilterPrice("$$$$")}
                className="m-2 btn-price"
              >
                150-200
              </button>
              <button
                onClick={() => onFilterPrice("$$$")}
                className="m-2 btn-price"
              >
                100-150
              </button>
              <button
                onClick={() => onFilterPrice("$$")}
                className="m-2 btn-price"
              >
                50-100
              </button>
              <button
                onClick={() => onFilterPrice("$")}
                className="m-2 btn-price"
              >
                0-50
              </button>
            </div>
          </div>
        </Fade>
      </div>

      {/* Display foods */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 pt-4">
        {itemsData.length >= 1 ? (
          itemsData.map((item) => {
            return <Card key={item.id} item={item} />;
          })
        ) : (
          <DataNotFound />
        )}
      </div>
    </div>
  );
};

export default Food;
