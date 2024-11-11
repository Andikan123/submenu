import React from "react";
import { useGlobalContext } from "./Context";

const Hero = () => {
  return (
    <div className="hero-container">
      <div className="hero-center">
        <h1>
          Manage Any Content <br />
          Anywhere
        </h1>
        <p>
          Strapi is the leading open-source headless cms. It's 100% javascript
          and fully customizable
        </p>
      </div>
    </div>
  );
};

export default Hero;
