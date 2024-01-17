import appleVRImage from "../images/AppleVisionProFeatures.png";
import visionProImage from "../images/appleVR.webp";
import hawaiiVRImage from "../images/hawaii vr.webp";
import meetingImage from "../images/meeting.webp";

import React, { Component } from "react";
import ReactDOM from "react-dom";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import { Style } from "domelementtype";

const carousel = () => {
  return (
    <Carousel>
      <div className="frame">
        <img src={appleVRImage} />
        <p className="legend"></p>
      </div>
      <div className="frame">
        <img src={visionProImage} />
        <p className="legend"></p>
      </div>
      <div className="frame">
        <img src={hawaiiVRImage} />
        <p className="legend"> </p>
      </div>
      <div className="frame">
        <img src={meetingImage} />
        <p className="legend"></p>
      </div>
    </Carousel>
  );
};
export default carousel;
