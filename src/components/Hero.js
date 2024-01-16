import React from "react";
import appleVRImage from "../images/AppleVisionProFeatures.png";
import visionProImage from "../images/appleVR.webp";
import hawaiiVRImage from "../images/hawaii vr.webp";
import meetingImage from "../images/meeting.webp";

export default function Hero() {
  return (
    <div>
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
          <img className="hImageWrapper" src={appleVRImage} alt="applev" />
          <img className="hImageWrapper" src={visionProImage} alt="applevr" />
          <img className="hImageWrapper" src={hawaiiVRImage} alt="applevr" />
          <img className="hImageWrapper" src={meetingImage} alt="applevr" />
        </figure>
      </section>
    </div>
  );
}
//  <section className="hero">
//       <hgroup className="heroSection">
//         <h1 className="hero-heading">
//           Immerse Your Reality: Explore the Virtual Frontier
//         </h1>
//         <h2 className="heroh2">
//           <em className="heroMain" />
//           Discover the Ultimate Vision: Envision Provides the Best Headsets for
//           Your Virtual World!
//         </h2>
//       </hgroup>
//       <figure className="heroImage">
//         <img className="hImageWrapper" src="appleVR.webp" alt="applevr" />
//         <img
//           className="hImageWrapper"
//           src="AppleVisionProFeatures.png"
//           alt="applevr"
//         />
//         <img className="hImageWrapper" src="hawaii vr.webp" alt="applevr" />
//         <img className="hImageWrapper" src="meeting.webp" alt="applevr" />
//       </figure>
//     </section>
