import { upperFirst } from "lodash";

const DetailsItem = ({ icon, title, content }) => {
  return (
    <div className="text-white flex items-center gap-4 font-custom">
      <div className="flex items-center gap-8">
        <div className="flex items-center gap-2 w-28">
          <div className="w-10 h-10 bg-appColor text-customBlack rounded-full flex justify-center items-center">
            <i className={`fa ${icon}`}></i>
          </div>
          {title}:
        </div>
        <div>{upperFirst(content)}</div>
      </div>
    </div>
  );
};

export default DetailsItem;
