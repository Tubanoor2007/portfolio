import React from 'react'
import './App.css';
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from './component/About'
import Contect from './component/Contect';
import Project from './component/Project';
import Navbar from './component/Navbar';
import Home  from './component/Home';
import Footer from './component/Footer';



function App() {
  return (
   <>
  <Navbar />
      <Home />
      <Project />
      <Contect />
      <Footer/>
 
   </>
  )
}

export default App

