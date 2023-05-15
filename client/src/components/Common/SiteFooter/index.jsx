import React from "react";

import PropTypes from "prop-types";

import { Layout, Typography } from "antd";

const { Footer } = Layout;

export default function SiteFooter({ footerNavigation }) {
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
                color: "#6b7280",
                fontSize: 10,
              }}
            >
              {data?.label}
            </Typography>
          </div>
        ))}
      </div>
      <div style={{ margin: "1.5em 0 0 0" }}>
        <Typography style={{ fontWeight: 700 }}>PARKTASTICPH</Typography>
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
