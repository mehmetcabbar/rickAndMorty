import React from "react";
import SearchBar from "../components/searchBar/SearchBar";
import Filters from "../components/filters/Filters";

const Navigation = () => {
  return (
    <div className="w-screen min-h-[800px] h-auto">
      <SearchBar />
      <Filters />
    </div>
  );
};

export default Navigation;
