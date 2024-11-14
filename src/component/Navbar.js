import React from 'react'
import styled from "styled-components";
const NavbarContainer = styled.nav`
  background-color: #333;
  padding: 1rem 2rem;
  position: fixed;
  width: 100%;
  top: 0;
  left: 0;
  z-index: 100;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: white;
  font-size: 1.1rem;
`;

const Logo = styled.h1`
  font-size: 1.5rem;
`;

const NavLinks = styled.ul`
  list-style: none;
  display: flex;
  gap: 2rem;
`;

const NavLink = styled.li`
  cursor: pointer;
  &:hover {
    color: #f39c12;
  }
`;

function navbar() {
  return (
    <>
     <NavbarContainer>
      <Logo>My Portfolio</Logo>
      <NavLinks>
        <NavLink>Home</NavLink>
        <NavLink>Projects</NavLink>
        <NavLink>Contact</NavLink>
      </NavLinks>
    </NavbarContainer>
    </>
  )
}

export default navbar
