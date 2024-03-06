import React from "react";
import { Link, useLocation } from "react-router-dom";
import styled from "styled-components";

const StyledHeader = styled.header`
  background-color: #333;
  color: #fff;
  padding: 1rem;
`;

const Title = styled.h1`
  margin: 0;
  font-size: 2rem;
`;

const Nav = styled.nav`
  ul {
    list-style-type: none;
    padding: 0;
    margin: 0;
    display: flex;
  }

  li {
    margin-right: 1rem;
  }
`;

const NavLink = styled(Link)`
  color: #fff;
  text-decoration: none;
  transition: color 0.3s ease;

  &.active {
    color: #ffd700; /* Change the active color as per your preference */
  }

  &:hover {
    color: #ccc;
  }
`;

function Header() {
  const location = useLocation();

  return (
    <StyledHeader>
      <Title>Jaeger Niles</Title>
      <Nav>
        <ul>
          <li>
            <NavLink
              to="/"
              className={location.pathname === "/" ? "active" : ""}
            >
              About Me
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/portfolio"
              className={location.pathname === "/portfolio" ? "active" : ""}
            >
              Portfolio
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/contact"
              className={location.pathname === "/contact" ? "active" : ""}
            >
              Contact
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/resume"
              className={location.pathname === "/resume" ? "active" : ""}
            >
              Resume
            </NavLink>
          </li>
        </ul>
      </Nav>
    </StyledHeader>
  );
}

export default Header;
