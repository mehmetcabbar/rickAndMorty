import React from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

const DetailsError = () => {
  const { t } = useTranslation();
  return (
    <div className="w-full h-auto min-h-[800px]">
      <img
        src="https://t3.ftcdn.net/jpg/05/68/25/10/360_F_568251074_ugUHqc0YExD4VqaEGvHG5xFZFJPC7i2P.jpg"
        alt="error"
        className="rounded-full bg-sofBlack w-52 h-52 lg:h-96 lg:w-96 mx-auto"
      />
      <div className="text-red-300 font-custom text-center text-2xl mt-14 whitespace-pre-line">
        {t("errorContent")}
      </div>
      <Link to={"/"}>
        <div className="mt-10 w-28 h-12 mx-auto rounded-2xl flex justify-center items-center bg-appColor font-custom">
          {t("homePage")}
        </div>
      </Link>
    </div>
  );
};

export default DetailsError;
