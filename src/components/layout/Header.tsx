// React router dom
import { Link } from "react-router-dom";

// Image
import logo from "../../assets/images/logo.webp";

// Vendors
import styled, { css } from "styled-components";

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 20px 0;

  a {
    color: black;
    text-decoration: none;
  }

  ${({ theme: { defaults, colors, font, breakpoints } }) => css`
    background-color: ${colors.primary};

    padding-left: ${defaults.gutter * 1.25}px;
    padding-right: ${defaults.gutter * 1.25}px;
  `}
`;

const Image = styled.img`
  width: 200px;
`;

const Icon = styled.svg`
  width: 35px;
  height: 32px;
  fill: none;

  path {
    fill: black;
  }
`;

const Header = () => {
  return (
    <Container>
      <div>
        <Image src={logo} alt="" />
      </div>

      <div>
        <Link to="/">Home</Link>
        <Link to="/about-us">About</Link>
        <Link to="/platforms">Platforms</Link>
        <Link to="/bestsellers">Bestsellers</Link>
        <Link to="/search">Search</Link>
      </div>

      <div>
        <Icon viewBox="0 0 20 18" xmlns="http://www.w3.org/2000/svg">
          <path d="M19.756 2.345C19.662 2.23681 19.5458 2.15004 19.4154 2.09052C19.285 2.03101 19.1433 2.00014 19 2H5.181L4.986 0.836C4.94718 0.602499 4.82679 0.390339 4.64624 0.23726C4.4657 0.0841807 4.23671 0.000108969 4 0H1.75C1.48478 0 1.23043 0.105357 1.04289 0.292893C0.855357 0.48043 0.75 0.734784 0.75 1C0.75 1.26522 0.855357 1.51957 1.04289 1.70711C1.23043 1.89464 1.48478 2 1.75 2H3.153L5.013 13.164L5.058 13.288L5.112 13.439L5.232 13.618L5.327 13.73L5.52 13.86L5.632 13.925C5.7483 13.9736 5.87296 13.9991 5.999 14H17C17.2652 14 17.5196 13.8946 17.7071 13.7071C17.8946 13.5196 18 13.2652 18 13C18 12.7348 17.8946 12.4804 17.7071 12.2929C17.5196 12.1054 17.2652 12 17 12H6.847L6.681 11H18C18.2406 11 18.4732 10.9133 18.6551 10.7557C18.8369 10.5981 18.9558 10.3802 18.99 10.142L19.99 3.142C20.0103 3.00015 19.9998 2.8556 19.9595 2.71811C19.9191 2.58062 19.8497 2.45339 19.756 2.345V2.345ZM17.847 4L17.562 6H14V4H17.847ZM13 4V6H10V4H13ZM13 7V9H10V7H13ZM9 4V6H6L5.852 6.03L5.514 4H9ZM6.014 7H9V9H6.347L6.014 7V7ZM14 9V7H17.418L17.133 9H14Z" />
          <path d="M7.5 18C8.32843 18 9 17.3284 9 16.5C9 15.6716 8.32843 15 7.5 15C6.67157 15 6 15.6716 6 16.5C6 17.3284 6.67157 18 7.5 18Z" />
          <path d="M16.5 18C17.3284 18 18 17.3284 18 16.5C18 15.6716 17.3284 15 16.5 15C15.6716 15 15 15.6716 15 16.5C15 17.3284 15.6716 18 16.5 18Z" />
        </Icon>
      </div>
    </Container>
  );
};

export default Header;
