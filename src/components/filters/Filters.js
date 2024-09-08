const Filters = () => {
  const myFilters = ["All", "Female", "Male", "Unknown"];
  const active = "All";
  return (
    <div className="text-white container mx-auto flex gap-5 mt-8">
      {myFilters.map((filter, key) => (
        <div key={key} className="flex items-center font-custom">
          <label
            className={
              filter === active
                ? "text-white cursor-pointer"
                : "text-customGray hover:text-appColor cursor-pointer"
            }
          >
            {filter}
          </label>
        </div>
      ))}
    </div>
  );
};

export default Filters;
