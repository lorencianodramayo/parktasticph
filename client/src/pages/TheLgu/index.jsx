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
      <div className="lgu-header-wrapper">
        <div
          style={{
            backgroundImage: `url(${pattern1}), url(${pattern2})`,
          }}
          className="lgu-header-content-left"
        >
          <Typography className="lgu-header-title">
            Transform urban mobility in Metro Manila through innovative parking
            solutions and collaborative partnerships with local government
            units.
          </Typography>
          <Typography className="lgu-header-subtitle">
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
            backgroundImage: `url(${car})`,
          }}
          className="lgu-header-content-right"
        ></div>
      </div>
      {/* body 2 */}
      <div className="lgu-body2">
        <Row
          style={{
            background: `url(${pattern1}), url(${pattern3})`,
            backgroundRepeat: "no-repeat",
            backgroundPositionX: "50px, 95%",
            backgroundPositionY: "10px, 300px",
          }}
          className="lgu-content-row"
        >
          <Col
            md={12}
            sx={24}
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
                width: "100%",
                height: "auto",
                borderRadius: "2em",
              }}
            />
          </Col>
          <Col md={12} sx={24} className="lgu-col-body2">
            <Typography.Title className="lgu-body2-title">
              Cruise into the benefits of joining forces with{" "}
              <span style={{ color: "#6BB42F" }}>PARKTASTIC PH.</span>
            </Typography.Title>
            <Typography.Title level={4} className="lgu-body2-subtitle">
              From Streamlined parking management to happier communities and
              satisfied residents.
            </Typography.Title>
          </Col>
        </Row>
      </div>
      {/* body 3 */}
      <div className="lgu-body3">
        <Row className="lgu-content-row">
          <Col md={12} sx={24} className="lgu-col-body3">
            <Typography.Title className="lgu-body3-title">
              Tackle{" "}
              <span style={{ color: "#6BB42F" }}>Metro Manila&apos;s</span>{" "}
              parking challenges today to pave the way for a sustainable and
              accessible urban future.
            </Typography.Title>
            <Typography.Title level={4} className="lgu-body3-subtitle">
              Efficient parking management brings immediate benefits while
              complementing long-term infrastructure plans.
            </Typography.Title>
          </Col>
          <Col
            md={12}
            sx={24}
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
                width: "100%",
                height: "auto",
                borderRadius: "2em",
              }}
            />
          </Col>
        </Row>
      </div>
      {/* body 4 */}
      <div className="lgu-body4">
        <Row className="lgu-content-row">
          <Col
            span={24}
            className="lgu-col-body4"
          >
            <MinimalCarousel />
            <div>
              <Typography.Title level={4} className="lgu-body4-subtitle">
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
      <div className="lgu-body5">
        <Row className="lgu-content-row">
          <Col span={24} className="lgu-col-body5">
            <Typography.Title className="lgu-body5-title">
              Steer towards the full potential of street spaces with{" "}
              <span style={{ color: "#6BB42F" }}>PARKTASTIC PH&apos;s</span>{" "}
              adaptive platform!
            </Typography.Title>
            <Typography.Title level={4} className="lgu-body5-subtitle">
              Our platform integrates with evolving mobility trends such as
              micromobility and shared mobility networks
            </Typography.Title>
            <img
              src={park}
              alt="real-time parking"
              style={{
                width: "100%",
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
