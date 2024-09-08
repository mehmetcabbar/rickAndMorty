import React from "react";
import { useTranslation } from "react-i18next";
import MyButton from "../../components/myButton/MyButton";
import { Link } from "react-router-dom";

const NotFound = () => {
  const { t } = useTranslation();
  return (
    <div className="container h-auto min-h-[800px] mx-auto px-4 text-center text-appColor font-custom text-2xl mt-10 whitespace-pre-line">
      <img
        src="https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExeTlpbXl3NnpqaHU2c21xOGRjMnQ2bmljZDE2NXZhZWE5YmUyNGJociZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/UU2VKeTNOgFFoYiAIp/giphy.webp"
        alt="notFound"
        className="w-52 h-52 lg:h-96 lg:w-96 mx-auto rounded-full bg-sofBlack"
      />
      <div className="mt-8">{t("notFound")}</div>
      <div className="w-36 mx-auto mt-8 cursor-pointer bg-appColor text-customBlack py-2 rounded-xl text-lg hover:opacity-75">
        <Link className="w-36 h-full" to={"/"}>
          {t("homePage")}
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
