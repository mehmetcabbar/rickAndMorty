const DetailsSkeleton = () => {
  return (
    <div className="w-full h-auto min-h-[800px]">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-4 justify-center items-center mt-14 animate-pulse">
        <div className="w-[240px] h-[240px] sm:w-[300px] sm:h-[300px] lg:w-[400px] lg:h-[400px] rounded-full bg-slate-800 mx-auto"></div>
        <div className="flex flex-col gap-2 ">
          <div className="lg:w-2/4 w-full h-10 rounded-xl bg-slate-900" />
          <div className="lg:w-2/4 w-full h-10 rounded-xl bg-slate-900" />
          <div className="lg:w-2/4 w-full h-10 rounded-xl bg-slate-900" />
          <div className="lg:w-2/4 w-full h-10 rounded-xl bg-slate-900" />
          <div className="mt-10 w-28 h-12 rounded-2xl flex justify-center items-center bg-slate-700 font-custom"></div>
        </div>
      </div>
    </div>
  );
};

export default DetailsSkeleton;
