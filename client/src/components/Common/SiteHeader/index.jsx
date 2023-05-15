import React from "react";

import PropTypes from "prop-types";

import { Layout, Typography, Menu } from "antd";
import { useLocation } from "react-router-dom";

const { Header } = Layout;

export default function SiteHeader({ headerNavigation }) {
  const location = useLocation();

  return (
    <Header
      style={{
        backgroundColor: "#fff",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      <div>
        <Typography style={{ textTransform: "uppercase" }}>
          Parktasticph
        </Typography>
      </div>
      <Menu
        theme="light"
        mode="horizontal"
        defaultSelectedKeys={location?.pathname}
        items={headerNavigation}
        disabledOverflow={true}
      />
    </Header>
  );
}

SiteHeader.propTypes = {
  headerNavigation: PropTypes.array,
};
