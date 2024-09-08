import React from "react";

const CardSkeleton = () => {
  return (
    <div className="w-full h-auto min-h-[305px] rounded-xl bg-sofBlack hover:bg-gray-800 cursor-pointer animate-pulse">
      <div className="w-full min-h-[228px] h-auto object-cover bg-slate-800 rounded-xl"></div>
      <div>
        <div className="text-center w-24 my-4 mx-auto font-bold py-4 font-custom bg-slate-700 text-appColor text-md rounded-xl"></div>
      </div>
    </div>
  );
};

export default CardSkeleton;
