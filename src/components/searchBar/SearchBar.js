import { useState } from "react";
import { lowerCase } from "lodash";
import { useSelector } from "react-redux";
import MyButton from "../myButton/MyButton";
import { useTranslation } from "react-i18next";
import { useNavigate, useSearchParams } from "react-router-dom";

const SearchBar = ({ handleSearch }) => {
  const [searchParams] = useSearchParams();
  const searchQuery = searchParams.get("query");

  const { t } = useTranslation();
  const navigate = useNavigate();
  const [search, setSearch] = useState(searchQuery || "");
  const isLoading = useSelector((state) => state.characters.isLoading);

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      const newParams = new URLSearchParams(searchParams);

      if (search) {
        newParams.set("query", lowerCase(search));
      } else {
        newParams.delete("query");
      }

      navigate(`/?${newParams.toString()}`);
      handleSearch(search);
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
                <i className="fa fa-spinner" aria-hidden="true"></i>
              ) : (
                t("search")
              )
            }
            onClick={() => handleSearch(search)}
          />
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
