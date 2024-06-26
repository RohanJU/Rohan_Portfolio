import React from "react";
import CV from "/Users/rohan/Documents/PortfolioRohan/my-app/src/Assets/Rohan Srivastava.pdf";

const CTA = () => {
  return (
    <div className="cta">
      <a className="btn" href={CV} download>
        Download CV
      </a>
      <a className="btn btn-primary" href="#contact">
        Let's Talk
      </a>
    </div>
  );
};

export default CTA;
