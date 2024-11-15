// src/components/Navbar.js
// src/components/Navbar.js
import React from 'react';
import styled from 'styled-components';

// Styled Components for Navbar
const NavbarWrapper = styled.nav`
  background: #2c3e50;
  color: white;
  position: fixed;
  top: 0;
  width: 100%;
  padding: 1rem 2rem;
  z-index: 1000;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

const NavLink = styled.a`
  color: white;
  text-decoration: none;
  font-size: 1.2rem;
  font-weight: bold;

  &:hover {
    color: #f39c12;
  }
`;

const Navbar = () => {
  return (
    <NavbarWrapper>
      <NavLink href="#home">Home</NavLink>
      <NavLink href="#about">About Us</NavLink> {/* Added About Us link */}
      <NavLink href="#projects">Projects</NavLink>
      <NavLink href="#contact">Contact</NavLink>
    </NavbarWrapper>
  );
};

export default Navbar;

















// import React from 'react';
// import styled from 'styled-components';

// const NavbarWrapper = styled.nav`
//   background: #2c3e50;
//   color: white;
//   position: fixed;
//   top: 0;
//   width: 100%;
//   padding: 1rem 2rem;
//   z-index: 1000;
//   display: flex;
//   justify-content: space-around;
//   align-items: center;
// `;

// const NavLink = styled.a`
//   color: white;
//   text-decoration: none;
//   font-size: 1.2rem;
//   font-weight: bold;

//   &:hover {
//     color: #f39c12;
//   }
// `;

// const Navbar = () => {
//   return (
//     <NavbarWrapper>
//       <NavLink href="#home">Home</NavLink>
//       <NavLink href="#projects">Projects</NavLink>
//       <NavLink href="#contact">Contact</NavLink>
//     </NavbarWrapper>

//   );
// };

// export default Navbar;
