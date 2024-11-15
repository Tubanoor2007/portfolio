// src/components/Home.js
import React from 'react';
import styled from 'styled-components';
import homeBg from '../asset/tr.jpg'; 

const HomeWrapper = styled.section`
  background-image: url(${homeBg});
  background-size: cover;
  background-position: center;
  height: 100vh;
  padding-top: 80px; /* Space for fixed Navbar */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: white;
  text-align: center;
`;

const Heading = styled.h1`
  font-size: 4rem;
  text-transform: uppercase;
  font-weight: 700;
  margin-bottom: 20px;
  letter-spacing: 5px;
`;

const Description = styled.p`
  font-size: 1.5rem;
  max-width: 600px;
  margin: 0 auto;
`;

const Home = () => {
  return (
    <HomeWrapper id="home">
      <Heading>Welcome to My Portfolio</Heading>
      <Description>
        I'm a passionate web developer who loves building creative and responsive web experiences.
      </Description>
    </HomeWrapper>
  );
};

export default Home;

