import React from "react";
import { ConfigProvider } from "antd";
import ReactDOM from "react-dom/client";
import "./index.css";

import { RouterProvider } from "react-router-dom";
import { router } from "./routes";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ConfigProvider
      theme={{
        token: {
          fontFamily: "Exo, sans-serif",
          colorPrimary: "#8FBE61",
          colorPrimaryText: "#8FBE61"
        },
        components: {
          Typography: {
            fontFamily: "Exo, sans-serif",
            fontFamilyCode: "Exo, sans-serif",
          },
          Menu: {
            colorItemBgSelected: "#fff",
          },
        },
      }}
    >
      <RouterProvider router={router} />
    </ConfigProvider>
  </React.StrictMode>
);
