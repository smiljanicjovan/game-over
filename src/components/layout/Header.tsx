// React router dom
import { Link } from "react-router-dom";

// Vendors
import styled from "styled-components";

const NavBar = styled.div`
  padding: 20px 0;

  a {
    color: black;
    text-decoration: none;
  }
`;

const Header = () => {
  return (
    <NavBar>
      <Link to="/">Home</Link>
      <Link to="/about-us">About</Link>
    </NavBar>
  );
};

export default Header;
