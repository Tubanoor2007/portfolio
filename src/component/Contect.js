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

const ContactForm = styled.form`
  max-width: 600px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const Input = styled.input`
  padding: 1rem;
  border: 2px solid #ccc;
  border-radius: 8px;
  font-size: 1rem;
`;

const TextArea = styled.textarea`
  padding: 1rem;
  border: 2px solid #ccc;
  border-radius: 8px;
  font-size: 1rem;
  resize: vertical;
`;

const Button = styled.button`
  padding: 1rem;
  background-color: #f39c12;
  border: none;
  border-radius: 8px;
  color: white;
  font-size: 1rem;
  cursor: pointer;
  &:hover {
    background-color: #e67e22;
  }
`;

function Contect() {
  return (
    <>
    <Section id="contact">
      <Title>Contact Me</Title>
      <ContactForm>
        <Input type="text" placeholder="Your Name" required />
        <Input type="email" placeholder="Your Email" required />
        <TextArea placeholder="Your Message" rows="6" required />
        <Button type="submit">Send Message</Button>
      </ContactForm>
    </Section>
    </>
  )
}

export default Contect
