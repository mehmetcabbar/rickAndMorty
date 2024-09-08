import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ScrollToTop from "../components/scrollToTop/ScrollToTop";
import Home from "../pages/home/Home";
import Details from "../pages/details/Details";
import NotFound from "../pages/notFound/NotFound";

const Navigation = () => {
  return (
    <Router>
      <ScrollToTop />
      <Routes onUpdate={() => window?.scrollTo(0, 0)}>
        <Route path="/" element={<Home />} />
        <Route path="/details/:id" element={<Details />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
};

export default Navigation;
