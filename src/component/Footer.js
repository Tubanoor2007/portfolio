import React from 'react'
import styled from "styled-components";

const FooterContainer = styled.footer`
  background-color: #333;
  color: white;
  padding: 2rem;
  text-align: center;
  font-size: 1rem;
`;

const FooterText = styled.p`
  margin-bottom: 1rem;
`;

const SocialLinks = styled.div`
  margin-top: 1rem;
`;

const SocialLink = styled.a`
  color: white;
  margin: 0 1rem;
  font-size: 1.5rem;
  text-decoration: none;
  transition: color 0.3s;

  &:hover {
    color: #f39c12;
  }
`;

function footer() {
  return (
    <>
      <FooterContainer>
      <FooterText>© 2024 My Portfolio. All rights reserved.</FooterText>
      <FooterText>Designed by Me</FooterText>
      <SocialLinks>
        <SocialLink href="https://github.com" target="_blank">
          <i className="fab fa-github"></i>
        </SocialLink>
        <SocialLink href="https://linkedin.com" target="_blank">
          <i className="fab fa-linkedin"></i>
        </SocialLink>
      </SocialLinks>
    </FooterContainer>
    </>
  )
}

export default footer
