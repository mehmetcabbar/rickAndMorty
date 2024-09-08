import SingleCard from "../singleCard/SingleCard";

const Cards = () => {
  const arr = Array.from(Array(20).keys());

  return (
    <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 py-6 px-4 md:px-0">
      {arr.map((item, key) => (
        <SingleCard key={key} />
      ))}
    </div>
  );
};

export default Cards;
