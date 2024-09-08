import React from "react";

const SingleCard = ({ name, image }) => {
  return (
    <div className="w-full h-auto min-h-[305px] rounded-xl bg-sofBlack hover:bg-gray-800 cursor-pointer">
      <img
        src={image}
        alt="rick"
        className="w-full min-h-[228px] h-auto object-cover rounded-t-xl lg:hover:animate-pulse"
      />
      <div>
        <h6 className="text-center font-bold py-6 font-custom text-appColor text-md">
          {name}
        </h6>
      </div>
    </div>
  );
};

export default SingleCard;
