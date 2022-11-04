import React, { useEffect, useState } from "react";
import { LandingPageStyle } from "../styles/LandingPageStyleDiv";
import { Button } from "antd";
import AOS from "aos";
import "aos/dist/aos.css";
import router from "next/router";
const LandingPage = () => {
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    AOS.init();
  }, []);
  const Navigate = () => {
    setLoading(true);
    router.push("/vote");
  };
  return (
    <LandingPageStyle data-aos="fade-right">
      <h2>Decentralized Voting App</h2>
      <div className="nuesa">
        <div>
          <p>NUESA ONLINE</p>
          <p>VOTING APP</p>
        </div>
        <img src="./nuesa.jpg" alt="Not" />
      </div>
      <div className="contd-btn">
        <Button onClick={Navigate} loading={loading}>
          Continue
        </Button>
      </div>
    </LandingPageStyle>
  );
};

export default LandingPage;
