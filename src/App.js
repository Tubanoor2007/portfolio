import React from 'react'
import './App.css';

import Contect from './component/Contect';
import Project from './component/Project';
import Navbar from './component/Navbar';
import Home  from './component/Home';
import Footer from './component/Footer';
import About from './component/About';
import Skill from './component/skil';


function App() {
  return (
   <>
  <Navbar />
  <Home />
  <About/>
  <Skill/>
  <Project/>
  <Contect/>
      <Footer />

 
   </>
  )
}

export default App

