import React from "react";
import { useParams } from "react-router-dom";

const Details = () => {
  const { id } = useParams();
  return <div className="text-white h-auto min-h-[800px]">Details; {id} </div>;
};

export default Details;
