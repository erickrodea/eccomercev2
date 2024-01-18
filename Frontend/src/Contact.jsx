import React from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import MyForm from './components/contact_form'; // Import the form validation component

import SlideShow from './components/SlideShow'
// import Partners from './components/partners'
import "./contact.css"
// import "./App.css"
import "./style.css"
import "./components/contact_form"
import Hero from './components/Hero';
import MNav from "./components/mNav"
export default function Contact() {

  return (
    <>
      <Navbar></Navbar>
      <MNav></MNav>
  <Hero></Hero>
      
        
        <MyForm></MyForm>


        
    
 </>
  )
  
}
