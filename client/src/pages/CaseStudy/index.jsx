import React from "react";

import logoTransparent from "../../assets/images/logo-transparent.png";
import patern1 from "../../assets/images/consumers/patern1.svg";
import patern2 from "../../assets/images/consumers/patern2.svg";

export default function CaseStudy() {
  return (
    <div>
      <div className="case-study-car-green-container">
        <div
          style={{
            backgroundImage: `url(${patern1}), url(${patern2}) `,
          }}
          className="case-study-car-green-header"
        >
          <div
            style={{ width: "970px", lineHeight: "56.65px" }}
            className="border-span"
          >
            <div className="case-study-header">
              PARKTASTIC PH X MANILA ZOO:
            </div>
            <span>Taming the Parking Beast!</span>
          </div>
        </div>
      </div>
      <div id="case-study-frame-container">
        <iframe
          className="responsive-iframe"
          src="https://parktasticph.paynow.cx/manila-zoo"
          border={0}
          frameBorder={0}
        />
      </div>
    </div>
  );
}
