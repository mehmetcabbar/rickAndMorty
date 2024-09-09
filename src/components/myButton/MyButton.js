const MyButton = ({ onClick, title }) => {
  return (
    <div
      onClick={onClick}
      className="px-4 min-w-24 text-center bg-appColor justify-center h-full items-center flex font-custom rounded-2xl cursor-pointer"
    >
      {title}
    </div>
  );
};

export default MyButton;
