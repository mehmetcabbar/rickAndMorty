import React from "react";
import SearchBar from "../components/searchBar/SearchBar";
import Filters from "../components/filters/Filters";
import Cards from "../components/cards/Cards";

const Navigation = () => {
  return (
    <div className="w-screen min-h-[800px] h-auto">
      <SearchBar />
      <Filters />
      <Cards />
    </div>
  );
};

export default Navigation;
