// React router dom
import { Routes as RoutesWrap, Route } from "react-router-dom";

// Global pages
import HomePage from "../pages/Home";
import AboutUsPage from "../pages/About";

const Routes = () => {
  return (
    <RoutesWrap>
      <Route path="/" element={<HomePage />} />
      <Route path="/about-us" element={<AboutUsPage />} />
    </RoutesWrap>
  );
};

export default Routes;
