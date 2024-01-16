// src/components/StaticPage.js
import React from "react";
import "./App.css"; // Create this CSS file for your styles
import appleVRImage from "./images/appleVR.webp";
import visionProImage from "./images/hawaii vr.webp";
import hawaiiVRImage from "./images/meeting.webp";
import meetingImage from "./images/AppleVisionProFeatures.png";
import form from "./components/contact_form"



// Import Swiper React components

// Import Swiper styles
import 'swiper/css';
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
      <button className="toggle-button">
        <span className="toggle-button__bar" />
        <span className="toggle-button__bar" />
        <span className="toggle-button__bar" />
      </button>
      <a href="index.html" className="main-header__brand">
        <img src="envision Background Removed.png" alt="Envision logo" />
      </a>
    </div>
    <nav className="main-nav">
      <ul className="main-nav__items">
        <li className="main-nav__item">
          <a href="products.html">Products</a>
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
  <nav className="mobile-nav">
    <ul className="mobile-nav__items">
      <li className="mobile-nav__item">
        <a href="products">Products</a>
      </li>
      <li className="mobile-nav__item">
        <a href="contact">Contact Page</a>
      </li>
      <li className="mobile-nav__item mobile-nav__item--cta">
        <a href="#">Shopping Cart</a>
      </li>
    </ul>
  </nav>
  <section id="product-overview">
    <h2>Envision a New Frontier.</h2>
  </section>
  <main>
    <section id="partners">
      <h1 className="productHeading">Proudly partnered with</h1>
      <div className="moving-logos">
        <div className="track-horizontal">
          <div className="logo">
            <img
              src="https://assets-global.website-files.com/6373c87ac909275b0923105c/63b316a54de0334f1a87557b_Shopify.png"
              loading="lazy"
              sizes="(max-width: 591px) 100vw, 15vw"
              srcSet="https://assets-global.website-files.com/6373c87ac909275b0923105c/63b316a54de0334f1a87557b_Shopify-p-500.png 500w, https://assets-global.website-files.com/6373c87ac909275b0923105c/63b316a54de0334f1a87557b_Shopify.png 500w"
              alt=""
              className="logo-moving"
            />
          </div>
          <div className="logo">
            <img
              src="https://assets-global.website-files.com/6373c87ac909275b0923105c/63b316a5b1372bb1966e26d0_Amazon.png"
              loading="lazy"
              sizes="(max-width: 991px) 100vw, 15vw"
              srcSet="https://assets-global.website-files.com/6373c87ac909275b0923105c/63b316a5b1372bb1966e26d0_Amazon-p-500.png 500w, https://assets-global.website-files.com/6373c87ac909275b0923105c/63b316a5b1372bb1966e26d0_Amazon.png 500w"
              alt=""
              className="logo-moving"
            />
          </div>
          <div className="logo">
            <img
              src="https://assets-global.website-files.com/6373c87ac909275b0923105c/63b316a5b01ec35697c05416_Google%20Partner.png"
              loading="lazy"
              sizes="(max-width: 991px) 100vw, 15vw"
              srcSet="https://assets-global.website-files.com/6373c87ac909275b0923105c/63b316a5b01ec35697c05416_Google%20Partner-p-500.png 500w, https://assets-global.website-files.com/6373c87ac909275b0923105c/63b316a5b01ec35697c05416_Google%20Partner.png 500w"
              alt=""
              className="logo-moving"
            />
          </div>
          <div className="logo">
            <img
              src="https://assets-global.website-files.com/6373c87ac909275b0923105c/63b316a5ea66e8c6d1b45235_Hubspot%20Platinum.png"
              loading="lazy"
              sizes="(max-width: 991px) 100vw, 15vw"
              srcSet="https://assets-global.website-files.com/6373c87ac909275b0923105c/63b316a5ea66e8c6d1b45235_Hubspot%20Platinum-p-500.png 500w, https://assets-global.website-files.com/6373c87ac909275b0923105c/63b316a5ea66e8c6d1b45235_Hubspot%20Platinum.png 500w"
              alt=""
              className="logo-moving"
            />
          </div>
          <div className="logo">
            <img
              src="https://assets-global.website-files.com/6373c87ac909275b0923105c/63b316a613820040d4759585_Meta.png"
              loading="lazy"
              sizes="(max-width: 991px) 100vw, 15vw"
              srcSet="https://assets-global.website-files.com/6373c87ac909275b0923105c/63b316a613820040d4759585_Meta-p-500.png 500w, https://assets-global.website-files.com/6373c87ac909275b0923105c/63b316a613820040d4759585_Meta.png 500w"
              alt=""
              className="logo-moving"
            />
          </div>
          <div className="logo">
            <img
              src="https://assets-global.website-files.com/6373c87ac909275b0923105c/63b316a65a8164db24e9c7a1_Digital%20Agency%20Network.png"
              loading="lazy"
              sizes="(max-width: 991px) 100vw, 15vw"
              srcSet="https://assets-global.website-files.com/6373c87ac909275b0923105c/63b316a65a8164db24e9c7a1_Digital%20Agency%20Network-p-500.png 500w, https://assets-global.website-files.com/6373c87ac909275b0923105c/63b316a65a8164db24e9c7a1_Digital%20Agency%20Network.png 500w"
              alt=""
              className="logo-moving"
            />
          </div>
          <div className="logo">
            <img
              src="https://assets-global.website-files.com/6373c87ac909275b0923105c/644821b2a0243d5c79bfa5b4_KlaviyoPartner_updated.png"
              loading="lazy"
              sizes="(max-width: 991px) 100vw, 15vw"
              srcSet="https://assets-global.website-files.com/6373c87ac909275b0923105c/644821b2a0243d5c79bfa5b4_KlaviyoPartner_updated-p-500.png 500w, https://assets-global.website-files.com/6373c87ac909275b0923105c/644821b2a0243d5c79bfa5b4_KlaviyoPartner_updated-p-800.png 800w, https://assets-global.website-files.com/6373c87ac909275b0923105c/644821b2a0243d5c79bfa5b4_KlaviyoPartner_updated-p-1080.png 1080w, https://assets-global.website-files.com/6373c87ac909275b0923105c/644821b2a0243d5c79bfa5b4_KlaviyoPartner_updated.png 1500w"
              alt=""
              className="logo-moving"
            />
          </div>
          <div className="logo">
            <img
              src="https://assets-global.website-files.com/6373c87ac909275b0923105c/63b316a54de0334f1a87557b_Shopify.png"
              loading="lazy"
              sizes="(max-width: 991px) 100vw, 15vw"
              srcSet="https://assets-global.website-files.com/6373c87ac909275b0923105c/63b316a54de0334f1a87557b_Shopify-p-500.png 500w, https://assets-global.website-files.com/6373c87ac909275b0923105c/63b316a54de0334f1a87557b_Shopify.png 500w"
              alt=""
              className="logo-moving"
            />
          </div>
          <div className="logo">
            <img
              src="https://assets-global.website-files.com/6373c87ac909275b0923105c/63b316a5b1372bb1966e26d0_Amazon.png"
              loading="lazy"
              sizes="(max-width: 991px) 100vw, 15vw"
              srcSet="https://assets-global.website-files.com/6373c87ac909275b0923105c/63b316a5b1372bb1966e26d0_Amazon-p-500.png 500w, https://assets-global.website-files.com/6373c87ac909275b0923105c/63b316a5b1372bb1966e26d0_Amazon.png 500w"
              alt=""
              className="logo-moving"
            />
          </div>
          <div className="logo">
            <img
              src="https://assets-global.website-files.com/6373c87ac909275b0923105c/63b316a5b01ec35697c05416_Google%20Partner.png"
              loading="lazy"
              sizes="(max-width: 991px) 100vw, 15vw"
              srcSet="https://assets-global.website-files.com/6373c87ac909275b0923105c/63b316a5b01ec35697c05416_Google%20Partner-p-500.png 500w, https://assets-global.website-files.com/6373c87ac909275b0923105c/63b316a5b01ec35697c05416_Google%20Partner.png 500w"
              alt=""
              className="logo-moving"
            />
          </div>
          <div className="logo">
            <img
              src="https://assets-global.website-files.com/6373c87ac909275b0923105c/63b316a5ea66e8c6d1b45235_Hubspot%20Platinum.png"
              loading="lazy"
              sizes="(max-width: 991px) 100vw, 15vw"
              srcSet="https://assets-global.website-files.com/6373c87ac909275b0923105c/63b316a5ea66e8c6d1b45235_Hubspot%20Platinum-p-500.png 500w, https://assets-global.website-files.com/6373c87ac909275b0923105c/63b316a5ea66e8c6d1b45235_Hubspot%20Platinum.png 500w"
              alt=""
              className="logo-moving"
            />
          </div>
          <div className="logo">
            <img
              src="https://assets-global.website-files.com/6373c87ac909275b0923105c/63b316a613820040d4759585_Meta.png"
              loading="lazy"
              sizes="(max-width: 991px) 100vw, 15vw"
              srcSet="https://assets-global.website-files.com/6373c87ac909275b0923105c/63b316a613820040d4759585_Meta-p-500.png 500w, https://assets-global.website-files.com/6373c87ac909275b0923105c/63b316a613820040d4759585_Meta.png 500w"
              alt=""
              className="logo-moving"
            />
          </div>
          <div className="logo">
            <img
              src="https://assets-global.website-files.com/6373c87ac909275b0923105c/63b316a65a8164db24e9c7a1_Digital%20Agency%20Network.png"
              loading="lazy"
              sizes="(max-width: 991px) 100vw, 15vw"
              srcSet="https://assets-global.website-files.com/6373c87ac909275b0923105c/63b316a65a8164db24e9c7a1_Digital%20Agency%20Network-p-500.png 500w, https://assets-global.website-files.com/6373c87ac909275b0923105c/63b316a65a8164db24e9c7a1_Digital%20Agency%20Network.png 500w"
              alt=""
              className="logo-moving"
            />
          </div>
          <div className="logo">
            <img
              src="https://assets-global.website-files.com/6373c87ac909275b0923105c/644821b2a0243d5c79bfa5b4_KlaviyoPartner_updated.png"
              loading="lazy"
              sizes="(max-width: 991px) 100vw, 15vw"
              srcSet="https://assets-global.website-files.com/6373c87ac909275b0923105c/644821b2a0243d5c79bfa5b4_KlaviyoPartner_updated-p-500.png 500w, https://assets-global.website-files.com/6373c87ac909275b0923105c/644821b2a0243d5c79bfa5b4_KlaviyoPartner_updated-p-800.png 800w, https://assets-global.website-files.com/6373c87ac909275b0923105c/644821b2a0243d5c79bfa5b4_KlaviyoPartner_updated-p-1080.png 1080w, https://assets-global.website-files.com/6373c87ac909275b0923105c/644821b2a0243d5c79bfa5b4_KlaviyoPartner_updated.png 1500w"
              alt=""
              className="logo-moving"
            />
          </div>
        </div>
      </div>
    </section>
  </main>
   {/* <section className="hero">
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
          <img className="hImageWrapper" src={appleVRImage} alt="applev" />
          <img className="hImageWrapper" src={visionProImage} alt="applevr" />
          <img className="hImageWrapper" src={hawaiiVRImage} alt="applevr" />
          <img className="hImageWrapper" src={meetingImage} alt="applevr" />
        </figure>
      </section> */}


  
</>

  );
};

export default Home;
