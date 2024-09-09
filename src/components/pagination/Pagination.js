import { useDispatch, useSelector } from "react-redux";
import {
  decrementPage,
  incrementPage,
  setPage,
} from "../../redux/characterSlice";
import { isEqual } from "lodash";
import { useEffect } from "react";

const Pagination = () => {
  const dispatch = useDispatch();

  const page = useSelector((state) => state.characters.page);
  const info = useSelector((state) => state.characters.info);
  const totalPages = info?.pages || 0;

  const outsideBox = `w-12 h-12 md:w-16 md:h-16 flex justify-center items-center rounded-xl cursor-pointer font-custom text-sm md:text-md transition-all duration-300 ease-in-out`;

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

  const handlePage = (myPage) => {
    if (myPage !== page) {
      dispatch(setPage(myPage));
      window.scrollTo(0, 0);
    }
  };

  const getPages = () => {
    const pages = [];
    if (totalPages <= 7) {
      for (let i = 1; i <= totalPages; i++) {
        pages.push(i);
      }
    } else {
      pages.push(1);
      if (page > 4) pages.push("...");

      const startPage = Math.max(2, page - 2);
      const endPage = Math.min(totalPages - 1, page + 2);

      for (let i = startPage; i <= endPage; i++) {
        pages.push(i);
      }

      if (page < totalPages - 3) pages.push("...");
      pages.push(totalPages);
    }
    return pages;
  };

  useEffect(() => {
    getPages();
    // eslint-disable-next-line
  }, [page, totalPages]);

  return totalPages > 1 ? (
    <div className="text-white flex w-full h-auto justify-center mt-8 gap-1 px-4">
      <div
        onClick={handlePrev}
        className={
          isEqual(page, 1)
            ? `${outsideBox} text-sofBlack bg-gray-800`
            : `${outsideBox} bg-sofBlack hover:bg-appColor text-gray-400`
        }
      >
        <i className="fa fa-chevron-left"></i>
      </div>
      {getPages().map((pg, index) => (
        <div
          key={index}
          onClick={() => typeof pg === "number" && handlePage(pg)}
          className={`${outsideBox} ${
            isEqual(page, pg)
              ? "bg-appColor text-white border-2 border-appColor"
              : "bg-sofBlack hover:bg-appColor text-gray-400"
          } `}
        >
          {pg}
        </div>
      ))}
      {/* Next button */}
      <div
        onClick={handleNext}
        className={
          isEqual(page, totalPages)
            ? `${outsideBox} text-sofBlack bg-gray-800`
            : `${outsideBox} bg-sofBlack hover:bg-appColor text-gray-400`
        }
      >
        <i className="fa fa-chevron-right"></i>
      </div>
    </div>
  ) : null;
};

export default Pagination;
