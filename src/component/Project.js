// src/components/Projects.js
import React from 'react';
import styled from 'styled-components';
import project1Img from '../asset/download.png';
import project2Img from '../asset/d.jfif';
import project3Img from '../asset/images.jpg';

// Define the wrapper and styling for the Projects section
const ProjectsWrapper = styled.section`
  background: #ecf0f1;
  padding: 60px 20px;
  text-align: center;
`;

// Heading for the Projects section
const ProjectHeading = styled.h2`
  font-size: 3rem;
  color: #2c3e50;
  margin-bottom: 40px;
`;

// Container for the project list
const ProjectList = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 20px;
  flex-wrap: wrap;
`;

// Styles for each project card
const ProjectCard = styled.a`
  background: white;
  border-radius: 8px;
  width: 30%;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  transition: transform 0.3s ease;
  text-decoration: none; /* Remove underline from links */
  color: inherit; /* Inherit the text color */
  
  &:hover {
    transform: scale(1.05);
  }
`;

// Styles for the project image
const ProjectImage = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
`;

// Title of the project
const ProjectTitle = styled.h3`
  font-size: 1.8rem;
  color: #34495e;
  margin: 20px 0;
`;

// Description of the project
const ProjectDescription = styled.p`
  font-size: 1rem;
  color: #7f8c8d;
  padding: 0 20px 20px;
`;

const Projects = () => {
  return (
    <ProjectsWrapper id="projects">
      <ProjectHeading>My Projects</ProjectHeading>
      <ProjectList>
        {/* Project 1 Card */}
        <ProjectCard href="https://tubanoor2007.github.io/calculater/" target="_blank" rel="noopener noreferrer">
          <ProjectImage src={project1Img} alt="Project 1" />
          <ProjectTitle>Project 1</ProjectTitle>
          <ProjectDescription>A description of the first project.</ProjectDescription>
        </ProjectCard>
        
        {/* Project 2 Card */}
        <ProjectCard href="https://tubanoor2007.github.io/stopwatch/" target="_blank" rel="noopener noreferrer">
          <ProjectImage src={project2Img} alt="Project 2" />
          <ProjectTitle>Project 2</ProjectTitle>
          <ProjectDescription>A description of the second project.</ProjectDescription>
        </ProjectCard>
        
        {/* Project 3 Card */}
        <ProjectCard href="https://link-to-project-3.com" target="_blank" rel="noopener noreferrer">
          <ProjectImage src={project3Img} alt="Project 3" />
          <ProjectTitle>Project 3</ProjectTitle>
          <ProjectDescription>A description of the third project.</ProjectDescription>
        </ProjectCard>
      </ProjectList>
    </ProjectsWrapper>
  );
};

export default Projects;
