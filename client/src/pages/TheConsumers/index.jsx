import React from "react";

import { Button, Card, Col, Input, Row, Space, Typography } from "antd";

import footerBackground from "../../assets/images/consumers/footer-background.png";

import realTime from "../../assets/images/consumers/available-parking.png";
import payParking from "../../assets/images/consumers/plan-book.png";
import security from "../../assets/images/consumers/secure-safe.png";
import bayanihan from "../../assets/images/consumers/bayanihan.png";
import perks from "../../assets/images/consumers/perks.png";

import banner from "../../assets/images/consumers/consumer-banner.png";
import patern1 from "../../assets/images/consumers/patern1.svg";
import patern2 from "../../assets/images/consumers/patern2.svg";
import car from "../../assets/images/consumers/car.png";

import { Link } from "react-router-dom";

export default function TheConsumers() {
  return (
    <>
      {/* body 1  */}
      <div
        style={{
          minHeight: "calc(100vh - 64px)",
          textTransform: "capitalize",
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
            background: `url(${banner})`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundPositionX: "center",
            width: "-webkit-fill-available",
            height: "-webkit-fill-available",
            filter: "brightness(0.5)",
          }}
        />
        <Typography.Title className="consumer-title1">
          Say goodbye to parking hassles in
        </Typography.Title>
        <Typography.Title className="consumer-title2">
          Metro manila
        </Typography.Title>

        <div className="consumer-subtitle-container">
          <Typography.Title level={4} className="consumer-subtitle1">
            PARKTASTIC PH gives you the power to create your own fantastic
            parking experience.
          </Typography.Title>
        </div>
        <div
          style={{
            fontWeight: 600,
          }}
          className="consumer-button-link"
        >
          <Link
            to="https://55qvxzcjpn2.typeform.com/to/mFn3BFdY"
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
              }}
              size="large"
            >
              Join the waitlist
            </Button>
          </Link>
        </div>
      </div>

      <div className="car-green-container">
        <div className="car-green-wrapper">
          <img src={car} alt="car-model" className="car-green" />
        </div>
        <div
          style={{
            backgroundImage: `url(${patern1}), url(${patern2}) `,
          }}
          className="car-green-header"
        >
          <div
            style={{ width: "686px", lineHeight: "56.65px" }}
            className="border-span"
          >
            FUNTASTIC DAY BEGINS WITH <span>PARKTASTIC PH!</span>
          </div>
        </div>
      </div>
      {/* body 2 */}
      <div
        style={{
          minHeight: "calc(100vh - 150px)",
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
        }}
      >
        <Row className="consumer-body-row">
          <Col
            md={12}
            xs={24}
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
            }}
          >
            <Typography.Title
              style={{ color: "#6BB42F", fontWeight: 700, fontSize: "36px" }}
            >
              Real Time Parking Availability
            </Typography.Title>
            <Typography.Title level={4} className="consumer-body-col-subtitle">
              You can focus on enjoying the city without the stress of finding
              parking. We keep you informed about open parking spaces saving you
              valuable time!
            </Typography.Title>
          </Col>
          <Col
            md={12}
            xs={24}
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <img
              src={realTime}
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
      {/* body 3 */}
      <div
        style={{
          minHeight: "calc(100vh - 64px)",
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
          background: "#fff",
        }}
      >
        <Row className="consumer-body-row">
          <Col
            md={12}
            xs={24}
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <img
              src={payParking}
              alt="real-time parking"
              style={{
                width: "-webkit-fill-available",
                height: "auto",
                borderRadius: "2em",
              }}
            />
          </Col>
          <Col
            md={12}
            xs={24}
            style={{
              textAlign: "right",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "flex-end",
            }}
          >
            <Typography.Title
              style={{ color: "#6BB42F", fontWeight: 700, fontSize: "36px" }}
            >
              Plan, Book, Pay, Repeat
            </Typography.Title>
            <Typography.Title level={4} className="consumer-body-col-subtitle">
              Experience a hassle-free parking in Metro Manila with PARKTASTIC
              PH&apos;s user-friendly platform. Effortlessly plan your journey,
              reserve a parking slot in advance, and enjoy secure payment
              options.
            </Typography.Title>
          </Col>
        </Row>
      </div>
      {/* body 4 */}
      <div
        style={{
          minHeight: "calc(100vh - 64px)",
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
        }}
      >
        <Row className="consumer-body-row">
          <Col
            md={12}
            xs={24}
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
            }}
          >
            <Typography.Title
              style={{ color: "#6BB42F", fontWeight: 700, fontSize: "36px" }}
            >
              Secure and Safe Parking
            </Typography.Title>
            <Typography.Title level={4} className="consumer-body-col-subtitle">
              We provide enhanced measures, including 24/7 surveillance and
              well-lit environments.
            </Typography.Title>
          </Col>
          <Col
            md={12}
            xs={24}
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <img
              src={security}
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
      {/* body 5 */}
      <div
        style={{
          minHeight: "calc(100vh - 64px)",
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
          background: "#fff",
        }}
      >
        <Row className="consumer-body-row">
          <Col
            md={12}
            xs={24}
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <img
              src={bayanihan}
              alt="real-time parking"
              style={{
                width: "-webkit-fill-available",
                height: "auto",
                borderRadius: "2em",
              }}
            />
          </Col>
          <Col
            md={12}
            xs={24}
            style={{
              textAlign: "right",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "flex-end",
            }}
          >
            <Typography.Title
              style={{ color: "#6BB42F", fontWeight: 700, fontSize: "36px" }}
            >
              Parktastic Bayani
            </Typography.Title>
            <Typography.Title level={4} className="consumer-body-col-subtitle">
              Our partners are ready to assist you in navigating your parking
              spot, ensuring a smooth and stress-free process. Additionally, we
              offer a range of valuable services tailored to your needs,
              including car trouble assistance and car wash options.
            </Typography.Title>
          </Col>
        </Row>
      </div>
      {/* body 6 */}
      <div
        style={{
          minHeight: "calc(100vh - 64px)",
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
        }}
      >
        <Row className="consumer-body-row">
          <Col
            md={12}
            xs={24}
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
            }}
          >
            <Typography.Title
              style={{ color: "#6BB42F", fontWeight: 700, fontSize: "36px" }}
            >
              Unlocking Exclusive Perks
            </Typography.Title>
            <Typography.Title level={4} className="consumer-body-col-subtitle">
              Access to special offers and promotions from malls, hotels,
              tourist attractions, and other business in Metro Manila.
            </Typography.Title>
          </Col>
          <Col
            md={12}
            xs={24}
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <img
              src={perks}
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
      {/* body 7 */}
      <div className="consumer-body7-container">
        <div
          style={{
            backgroundImage: `url(${footerBackground})`,
          }}
          className="consumer-body7-wrapper"
        />

        <div className="consumer-body7-title-wrapper">
          <Typography.Title className="consumer-body7-title">
            <span style={{ color: "#f6c64d" }}>PARKTASTIC PH</span>&nbsp;
            Collaborates with Local Government and Business for Liveable Cities.
          </Typography.Title>
        </div>

        <div className="consumer-body7-subtitle-wrapper">
          <Typography.Title level={4} className="consumer-body7-subtitle">
            We actively partner with local government and businesses across the
            Philippines to foster liveable, sustainable cities. Our adaptive
            platform addresses the unique needs of each community while
            enhancing parking experience in urban areas.
          </Typography.Title>
        </div>
        <div className="consumer-button-link">
          <Link to="/the-lgu">
            <Button
              type="primary"
              style={{
                fontSize: "18px",
                lineHeight: "18px",
                padding: "16px, 58px, 16px, 58px",
                borderRadius: "100px",
              }}
              size="large"
            >
              Learn more
            </Button>
          </Link>
        </div>
      </div>
    </>
  );
}
