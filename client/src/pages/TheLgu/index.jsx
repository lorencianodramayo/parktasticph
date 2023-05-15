import React from "react";
import { Link } from "react-router-dom";
import car from "../../assets/images/lgu/car.png";
import { Typography, Button } from "antd";

export default function TheLgu() {
  return (
    <div>
      <div
        style={{
          background: "linear-gradient(90deg, #8FBE61 0%, #F5C64E 90.81%)",
          height: "367px",
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            flexDirection: "column",
            marginLeft: "70px",
            width: "1800px",
          }}
        >
          <Typography className="lgu-header">
            Transform urban mobility in Metro Manila through innovative parking
            solutions and collaborative partnerships with local government
            units.
          </Typography>
          <Typography
            style={{ fontSize: "16px", fontWeight: 600, color: "#fff" }}
          >
            *Suggest your neighborhood!
          </Typography>
          <div style={{ display: "flex", marginTop: "20px" }}>
            <Link
              to="https://55qvxzcjpn2.typeform.com/to/XbNgvfMS"
              target="_blank"
              rel="noopener noreferrer"
              style={{ display: "flex" }}
            >
              <Button
                type="primary"
                style={{
                  fontSize: "18px",
                  lineHeight: "18px",
                  padding: "16px, 58px, 16px, 58px",
                  borderRadius: "100px",
                  backgroundColor: "#F5C64E",
                }}
                size="large"
                shape="round"
              >
                Request A Demo
              </Button>
            </Link>
          </div>
        </div>
        <div
          style={{
            background: `url(${car})`,
            height: "367px",
            backgroundPosition: "right",
            backgroundSize: "contain",
            backgroundRepeat: "no-repeat",
            width: "-webkit-fill-available",
          }}
        ></div>
      </div>
    </div>
  );
}
