import React from "react";
import { Link } from "react-router-dom";
import car from "../../assets/images/lgu/car.png";
import { Typography, Button, Row, Col } from "antd";

import MinimalCarousel from "../../components/MinimalCarousel";

import pattern1 from "../../assets/images/lgu/pattern1.svg";
import pattern2 from "../../assets/images/lgu/pattern2.svg";
import pattern3 from "../../assets/images/lgu/pattern3.svg";
import benefit from "../../assets/images/lgu/benefit.png";
import metro from "../../assets/images/lgu/metro.png";
import park from "../../assets/images/lgu/park.png";

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
            paddingLeft: "70px",
            width: "1900px",
            background: `url(${pattern1}), url(${pattern2})`,
            backgroundRepeat: "no-repeat",
            backgroundPositionX: "left, right",
            backgroundPositionY: "center",
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
                Join the waitlist
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
      {/* body 2 */}
      <div
        style={{
          minHeight: "calc(100vh - 64px)",
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
          backgroundColor: "#fff",
        }}
      >
        <Row
          style={{
            padding: "0px 10em",
            background: `url(${pattern1}), url(${pattern3})`,
            backgroundRepeat: "no-repeat",
            backgroundPositionX: "50px, 95%",
            backgroundPositionY: "10px, 300px",
          }}
        >
          <Col
            span={12}
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <img
              src={benefit}
              alt="benefit parking"
              style={{
                width: "-webkit-fill-available",
                height: "auto",
                borderRadius: "2em",
              }}
            />
          </Col>
          <Col span={12} style={{ textAlign: "right" }}>
            <Typography.Title
              style={{
                color: "rgba(31, 41, 55, 0.85)",
                fontWeight: 700,
                fontSize: "36px",
                width: "522px",
                float: "right",
              }}
            >
              Cruise into the benefits of joining forces with{" "}
              <span style={{ color: "#6BB42F" }}>PARKTASTIC PH.</span>
            </Typography.Title>
            <Typography.Title
              level={4}
              style={{
                color: "#777777",
                fontWeight: 500,
                fontSize: "21px",
                width: "530px",
                float: "right",
                margin: 0,
              }}
            >
              From Streamlined parking management to happier communities and
              satisfied residents.
            </Typography.Title>
          </Col>
        </Row>
      </div>
      {/* body 3 */}
      <div
        style={{
          minHeight: "calc(100vh - 150px)",
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
        }}
      >
        <Row style={{ padding: "0px 10em" }}>
          <Col span={12}>
            <Typography.Title
              style={{
                color: "rgba(31, 41, 55, 0.85)",
                fontWeight: 700,
                fontSize: "36px",
                width: "514px",
              }}
            >
              Tackle{" "}
              <span style={{ color: "#6BB42F" }}>Metro Manila&apos;s</span>{" "}
              parking challenges today to pave the way for a sustainable and
              accessible urban future.
            </Typography.Title>
            <Typography.Title
              level={4}
              style={{
                color: "#777777",
                fontWeight: 500,
                fontSize: "21px",
                width: "530px",
                float: "left",
                margin: 0,
              }}
            >
              Efficient parking management brings immediate benefits while
              complementing long-term infrastructure plans.
            </Typography.Title>
          </Col>
          <Col
            span={12}
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <img
              src={metro}
              alt="real-time parking"
              style={{
                width: "-webkit-fill-available",
                height: "auto",
                borderRadius: "2em",
              }}
            />
          </Col>
        </Row>
      </div>
      {/* body 4 */}
      <div
        style={{
          minHeight: "calc(100vh - 150px)",
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
          background: "#fff",
        }}
      >
        <Row style={{ padding: "5em 10em" }}>
          <Col
            span={24}
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexDirection: "column",
            }}
          >
            <MinimalCarousel />
            <div>
              <Typography.Title
                level={4}
                style={{
                  color: "#777777",
                  fontWeight: 500,
                  fontSize: "21px",
                  margin: 0,
                  width: "1034px",
                }}
              >
                With PARKTASTIC PH, not only do LGUs gain access to our
                innovative parking platform, but we also{" "}
                <span style={{ color: "#6BB42F" }}>
                  provide designated outposts or areas to enhance the visibility
                  of our barangay partners
                </span>
                , fostering a stronger connection with the community they serve.
              </Typography.Title>
            </div>
          </Col>
        </Row>
      </div>
      {/* body 5 */}
      <div
        style={{
          minHeight: "calc(100vh - 150px)",
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
        }}
      >
        <Row style={{ padding: "5em 15em" }}>
          <Col
            span={24}
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexDirection: "column",
            }}
          >
            <Typography.Title
              style={{
                color: "rgba(31, 41, 55, 0.85)",
                fontWeight: 700,
                fontSize: "36px",
              }}
            >
              Steer towards the full potential of street spaces with{" "}
              <span style={{ color: "#6BB42F" }}>PARKTASTIC PH&apos;s</span>{" "}
              adaptive platform!
            </Typography.Title>
            <Typography.Title
              level={4}
              style={{
                color: "#777777",
                fontWeight: 500,
                fontSize: "21px",
                margin: 0,
                marginBottom: "2em",
              }}
            >
              Our platform integrates with evolving mobility trends such as
              micromobility and shared mobility networks
            </Typography.Title>
            <img
              src={park}
              alt="real-time parking"
              style={{
                width: "-webkit-fill-available",
                height: "auto",
                borderRadius: "2em",
              }}
            />
          </Col>
        </Row>
      </div>
    </div>
  );
}
