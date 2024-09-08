const Pagination = () => {
  const outsideBox =
    "w-12 h-12 md:w-16 md:h-16 bg-sofBlack hover:bg-appColor hover:bg- flex justify-center items-center rounded-xl cursor-pointer font-custom text-sm md:text-md";
  return (
    <div className="text-white flex w-full h-auto justify-center mt-8 gap-1 px-4">
      <div className={outsideBox}>
        <i className="fa fa-chevron-left"></i>
      </div>
      <div className={outsideBox}>1</div>
      <div className={outsideBox}>2</div>
      <div className={outsideBox}>...</div>
      <div className={outsideBox}>9</div>
      <div className={outsideBox}>10</div>
      <div className={outsideBox}>
        <i className="fa fa-chevron-right"></i>
      </div>
    </div>
  );
};

export default Pagination;
