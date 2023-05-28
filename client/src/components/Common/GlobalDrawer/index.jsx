import { Button, Drawer, Menu } from "antd";
import { useState } from "react";

import PropTypes from "prop-types";

import { MenuOutlined, CloseOutlined } from "@ant-design/icons";

const GlobalDrawer = ({ selectedKeys, items }) => {
  const [open, setOpen] = useState(false);
  const showDrawer = () => {
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
  };
  return (
    <>
      <Button className="navigation-mobile" size="large" onClick={showDrawer} icon={<MenuOutlined />} />
      <Drawer
        placement="right"
        closable={false}
        onClose={onClose}
        open={open}
        width="100%"
        bodyStyle={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <div
          style={{
            position: "absolute",
            right: "1em",
            top: "1em",
          }}
        >
          <Button
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
            icon={<CloseOutlined style={{ color: "inherit" }} />}
            size="large"
            onClick={onClose}
          />
        </div>
        <Menu
          theme="light"
          mode="vertical"
          selectedKeys={selectedKeys}
          items={items}
          disabledOverflow={true}
          style={{
            width: "-webkit-fill-available",
            border: 0,
            fontSize: "18px",
            fontWeight: 600,
            textAlign: "center",
          }}
        />
      </Drawer>
    </>
  );
};

GlobalDrawer.propTypes = {
  selectedKeys: PropTypes.any,
  items: PropTypes.any,
};

export default GlobalDrawer;
