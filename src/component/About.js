// src/components/AboutUs.js
// src/components/AboutUs.js
import React from 'react';
import styled from 'styled-components';

// Styled Components for AboutUs section
const SectionWrapper = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: #f0f0f0;
  padding: 50px 20px;
  margin-top: 80px; /* Ensure it is not hidden behind the navbar */
`;

const Title = styled.h2`
  font-size: 2.5rem;
  font-family: 'Arial', sans-serif;
  color: #333;
  margin-bottom: 20px;
`;

const Description = styled.p`
  font-size: 1.2rem;
  max-width: 800px;
  line-height: 1.6;
  text-align: center;
  color: #666;
  margin-bottom: 30px;
`;

const ProfileImage = styled.img`
  border-radius: 50%;
  width: 150px;
  height: 150px;
  object-fit: cover;
  margin-bottom: 20px;
`;

const Button = styled.a`
  padding: 10px 20px;
  background-color: #007BFF;
  color: white;
  text-decoration: none;
  border-radius: 5px;
  font-weight: bold;
  cursor: pointer;
  
  &:hover {
    background-color: #0056b3;
  }
`;

// About Us Component
const AboutUs = () => {
  return (
    <SectionWrapper id="about">
      <ProfileImage src="https://via.placeholder.com/150" alt="Profile" />
      <Title>About Me</Title>
      <Description>
        Hello! I'm  tubaa  freser web developer with a love for creating intuitive and
        efficient web applications. I specialize in front-end development and enjoy learning
        new technologies.
      </Description>
      <Button href="#contact">Contact Me</Button>
    </SectionWrapper>
  );
};

export default AboutUs;
