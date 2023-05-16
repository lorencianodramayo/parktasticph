import React, { useEffect, useState } from "react";

import PropTypes from "prop-types";

import { Layout, Typography, Menu } from "antd";
import { Link, useLocation } from "react-router-dom";

import logo from "../../../assets/images/logo.png";

const { Header } = Layout;

export default function SiteHeader({ headerNavigation }) {
  const location = useLocation();
  const [path, setPath] = useState("/");

  useEffect(() => {
    setPath(location?.pathname);
  }, [location]);

  return (
    <Header
      style={{
        position: "fixed",
        zIndex: 99,
        width: "100%",
        backgroundColor: "#fff",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "0 80px 0 104px",
      }}
    >
      <Link to="/">
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <img
            src={logo}
            alt="ParktasticPH"
            style={{ width: "30px", height: "auto" }}
          />
          <Typography
            style={{
              textTransform: "uppercase",
              fontWeight: 700,
              fontSize: "12px",
              marginLeft: "6px",
            }}
          >
            Parktastic ph
          </Typography>
        </div>
      </Link>
      <Menu
        theme="light"
        mode="horizontal"
        selectedKeys={path}
        items={headerNavigation}
        disabledOverflow={true}
        style={{
          fontWeight: 700,
          color: "#1F2937",
          textTransform: "uppercase",
          fontSize: "12px",
        }}
        className="menu-container"
      />
    </Header>
  );
}

SiteHeader.propTypes = {
  headerNavigation: PropTypes.array,
};
