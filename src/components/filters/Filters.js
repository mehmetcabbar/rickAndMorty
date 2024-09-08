import { useState } from "react";
import {
  getAllCharacters,
  getFilteredResults,
} from "../../utils/service/service";
import { isEqual, lowerCase } from "lodash";
import { useDispatch } from "react-redux";
import {
  addData,
  addInfo,
  endCall,
  setError,
  startCall,
} from "../../redux/characterSlice";

const Filters = () => {
  const dispatch = useDispatch();
  const myFilters = ["All", "Female", "Male", "Genderless", "Unknown"];
  const [active, setActive] = useState("All");

  const handleFilter = async (filter) => {
    setActive(filter);
    if (isEqual(filter, "All")) {
      dispatch(startCall());
      const response = await getAllCharacters(1);
      if (isEqual(response.status, 200)) {
        dispatch(addData(response.data.results));
        dispatch(addInfo(response.data.info));
      } else {
        dispatch(setError());
      }
      dispatch(endCall());
    } else {
      dispatch(startCall());
      const response = await getFilteredResults(lowerCase(filter));
      if (isEqual(response.status, 200)) {
        dispatch(addData(response.data.results));
        dispatch(addInfo(response.data.info));
      } else {
        dispatch(setError());
      }
      dispatch(endCall());
    }
  };

  return (
    <div className="text-white container mx-auto flex gap-5 mt-8 px-4 md:px-0">
      {myFilters.map((filter, key) => (
        <div key={key} className="flex items-center font-custom">
          <label
            onClick={() => handleFilter(filter)}
            className={
              filter === active
                ? "text-appColor"
                : "text-customGray hover:text-white cursor-pointer"
            }
          >
            {filter}
          </label>
        </div>
      ))}
    </div>
  );
};

export default Filters;
