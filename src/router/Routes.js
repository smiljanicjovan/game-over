// React router dom
import { Routes as RoutesWrap, Route } from "react-router-dom";

// Global pages
import { Home, AboutUs, BestSellers, Platforms, Search } from "../pages";

const Routes = () => {
  return (
    <RoutesWrap>
      <Route path="/" element={<Home />} />
      <Route path="/about-us" element={<AboutUs />} />
      <Route path="/bestsellers" element={<BestSellers />} />
      <Route path="/platforms" element={<Platforms />} />
      <Route path="/Search" element={<Search />} />
    </RoutesWrap>
  );
};

export default Routes;
