import { useNavigate, useParams } from "react-router-dom";
import DetailsItem from "../../components/detailsItem/DetailsItem";
import { useTranslation } from "react-i18next";
import { useEffect, useState } from "react";
import { getSingleCharacter } from "../../utils/service/service";
import { isEqual, get } from "lodash";
import DetailsError from "../../components/detailsError/DetailsError";
import DetailsSkeleton from "../../components/detailsSkeleton/DetailsSkeleton";

const Details = () => {
  const { id } = useParams();
  const { t } = useTranslation();
  const navigate = useNavigate();
  const [data, setData] = useState({});
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getDetails = async () => {
      const response = await getSingleCharacter(id);
      if (isEqual(response.status, 200)) {
        setData(response.data);
      } else {
        setError(true);
      }
      setLoading(false);
    };

    getDetails();
  }, [id]);

  if (error) {
    return <DetailsError />;
  }

  if (loading) {
    return <DetailsSkeleton />;
  }

  return (
    <div className="w-full h-auto min-h-[800px]">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-4 justify-center items-center mt-14">
        <img
          src={`https://rickandmortyapi.com/api/character/avatar/${get(
            data,
            "id"
          )}.jpeg`}
          alt="rick"
          className="w-full sm:w-[300px] sm:h-[300px] lg:w-[400px] lg:h-[400px] h-auto min-h-[305px] rounded-full bg-sofBlack mx-auto"
        />
        <div className="flex flex-col gap-2">
          <DetailsItem
            icon={"fa-user-o"}
            title={"Name"}
            content={get(data, "name")}
          />
          <DetailsItem
            icon={"fa-heart-o"}
            title={"Status"}
            content={get(data, "status")}
          />
          <DetailsItem
            icon={"fa-globe"}
            title={"Species"}
            content={get(data, "species")}
          />
          <DetailsItem
            icon={"fa-venus-mars"}
            title={"Gender"}
            content={get(data, "gender")}
          />
          <DetailsItem
            icon={"fa-wpexplorer"}
            title={"Origin"}
            content={get(data, "origin.name")}
          />
          <div
            onClick={() => navigate(-1)}
            className="mt-10 w-28 h-12 rounded-2xl flex justify-center items-center cursor-pointer bg-appColor font-custom"
          >
            {t("goBack")}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;
