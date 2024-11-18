// src/components/Footer.js
import React from 'react';
import styled from 'styled-components';

const FooterWrapper = styled.footer`
  background-color: #2c3e50;
  color: white;
  text-align: center;
  padding: 20px;
`;

const FooterText = styled.p`
  font-size: 1rem;
`;

const Footer = () => {
  return (
    <FooterWrapper>
      <FooterText>© 2024 My Portfolio | All Rights Reserved</FooterText>
    </FooterWrapper>
  );
};

export default Footer;
