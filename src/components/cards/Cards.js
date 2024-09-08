import { useEffect, useState } from "react";
import SingleCard from "../singleCard/SingleCard";

const Cards = () => {
  const arr = Array.from(Array(20).keys());
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://rickandmortyapi.com/api/character/?page=1")
      .then((res) => res.json())
      .then((data) => setData(data.results));
  }, []);

  console.log(data);

  return (
    <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 py-6 px-4 md:px-0">
      {data.map((item, key) => (
        <SingleCard name={item?.name} image={item?.image} key={key} />
      ))}
    </div>
  );
};

export default Cards;
