const MyButton = ({ onClick, title }) => {
  return (
    <div
      onClick={onClick}
      className="px-4 bg-appColor h-full items-center flex font-custom rounded-2xl cursor-pointer"
    >
      {title}
    </div>
  );
};

export default MyButton;
