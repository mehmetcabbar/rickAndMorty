import { BrowserRouter as Router } from "react-router-dom";
import Logo from "../../images/logo.svg";

const Header = () => {
  return (
    <Router>
      <div className="text-appColor pt-14">
        <a href="/">
          <img
            src={Logo}
            alt="Logo"
            loading="eager"
            className="w-auto h-auto ml-auto mr-auto"
          />
        </a>
      </div>
    </Router>
  );
};

export default Header;
