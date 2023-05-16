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
            width: "1950px",
            background: `url(${pattern1}), url(${pattern2})`,
            backgroundRepeat: "no-repeat",
            backgroundPositionX: "left, right",
            backgroundPositionY: "center",
          }}
        >
          <Typography className="lgu-header">
            Are you struggling to sell your idle land and tired of seeing it
            lose value?
          </Typography>
          <Typography
            style={{
              fontSize: "21px",
              fontWeight: 600,
              color: "#fff",
              width: "650px",
              marginTop: "20px",
            }}
          >
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
        }}
      >
        <Row
          style={{
            padding: "0px 10em",
            background: `url(${pattern1}), url(${pattern2})`,
            backgroundRepeat: "no-repeat",
            backgroundPositionX: "50px, 95%",
            backgroundPositionY: "10px, 280px",
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
              src={relax}
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
                width: "596px",
                float: "right",
              }}
            >
              <span style={{ color: "#6BB42F" }}>PARKTASTIC PH</span> helps you
              with your short-term challenge.
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
      <div
        style={{
          minHeight: "calc(100vh - 150px)",
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
          backgroundColor: "#fff",
        }}
      >
        <Row style={{ padding: "0px 10em" }}>
          <Col span={12}>
            <Typography.Title
              style={{
                color: "#6BB42F",
                fontWeight: 700,
                fontSize: "36px",
                width: "514px",
              }}
              className="border-span"
            >
              <span>Earn More!</span>
            </Typography.Title>
            <Typography.Title
              level={4}
              style={{
                color: "#777777",
                fontWeight: 500,
                fontSize: "21px",
                width: "571px",
                float: "left",
                margin: 0,
              }}
            >
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
            span={12}
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
          minHeight: "calc(100vh - 168px)",
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
          padding: "0px 10em",
          backgroundImage: `url(${pattern1}), url(${pattern2})`,
          backgroundRepeat: "no-repeat",
          backgroundPositionX: "40px, 97%",
          backgroundPositionY: "440px, 50px",
        }}
      >
        <Row
          style={{
            background: "linear-gradient(90deg, #8FBE61 0%, #F5C64E 100%)",
            borderRadius: "15px",
          }}
        >
          <Col
            span={12}
            style={{
              padding: "0 69px",
              display: "flex",
              justifyContent: "center",
              flexDirection: "column",
            }}
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
            span={12}
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
