import React from "react";
import SearchBar from "../../components/searchBar/SearchBar";
import Filters from "../../components/filters/Filters";
import Cards from "../../components/cards/Cards";
import Pagination from "../../components/pagination/Pagination";
import NoResult from "../../components/noResult/NoResult";

const Home = () => {
  const result = true;
  return (
    <div className="w-screen min-h-[800px] h-auto">
      <SearchBar />
      <Filters />
      {result ? <Cards /> : <NoResult />}
      {result ? <Pagination /> : null}
    </div>
  );
};

export default Home;
