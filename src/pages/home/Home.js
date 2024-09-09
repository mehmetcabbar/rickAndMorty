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

const Home = () => {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.characters.data);
  const page = useSelector((state) => state.characters.page);
  const totalPage = useSelector((state) => state.characters.info.pages);

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
    // eslint-disable-next-line
  }, [page]);

  return (
    <div className="w-screen min-h-[800px] h-auto">
      <SearchBar />
      <Filters />
      {size(data) > 0 ? <Cards /> : <NoResult />}
      {size(data) > 20 ? <Pagination /> : null}
    </div>
  );
};

export default Home;
