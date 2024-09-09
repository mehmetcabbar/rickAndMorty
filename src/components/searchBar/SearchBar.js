import { useState } from "react";
import MyButton from "../myButton/MyButton";
import { useTranslation } from "react-i18next";
import { getSearchResults } from "../../utils/service/service";
import { isEqual, lowerCase } from "lodash";
import { useDispatch, useSelector } from "react-redux";
import {
  addData,
  addInfo,
  endCall,
  setError,
  startCall,
} from "../../redux/characterSlice";

const SearchBar = () => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const isLoading = useSelector((state) => state.characters.isLoading);
  const [search, setSearch] = useState("");

  const handleSearch = async () => {
    dispatch(startCall());
    const response = await getSearchResults(lowerCase(search));
    if (isEqual(response.status, 200)) {
      dispatch(addData(response.data.results));
      dispatch(addInfo(response.data.info));
    } else {
      dispatch(setError());
    }
    dispatch(endCall());
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  return (
    <div className="w-screen h-auto grid place-items-center mt-14 px-4">
      <div className="w-full md:w-[600px] h-16 bg-sofBlack text-left border-customBorder border flex items-center rounded-2xl">
        <input
          type="text"
          placeholder={t("findYourCharacter")}
          className="w-full h-full bg-transparent focus:outline-none pl-4 text-sm font-custom text-appColor"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          onKeyDown={handleKeyDown}
        />
        <div className="h-full w-auto my-2 px-1 py-1">
          <MyButton
            title={
              isLoading ? (
                <i class="fa fa-spinner" aria-hidden="true"></i>
              ) : (
                t("search")
              )
            }
            onClick={handleSearch}
          />
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
