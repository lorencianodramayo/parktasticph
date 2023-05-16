import React, { useState, useEffect } from "react";

import PropTypes from "prop-types";

import { Layout, Typography } from "antd";

import logo from "../../../assets/images/logo.png";
import { useLocation } from "react-router-dom";

const { Footer } = Layout;

export default function SiteFooter({ footerNavigation }) {
  const location = useLocation();
  const [path, setPath] = useState("/");

  useEffect(() => {
    setPath(location?.pathname);
  }, [location]);

  return (
    <Footer
      style={{
        textAlign: "center",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {footerNavigation?.map((data, index) => (
          <div
            key={index}
            style={{
              width: 175,
              borderRight:
                footerNavigation?.length == index + 1
                  ? "none"
                  : "1px solid #6b728054",
            }}
          >
            <Typography
              style={{
                fontWeight: 700,
                textTransform: "uppercase",
                textDecoration: data?.key === path ? "underline" : "none",
                fontSize: 10,
              }}
              className="footer-links"
            >
              {data?.label}
            </Typography>
          </div>
        ))}
      </div>
      <div
        style={{
          margin: "1.5em 0 0 0",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <img
          src={logo}
          alt="ParktasticPH"
          style={{ width: "20px", height: "auto" }}
        />
        <Typography style={{ fontWeight: 700, marginLeft: "6px" }}>
          PARKTASTIC PH
        </Typography>
      </div>
      <div style={{ margin: "0.5em 0 0 0" }}>
        <Typography style={{ fontSize: "12px", color: "#727272" }}>
          Copyright &copy; {new Date().getFullYear()} Toutem
        </Typography>
        <Typography style={{ fontSize: "11px", color: "#727272" }}>
          All Rights Reserved.
        </Typography>
      </div>
    </Footer>
  );
}

SiteFooter.propTypes = {
  footerNavigation: PropTypes.array,
};
