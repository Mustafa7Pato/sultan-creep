import React, { useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";
const Search = ({ filterbySearch }) => {
  const [searchValue, setSearchValue] = useState("");
  const onSearch = () => {
    filterbySearch(searchValue);
    setSearchValue("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <form
      onSubmit={handleSubmit}
      className="search rounded-full flex items-center px-2 w-[200px] sm:w-[400px] lg:w-[500px] mx-5"
    >
      <button className="border-none" onClick={() => onSearch()}>
        <AiOutlineSearch size={25} />
      </button>
      <input
        className="bg-transparent p-2 w-full focus:outline-none text-center text-xl"
        type="search"
        placeholder="...ابحث اﻻن"
        onChange={(e) => setSearchValue(e.target.value)}
        value={searchValue}
      />
    </form>
  );
};

export default Search;
