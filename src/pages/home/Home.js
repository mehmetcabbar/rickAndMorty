import React, { useEffect } from "react";
import SearchBar from "../../components/searchBar/SearchBar";
import Filters from "../../components/filters/Filters";
import Cards from "../../components/cards/Cards";
import Pagination from "../../components/pagination/Pagination";
import NoResult from "../../components/noResult/NoResult";
import { useDispatch, useSelector } from "react-redux";
import { getAllCharacters } from "../../utils/service/service";
import {
  addData,
  addInfo,
  endCall,
  startCall,
  setError,
} from "../../redux/characterSlice";
import { get, isEqual, size } from "lodash";
import ScrollToTop from "../../components/scrollToTop/ScrollToTop";

const Home = () => {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.characters.data);
  const page = useSelector((state) => state.characters.page);

  useEffect(() => {
    const getData = async () => {
      dispatch(startCall());
      const res = await getAllCharacters(page);
      if (isEqual(res.status, 200)) {
        dispatch(addData(get(res, "data.results")));
        dispatch(addInfo(get(res, "data.info")));
      } else {
        dispatch(setError());
      }
      dispatch(endCall());
    };

    getData();
  }, [page, dispatch]);

  return (
    <div className="w-screen min-h-[800px] h-auto">
      <ScrollToTop />
      <SearchBar />
      <Filters />
      {size(data) > 0 ? <Cards /> : <NoResult />}
      <Pagination />
    </div>
  );
};

export default Home;
