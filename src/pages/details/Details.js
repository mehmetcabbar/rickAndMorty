import { Link, useParams } from "react-router-dom";
import DetailsItem from "../../components/detailsItem/DetailsItem";
import { useTranslation } from "react-i18next";

const Details = () => {
  const { id } = useParams();
  const { t } = useTranslation();
  return (
    <div className="w-full h-auto min-h-[800px]">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-4 justify-center items-center mt-14">
        <img
          src={`https://rickandmortyapi.com/api/character/avatar/${id}.jpeg`}
          alt="rick"
          className="w-full sm:w-[300px] sm:h-[300px] lg:w-[400px] lg:h-[400px] h-auto min-h-[305px] rounded-full bg-sofBlack mx-auto"
        />
        <div className="flex flex-col gap-2">
          <DetailsItem
            icon={"fa-user-o"}
            title={"Name"}
            content={"Ricky Sanchez"}
          />
          <DetailsItem icon={"fa-heart-o"} title={"Status"} content={"Alive"} />
          <DetailsItem icon={"fa-globe"} title={"Species"} content={"Earth"} />
          <DetailsItem
            icon={"fa-venus-mars"}
            title={"Gender"}
            content={"Unknown"}
          />
          <DetailsItem
            icon={"fa-wpexplorer"}
            title={"Origin"}
            content={"Earth (C-137)"}
          />
          <Link to={"/"}>
            <div className="mt-10 w-28 h-12 rounded-2xl flex justify-center items-center bg-appColor font-custom">
              {t("goBack")}
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Details;
