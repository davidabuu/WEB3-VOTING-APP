import React from "react";
import { IntroStyle } from "../style/LandingPageStyle";

const IntroDiv = () => {
  return (
    <IntroStyle>
      <div>
        <div className="text">
        <p>Client Sourced</p>
        <p>Marketing</p>
        </div>
        <p className="business">Business Marketing Reinvented. Don't pay for</p>
        <p className="business">marketing get paid by marketing</p>
        <br></br>
        <div className="btn">
          <button className="learn">Learn More</button>
          <button className="mint btn">Mint</button>
        </div>
      </div>
      <img src="./hand.png" alt="Hand" />
    </IntroStyle>
  );
};

export default IntroDiv;
