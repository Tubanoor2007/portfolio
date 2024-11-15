// src/components/Contact.js
import React from 'react';
import styled from 'styled-components';

const ContactWrapper = styled.section`
  background: #fff;
  padding: 60px 20px;
  text-align: center;
`;

const ContactHeading = styled.h2`
  font-size: 2.5rem;
  color: #2c3e50;
  margin-bottom: 40px;
`;

const ContactForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 20px;
  max-width: 400px;
  margin: 0 auto;
`;

const Input = styled.input`
  padding: 1rem;
  font-size: 1rem;
  border: 2px solid #3498db;
  border-radius: 5px;
  outline: none;
  transition: border-color 0.3s;

  &:focus {
    border-color: #f39c12;
  }
`;

const TextArea = styled.textarea`
  padding: 1rem;
  font-size: 1rem;
  border: 2px solid #3498db;
  border-radius: 5px;
  resize: vertical;
  outline: none;

  &:focus {
    border-color: #f39c12;
  }
`;

const Button = styled.button`
  padding: 1rem;
  background-color: #3498db;
  color: white;
  border: none;
  border-radius: 5px;
  font-size: 1.2rem;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #f39c12;
  }
`;

const Contact = () => {
  return (
    <ContactWrapper id="contact">
      <ContactHeading>Contact Me</ContactHeading>
      <ContactForm>
        <Input type="text" placeholder="Your Name" required />
        <Input type="email" placeholder="Your Email" required />
        <TextArea placeholder="Your Message" rows="5" required />
        <Button type="submit">Send Message</Button>
      </ContactForm>
    </ContactWrapper>
  );
};

export default Contact;
