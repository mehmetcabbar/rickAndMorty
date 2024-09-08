import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "../pages/home/Home";
import Details from "../pages/details/Details";

const Navigation = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/details/:id" element={<Details />} />
        <Route
          path="*"
          element={<h2 className="text-white">404 - Page Not Found</h2>}
        />
      </Routes>
    </Router>
  );
};

export default Navigation;
