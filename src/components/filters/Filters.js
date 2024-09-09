import { useState } from "react";
import { isEqual, lowerCase } from "lodash";
import { useDispatch } from "react-redux";
import { useNavigate, useSearchParams } from "react-router-dom";
import { setPage } from "../../redux/characterSlice";

const Filters = ({ onChange }) => {
  const myFilters = [
    { key: "all", value: "All" },
    { key: "female", value: "Female" },
    { key: "male", value: "Male" },
    { key: "genderless", value: "Genderless" },
    { key: "unknown", value: "Unknown" },
  ];
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [searchParams] = useSearchParams();
  const gender = searchParams.get("gender");
  const [active, setActive] = useState(gender || "all");

  const handleFilter = async (filter) => {
    setActive(filter);
    dispatch(setPage(1));
    const newParams = new URLSearchParams(searchParams);

    if (isEqual(filter, "all")) {
      newParams.delete("gender");
      navigate(`/?${newParams.toString()}`);
      onChange("");
    } else {
      newParams.set("gender", lowerCase(filter));
      navigate(`/?${newParams.toString()}`);
      onChange(filter);
    }
  };

  return (
    <div className="container mx-auto px-4 mt-8 text-white flex gap-5 md:px-0">
      {myFilters.map((filter, key) => (
        <div key={key} className="flex items-center font-custom">
          <label
            onClick={() => handleFilter(filter.key)}
            className={
              filter.key === active
                ? "text-appColor"
                : "text-customGray hover:text-white cursor-pointer"
            }
          >
            {filter.value}
          </label>
        </div>
      ))}
    </div>
  );
};

export default Filters;
