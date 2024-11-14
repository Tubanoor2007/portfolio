import React from 'react'
import styled from "styled-components";
const Section = styled.section`
  padding: 4rem 2rem;
  background-color: #f8f8f8;
`;


const Title = styled.h2`
  text-align: center;
  font-size: 2.5rem;
  margin-bottom: 2rem;
`;

const ProjectsList = styled.div`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  gap: 2rem;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;


const ProjectCard = styled.div`
  background-color: #f39c12;
  color: white;
  width: 250px;
  padding: 2rem;
  border-radius: 8px;
  text-align: center;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-10px);
  }
`;


const ProjectTitle = styled.h3`
  font-size: 1.5rem;
  margin-bottom: 1rem;
`;


const ProjectDescription = styled.p`
  font-size: 1rem;
  margin-bottom: 1rem;
`;


const ProjectLink = styled.a`
  text-decoration: none;
  color: white;
  font-weight: bold;
  font-size: 1.1rem;
  &:hover {
    color: #333;
    text-decoration: underline;
  }
`;


function Project() {
  return (
    <>
  <Section id="projects">
      <Title>My Projects</Title>
      <ProjectsList>
    
        <ProjectCard>
          <ProjectTitle>Project 1: calculater</ProjectTitle>
          <ProjectDescription>
            A web app built with React.js that allows users to track tasks.
          </ProjectDescription>
          <ProjectLink href=" https://tubanoor2007.github.io/calculater/" target="_blank">
            View on GitHub
          </ProjectLink>
        </ProjectCard>

        <ProjectCard>
          <ProjectTitle>Project 2: stopwatch</ProjectTitle>
          <ProjectDescription>
            A personal portfolio built with React and styled-components.
          </ProjectDescription>
          <ProjectLink href=" https://tubanoor2007.github.io/stopwatch/" target="_blank">
          View on GitHub
          </ProjectLink>
        </ProjectCard>

        <ProjectCard>
          <ProjectTitle>Project 3: react project</ProjectTitle>
          <ProjectDescription>
            A weather application using the OpenWeather API to show live weather updates.
          </ProjectDescription>
          <ProjectLink href="https://github.com/yourusername/weather-app" target="_blank">
            View on GitHub
          </ProjectLink>
        </ProjectCard>
      </ProjectsList>
    </Section>
    </>
  )
}

export default Project
