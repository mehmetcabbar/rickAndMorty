import { useState } from "react";
import MyButton from "../myButton/MyButton";
import { useTranslation } from "react-i18next";

const SearchBar = () => {
  const { t } = useTranslation();
  const [search, setSearch] = useState("");

  const handleSearch = async () => {
    console.log("search clicked");
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
        />
        <div className="h-full w-auto my-2 px-1 py-1">
          <MyButton title={t("search")} onClick={handleSearch} />
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
