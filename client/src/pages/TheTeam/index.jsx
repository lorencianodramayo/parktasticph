import React from "react";

import { Button, Card, Col, Input, Row, Space, Typography } from "antd";

import { LinkedinOutlined } from "@ant-design/icons";

import teamBanner from "../../assets/images/team/team-banner.png";
import pattern1 from "../../assets/images/team/pattern1.svg";
import pattern2 from "../../assets/images/team/pattern2.svg";
import zara from "../../assets/images/team/zara.svg";
import james from "../../assets/images/team/james.svg";
import jomar from "../../assets/images/team/jomar.svg";

import { Link } from "react-router-dom";

export default function TheTeam() {
  return (
    <>
      {/* body 1  */}
      <div
        style={{
          height: "470px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
          flexDirection: "column",
        }}
      >
        <div
          style={{
            position: "absolute",
            background: `url(${teamBanner})`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundPositionX: "center",
            width: "-webkit-fill-available",
            filter: "brightness(0.5)",
            height: "479px",
          }}
        />
        <Typography.Title
          style={{
            margin: 0,
            zIndex: 1,
            color: "#fff",
            fontWeight: 800,
            fontSize: "44px",
            width: "1081px",
            textShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
            textTransform: "none",
          }}
        >
          We&apos;re on the lookout for{" "}
          <span style={{ color: "#F5C64E" }}>talented individuals</span> with a
          passion for urban mobility and a drive to reshape the way cities move.
        </Typography.Title>

        <div
          style={{
            zIndex: 1,
            width: "753px",
            marginBottom: "3em",
            marginTop: "2em",
          }}
        >
          <Typography.Title
            level={4}
            style={{
              margin: 0,
              fontSize: "26px",
              fontWeight: 500,
              textShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
              color: "#F5C64E",
              textTransform: "none",
            }}
          >
            Join our growing team and contribute to a brighter urban future!
          </Typography.Title>
        </div>
        <div
          style={{
            width: "550px",
            zIndex: 1,
            fontWeight: 600,
          }}
        >
          <Link
            to="https://55qvxzcjpn2.typeform.com/to/TstbJq0s"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button
              type="primary"
              style={{
                fontSize: "18px",
                lineHeight: "18px",
                padding: "16px, 58px, 16px, 58px",
                borderRadius: "100px",
                width: "153px",
              }}
              size="large"
            >
              Join Us
            </Button>
          </Link>
        </div>
      </div>

      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          padding: "75px 75px 0",
          position: "absolute",
          zIndex: 1,
          width: "100%",
        }}
      >
        <div
          style={{
            backgroundImage: `url(${pattern1}), url(${pattern2}) `,
            backgroundRepeat: "no-repeat",
            backgroundPosition: "left, right",
            height: "184px",
            width: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontStyle: "italic",
            fontWeight: 800,
            fontSize: "50px",
            textAlign: "center",
            color: "#FFFFFF",
          }}
        >
          <div
            style={{
              lineHeight: "56.65px",
              textShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
            }}
            className="border-span-white"
          >
            <span>ABOUT THE TEAM</span>
          </div>
        </div>
      </div>

      <Row>
        {/* Jomar */}
        <Col
          span={8}
          style={{
            backgroundColor: "#eace6a",
            paddingTop: "30em",
            display: "flex",
          }}
        >
          <Row style={{ display: "flex", alignItems: "flex-end" }}>
            <Col style={{ display: "flex" }}>
              <div
                style={{
                  position: "absolute",
                  bottom: 40,
                  right: 70,
                  textAlign: "right",
                  zIndex: 1,
                }}
              >
                <Typography.Title
                  level={2}
                  style={{
                    fontWeight: 800,
                    textTransform: "capitalize",
                    color: "#fff",
                    fontSize: "31px",
                    letterSpacing: "-0.2px",
                    margin: 0,
                  }}
                >
                  Jomar Caseres
                </Typography.Title>
                <Typography
                  style={{
                    color: "#fff",
                    fontSize: "18px",
                    letterSpacing: "0.1px",
                    width: "273px",
                  }}
                >
                  The Operations Efficiency Conductor on Urbanization
                </Typography>
                <Link
                  to="https://www.linkedin.com/in/engrjcaseres/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button
                    type="primary"
                    shape="circle"
                    style={{ backgroundColor: "#0171ae" }}
                    icon={<LinkedinOutlined />}
                  />
                </Link>
              </div>
              <img
                src={jomar}
                alt="jomar-caseres"
                style={{
                  height: 500,
                  width: "auto",
                  mixBlendMode: "luminosity",
                }}
              />
            </Col>
          </Row>
        </Col>
        {/* Zara */}
        <Col
          span={8}
          style={{
            backgroundColor: "#75d0d7",
            paddingTop: "30em",
            display: "flex",
          }}
        >
          <Row style={{ display: "flex", alignItems: "flex-end" }}>
            <Col style={{ display: "flex" }}>
              <div
                style={{
                  position: "absolute",
                  bottom: 40,
                  right: 60,
                  textAlign: "right",
                  zIndex: 1,
                }}
              >
                <Typography.Title
                  level={2}
                  style={{
                    fontWeight: 800,
                    textTransform: "capitalize",
                    color: "#fff",
                    fontSize: "31px",
                    letterSpacing: "-0.2px",
                    margin: 0,
                  }}
                >
                  Zara See
                </Typography.Title>
                <Typography
                  style={{
                    color: "#fff",
                    fontSize: "18px",
                    letterSpacing: "0.1px",
                    width: "218px",
                  }}
                >
                  Business Developer on Urban and Rural Linkage
                </Typography>
                <Link
                  to="https://www.linkedin.com/in/zarasee/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button
                    type="primary"
                    shape="circle"
                    style={{ backgroundColor: "#0171ae" }}
                    icon={<LinkedinOutlined />}
                  />
                </Link>
              </div>
              <img
                src={zara}
                alt="zara-see"
                style={{
                  height: 490,
                  width: "auto",
                  mixBlendMode: "luminosity",
                  marginLeft: "2em",
                }}
              />
            </Col>
          </Row>
        </Col>
        {/* James */}
        <Col
          span={8}
          style={{
            backgroundColor: "#DE8B95",
            display: "flex",
            justifyContent: "flex-end",
          }}
        >
          <Row style={{ display: "flex", alignItems: "flex-end" }}>
            <Col style={{ display: "flex" }}>
              <div
                style={{
                  position: "absolute",
                  bottom: 57,
                  right: 60,
                  textAlign: "right",
                  zIndex: 1,
                }}
              >
                <Typography.Title
                  level={2}
                  style={{
                    fontWeight: 800,
                    textTransform: "capitalize",
                    color: "#fff",
                    fontSize: "31px",
                    letterSpacing: "-0.2px",
                    margin: 0,
                  }}
                >
                  James Veluz
                </Typography.Title>
                <Typography
                  style={{
                    color: "#fff",
                    fontSize: "18px",
                    letterSpacing: "0.1px",
                  }}
                >
                  The Compliance Officer
                </Typography>
                <Link
                  to="https://www.linkedin.com/in/sherwin-james-veluz-a85a61a6/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button
                    type="primary"
                    shape="circle"
                    style={{ backgroundColor: "#0171ae" }}
                    icon={<LinkedinOutlined />}
                  />
                </Link>
              </div>
              <img
                src={james}
                alt="james-veluz"
                style={{
                  height: 490,
                  width: "auto",
                  mixBlendMode: "luminosity",
                }}
              />
            </Col>
          </Row>
        </Col>
      </Row>
    </>
  );
}
