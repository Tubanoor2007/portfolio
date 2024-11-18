// Skills.js
import React from 'react';
import styled from 'styled-components';

// Styled components for Skills Section
const SkillsContainer = styled.section`
  padding: 2rem 0;
  background-color: #f4f7fb;
  text-align: center;
  margin-top: 100px; /* Offset for fixed navbar */
`;

const SkillsTitle = styled.h2`
  font-size: 2.5rem;
  color: #333;
  margin-bottom: 1.5rem;
`;

const SkillsList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 1.5rem;
`;

const SkillItem = styled.li`
  background-color: #3b82f6;
  color: #fff;
  padding: 12px 20px;
  border-radius: 20px;
  font-size: 1.2rem;
  transition: transform 0.3s ease, background-color 0.3s ease;

  &:hover {
    background-color: #2563eb;
    transform: scale(1.05);
  }

  @media (max-width: 600px) {
    font-size: 1rem;
    padding: 10px 16px;
  }
`;

const Skills = () => {
  const skills = ['HTML', 'CSS', 'JavaScript', 'React', 'Node.js', 'MongoDB', 'Git', 'GraphQL'];

  return (
    <SkillsContainer id="skills">
      <SkillsTitle>My Skills</SkillsTitle>
      <SkillsList>
        {skills.map((skill, index) => (
          <SkillItem key={index}>{skill}</SkillItem>
        ))}
      </SkillsList>
    </SkillsContainer>
  );
};

export default Skills;
