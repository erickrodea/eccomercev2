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
export default function Contact() {

  return (
    <>
      
      <Navbar />
      <h1 className="productHeading">Proudly Partnered with</h1>
      <section id="partners">
      {/* <h1 className="productHeading">Proudly partnered with</h1> */}
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
         
        
        
    
        </div>
      </div>
    </section>
      
        
        <MyForm></MyForm>


        
    
 </>
  )
  
}
