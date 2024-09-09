import React, { useEffect } from "react";
import SearchBar from "../../components/searchBar/SearchBar";
import Filters from "../../components/filters/Filters";
import Cards from "../../components/cards/Cards";
import Pagination from "../../components/pagination/Pagination";
import NoResult from "../../components/noResult/NoResult";
import { useDispatch, useSelector } from "react-redux";
import {
  getAllCharacters,
  getSearchResults,
} from "../../utils/service/service";
import {
  addData,
  addInfo,
  endCall,
  startCall,
  setError,
  setRegularResult,
  setPage,
} from "../../redux/characterSlice";
import { get, isEqual, lowerCase, size } from "lodash";
import { useSearchParams } from "react-router-dom";

const Home = () => {
  const dispatch = useDispatch();
  const [searchParams] = useSearchParams();
  const searchQuery = searchParams.get("query");
  const genderQuery = searchParams.get("gender");
  const data = useSelector((state) => state.characters.data);
  const page = useSelector((state) => state.characters.page);

  const getData = async (query, gender) => {
    let currentPage = page || 1;
    if (query || gender) {
      dispatch(setPage(1));
      currentPage = 1;
    }

    dispatch(startCall());
    const res =
      query || searchQuery || gender || genderQuery
        ? await getSearchResults(
            lowerCase(query || searchQuery),
            currentPage,
            lowerCase(gender || genderQuery)
          )
        : await getAllCharacters(page);

    if (isEqual(res.status, 200)) {
      dispatch(addData(get(res, "data.results")));
      dispatch(addInfo(get(res, "data.info")));
      dispatch(setRegularResult());
    } else {
      dispatch(setError());
    }
    dispatch(endCall());
  };

  useEffect(() => {
    getData();
    // eslint-disable-next-line
  }, [page, searchQuery, genderQuery]);

  return (
    <div className="w-screen min-h-[800px] h-auto">
      <SearchBar handleSearch={getData} />
      <Filters onChange={(gender) => getData(null, gender)} />
      {size(data) > 0 ? <Cards /> : <NoResult />}
      <Pagination />
    </div>
  );
};

export default Home;
