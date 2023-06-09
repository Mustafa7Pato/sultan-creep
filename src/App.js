import React, { useState } from "react";
import Navbar from "./components/Navbar";
import HeadlineCards from "./components/HeadlineCards";
import Food from "./components/Food";
import Carsoul from "./components/Carsoul";
import { data } from "./data/data";
import Gallery from "./components/Gallery";
import Location from "./components/Location";
import Footer from "./components/Footer";
function App() {
  const [itemsData, setItemsData] = useState(data);
  const allCategory = ["الكل", ...new Set(data.map((i) => i.category))];
  console.log(allCategory);
  //filter by category
  const filterbyCategory = (cat) => {
    if (cat === "الكل") {
      setItemsData(data);
    } else {
      const newArr = data.filter((item) => item.category === cat);
      setItemsData(newArr);
    }
  };
  const filterbyPrice = (cat) => {
    const newArr = data.filter((item) => item.value === cat);
    setItemsData(newArr);
  };

  const filterbySearch = (word) => {
    if (word !== "") {
      const lowerCaseWord = word.toLowerCase();
      const newArr = data.filter((item) =>
        item.name.toLowerCase().includes(lowerCaseWord)
      );
      setItemsData(newArr);
    }
  };

  return (
    <div>
      <Navbar />
      <Carsoul />
      <HeadlineCards />
      <Food
        itemsData={itemsData}
        filterbyCategory={filterbyCategory}
        allCategory={allCategory}
        filterbyPrice={filterbyPrice}
        filterbySearch={filterbySearch}
      />
      <Gallery />
      <Location />
      <Footer />
    </div>
  );
}

export default App;
