import React from "react";
import Lottie from "lottie-react";
import animationData from "../assets/lottie/Under-Construction 1.json";
import "./Certifications.css";

const Certifications = () => {
  return (
    <div className="lottie-fullscreen">
      <Lottie
        animationData={animationData}
        loop
        className="lottie-big"
      />
    </div>
  );
};

export default Certifications;
