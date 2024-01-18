// src/components/StaticPage.js
import React from "react";
import "./App.css"; // Create this CSS file for your styles
import appleVRImage from "./images/appleVR.webp";
import visionProImage from "./images/hawaii vr.webp";
import hawaiiVRImage from "./images/meeting.webp";
import meetingImage from "./images/AppleVisionProFeatures.png";
import form from "./components/contact_form"
import SlideShow from "./components/SlideShow";

import Hero from "./components/Hero";
import MNav from "./components/mNav";


const Home = () => {
  return (
 <>
  <meta charSet="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Document</title>
  <link rel="stylesheet" type="text/css" href="style.css" />
  <link rel="stylesheet" href="main.css" />
  <div className="backdrop" />
  <header className="main-header">
        <div>
     <MNav></MNav>
      <a href="/" className="main-header__brand">
        <img src="envision Background Removed.png" alt="Envision logo" />
      </a>
    </div>
    <nav className="main-nav">
      <ul className="main-nav__items">
        <li className="main-nav__item">
          <a href="products">Products</a>
        </li>
        <li className="main-nav__item">
          <a href="contact">Contact Page</a>
        </li>
        
        <li className="main-nav__item main-nav__item--cta">
          <a href="#" />
        </li>
      </ul>
    </nav>
  </header>
  <section id="product-overview">
    <h2>Envision a New Frontier.</h2>
  </section>
      <main>
        <Hero></Hero>
 </main>
  
   <section className="hero">
        <hgroup className="heroSection">
          <h1 className="hero-heading">
            Immerse Your Reality: Explore the Virtual Frontier
          </h1>
          <h2 className="heroh2">
            <em className="heroMain" />
            Discover the Ultimate Vision: Envision Provides the Best Headsets
            for Your Virtual World!
          </h2>
        </hgroup>
        <figure className="heroImage">
          {/* <SlideShow></SlideShow> */}
          <SlideShow></SlideShow>

        </figure>
      </section>

      

  
</>

  );
};

export default Home;
