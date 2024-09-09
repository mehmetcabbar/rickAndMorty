import { useDispatch, useSelector } from "react-redux";
import {
  decrementPage,
  incrementPage,
  setPage,
} from "../../redux/characterSlice";
import { isEqual, toInteger } from "lodash";

const Pagination = () => {
  const dispatch = useDispatch();
  const page = useSelector((state) => state.characters.page);
  const info = useSelector((state) => state.characters.info);
  const outsideBox =
    "w-12 h-12 md:w-16 md:h-16 bg-sofBlack hover:bg-appColor hover:bg- flex justify-center items-center rounded-xl cursor-pointer font-custom text-sm md:text-md";

  const handlePrev = () => {
    if (page > 1) {
      dispatch(decrementPage(page - 1));
      window?.scrollTo(0, 0);
    }
  };

  const handleNext = () => {
    if (info?.pages > page) {
      dispatch(incrementPage(page + 1));
      window?.scrollTo(0, 0);
    }
  };

  const handlePage = (myPages) => {
    dispatch(setPage(myPages));
    window?.scrollTo(0, 0);
  };

  return (
    <div className="text-white flex w-full h-auto justify-center mt-8 gap-1 px-4">
      <div onClick={handlePrev} className={outsideBox}>
        <i className="fa fa-chevron-left"></i>
      </div>
      <div className={outsideBox}>{toInteger(page)}</div>
      <div onClick={() => handlePage(page + 1)} className={outsideBox}>
        {toInteger(page) + 1}
      </div>
      <div className={outsideBox}>
        {isEqual(info?.pages - 5, page) ? info?.pages - 2 : "..."}
      </div>
      <div onClick={() => handlePage(info?.pages - 1)} className={outsideBox}>
        {toInteger(info?.pages) - 1}
      </div>
      <div onClick={() => handlePage(info?.pages)} className={outsideBox}>
        {toInteger(info?.pages)}
      </div>
      <div onClick={handleNext} className={outsideBox}>
        <i className="fa fa-chevron-right"></i>
      </div>
    </div>
  );
};

export default Pagination;
