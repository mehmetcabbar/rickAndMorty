import CardSkeleton from "../cardSkeleton/CardSkeleton";
import SingleCard from "../singleCard/SingleCard";
import { useSelector } from "react-redux";

const Cards = () => {
  const arr = Array.from(Array(8).keys());
  const data = useSelector((state) => state.characters.data);
  const isLoading = useSelector((state) => state.characters.isLoading);

  return (
    <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 py-6 px-4 md:px-0">
      {data && !isLoading
        ? data.map((item, key) => (
            <SingleCard
              id={item?.id}
              name={item?.name}
              image={item?.image}
              key={key}
            />
          ))
        : isLoading
        ? arr.map((key) => <CardSkeleton key={key} />)
        : null}
    </div>
  );
};

export default Cards;
