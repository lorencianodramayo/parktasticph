import React from "react";
import { Link } from "react-router-dom";
import car from "../../assets/images/business/car-park.png";
import { Typography, Button, Row, Col } from "antd";

import pattern1 from "../../assets/images/business/pattern1.svg";
import pattern2 from "../../assets/images/business/pattern2.svg";

import earn from "../../assets/images/business/earn.png";
import relax from "../../assets/images/business/relax.svg";
import scalable from "../../assets/images/business/scalable.png";

export default function TheBusiness() {
  return (
    <div style={{ overflow: "hidden" }}>
      <div className="business-header-wrapper">
        <div
          style={{
            backgroundImage: `url(${pattern1}), url(${pattern2})`,
          }}
          className="business-header-content-left"
        >
          <Typography className="business-header-title">
            Are you struggling to sell your idle land and tired of seeing it
            lose value?
          </Typography>
          <Typography className="business-header-subtitle">
            What if you could earn revenue and increase the value of your land
            while searching for the perfect buyer?
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
          className="business-header-content-right"
        ></div>
      </div>
      {/* body 2 */}
      <div className="business-body2">
        <Row
          style={{
            background: `url(${pattern1}), url(${pattern2})`,
            backgroundRepeat: "no-repeat",
            backgroundPositionX: "50px, 95%",
            backgroundPositionY: "10px, 280px",
          }}
          className="business-content-row"
        >
          <Col
            sx={24}
            md={12}
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <img
              src={relax}
              alt="benefit parking"
              style={{
                width: "-webkit-fill-available",
                height: "auto",
                borderRadius: "2em",
              }}
            />
          </Col>
          <Col sx={24} md={12} className="business-col-body2">
            <Typography.Title className="business-body2-title">
              <span style={{ color: "#6BB42F" }}>PARKTASTIC PH</span> helps you
              with your short-term challenge.
            </Typography.Title>
            <Typography.Title level={4} className="business-body2-subtitle">
              Sign up your idle land with us and we&apos;ll equip it with
              cutting-edge tech! From transforming your land into a temporary
              parking area to managing operations, Parktastic PH has you
              covered. Boost Manila&apos;s parking solutions and join the smart
              city revolution today!
            </Typography.Title>
          </Col>
        </Row>
      </div>
      {/* body 3 */}
      <div className="business-body3">
        <Row className="business-content-row">
          <Col sx={24} md={12} className="business-col-body3">
            <Typography.Title className="border-span business-body3-title">
              <span>Earn More!</span>
            </Typography.Title>
            <Typography.Title level={4} className="business-body3-subtitle">
              Not only does it boost your earnings, but it also enhances land
              value through increased foot traffic.
              <br />
              <br />
              Be a key player in transforming Manila into a smart city, and
              elevate your community&apos;s appeal. Profit and progress
              combined!
            </Typography.Title>
          </Col>
          <Col
            sx={24}
            md={12}
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <img
              src={earn}
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
          backgroundImage: `url(${pattern1}), url(${pattern2})`,
        }}
        className="business-body4 business-content-row"
      >
        <Row
          style={{
            background: "linear-gradient(90deg, #8FBE61 0%, #F5C64E 100%)",
            borderRadius: "15px",
          }}
        >
          <Col
            sx={24}
            md={12}
            className="business-col-body4"
          >
            <Typography.Title
              style={{
                color: "#fff",
                fontWeight: 700,
                fontSize: "36px",
                marginTop: 0,
              }}
            >
              Scalable
            </Typography.Title>
            <Typography.Title
              level={4}
              style={{
                color: "#fff",
                fontWeight: 500,
                fontSize: "18px",
                margin: 0,
              }}
            >
              Opt for long-term and enjoy upgrades like EV charging stations and
              parking elevators, opening new income streams.
              <br />
              <br />
              Play a key role in Manila&apos;s smart city transformation while
              maximizing earnings. It&apos;s high-tech parking, made simple.
              <br />
              <br />
              Join us!
            </Typography.Title>
            <div style={{ display: "flex", marginTop: "30px" }}>
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
          </Col>
          <Col
            sx={24}
            md={12}
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <img
              src={scalable}
              alt="benefit parking"
              style={{
                width: "-webkit-fill-available",
                height: "auto",
                borderRadius: "2em",
                transform: "scale(1.5)",
              }}
            />
          </Col>
        </Row>
      </div>
    </div>
  );
}
