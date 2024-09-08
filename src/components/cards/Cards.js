import SingleCard from "../singleCard/SingleCard";
import { useSelector } from "react-redux";

const Cards = () => {
  const data = useSelector((state) => state.characters.data);

  return (
    <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 py-6 px-4 md:px-0">
      {data.map((item, key) => (
        <SingleCard
          id={item?.id}
          name={item?.name}
          image={item?.image}
          key={key}
        />
      ))}
    </div>
  );
};

export default Cards;
