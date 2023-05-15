import React from "react";

import { Col, Row, Typography } from "antd";

import Boy1 from "../../assets/images/team/boy1.png";
import Boy2 from "../../assets/images/team/boy2.png";
import Boy3 from "../../assets/images/team/boy3.png";
import Zara from "../../assets/images/team/zara.png";

export default function AboutUs() {
  return (
    <div style={{ overflow: "hidden" }}>
      <div
        style={{
          position: "absolute",
          zIndex: 1,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
          width: "-webkit-fill-available",
        }}
      >
        <Typography.Title>About the team</Typography.Title>
      </div>
      <Row>
        {/* Jomar */}
        <Col
          span={12}
          style={{
            backgroundColor: "#eace6a",
            paddingTop: "16.5em",
            display: "flex",
          }}
        >
          <Row style={{ display: "flex", alignItems: "flex-end" }}>
            <Col style={{ display: "flex" }} span={15}>
              <img
                src={Boy1}
                alt="jomar-caseres"
                style={{
                  height: 500,
                  width: "auto",
                  mixBlendMode: "luminosity",
                  marginLeft: "-3em",
                }}
              />
            </Col>
            <Col span={9} style={{ marginBottom: "8em" }}>
              <Typography.Title
                level={2}
                style={{ fontWeight: 800, textTransform: "uppercase" }}
              >
                Jomar Caseres
              </Typography.Title>
              <Typography>
                The Operations Efficiency Conductor on Urbanization
              </Typography>
            </Col>
          </Row>
        </Col>
        {/* Zara */}
        <Col
          span={12}
          style={{
            backgroundColor: "#75d0d7",
            paddingTop: "16.5em",
            display: "flex",
          }}
        >
          <Row style={{ display: "flex", alignItems: "flex-end" }}>
            <Col span={9} style={{ marginBottom: "8em" }}>
              <Typography.Title
                level={2}
                style={{ fontWeight: 800, textTransform: "uppercase" }}
              >
                Zara See
              </Typography.Title>
              <Typography>
                Business Developer on Urban and Rural Linkage
              </Typography>
            </Col>
            <Col style={{ display: "flex" }} span={15}>
              <img
                src={Zara}
                alt="zara-see"
                style={{
                  height: 500,
                  width: "auto",
                  mixBlendMode: "luminosity",
                }}
              />
            </Col>
          </Row>
        </Col>

        {/* Jake */}
        <Col
          span={12}
          style={{
            backgroundColor: "#de8b95",
            display: "flex",
          }}
        >
          <Row style={{ display: "flex", alignItems: "flex-end" }}>
            <Col style={{ display: "flex" }} span={15}>
              <img
                src={Boy2}
                alt="jake-que"
                style={{
                  height: 600,
                  width: "auto",
                  mixBlendMode: "luminosity",
                }}
              />
            </Col>
            <Col span={9} style={{ marginBottom: "8em" }}>
              <Typography.Title
                level={2}
                style={{ fontWeight: 800, textTransform: "uppercase" }}
              >
                Jake Que
              </Typography.Title>
              <Typography>The Urban Planner and a Financial Expert</Typography>
            </Col>
          </Row>
        </Col>
        {/* James */}
        <Col
          span={12}
          style={{
            backgroundColor: "#78c338",
            display: "flex",
          }}
        >
          <Row style={{ display: "flex", alignItems: "flex-end" }}>
            <Col span={9} style={{ marginBottom: "8em" }}>
              <Typography.Title
                level={2}
                style={{ fontWeight: 800, textTransform: "uppercase" }}
              >
                James Veluz
              </Typography.Title>
              <Typography>
                The Compliance Officer
                <br />
                <br />
              </Typography>
            </Col>
            <Col style={{ display: "flex" }} span={15}>
              <img
                src={Boy3}
                alt="james-veluz"
                style={{
                  height: 600,
                  width: "auto",
                  mixBlendMode: "luminosity",
                }}
              />
            </Col>
          </Row>
        </Col>
      </Row>
    </div>
  );
}
