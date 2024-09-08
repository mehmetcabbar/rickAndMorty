import Logo from "../../images/logo.svg";

const Header = () => {
  return (
    <div className="text-appColor pt-14">
      <img
        src={Logo}
        alt="Logo"
        loading="eager"
        className="w-auto h-auto ml-auto mr-auto"
      />
    </div>
  );
};

export default Header;
