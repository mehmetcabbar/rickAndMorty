import React from "react";
import { useTranslation } from "react-i18next";

const NoResult = () => {
  const { t } = useTranslation();
  return (
    <div className="min-h-[800px] h-auto container mx-auto px-4 text-center font-custom text-appColor whitespace-pre-line mt-4 text-2xl">
      <img
        src="https://steamuserimages-a.akamaihd.net/ugc/920290553152905607/4FD2AF939C0C9923B8B9DD9A7C65E9C6C145CF3A/?imw=5000&imh=5000&ima=fit&impolicy=Letterbox&imcolor=%23000000&letterbox=false"
        className="w-52 h-52 lg:h-60 lg:w-60 mx-auto rounded-full bg-sofBlack"
        alt="noResult"
      />
      <div className="mt-8">{t("noResult")}</div>
    </div>
  );
};

export default NoResult;
