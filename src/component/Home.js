import React from 'react'
import styled from "styled-components";
import Image from '../asset/imagess.avif';


const HomeSection = styled.section`
  height: 100vh;
  background: url(${(props) => props.bgImage}) center/cover no-repeat;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  text-align: center;
  background-position: center;
  background-size: cover;
  padding: 0 2rem;

  h1 {
    font-size: 3rem;
  }

  p {
    font-size: 1.2rem;
  }
`;

function Home() {
  return (
   <>

<HomeSection bgImage={Image}>
      <div>
        <h1>Welcome to My Portfolio</h1>
        <p>Check out my work below!</p>
      </div>
    </HomeSection>
 

   </>
  )
}

export default Home
