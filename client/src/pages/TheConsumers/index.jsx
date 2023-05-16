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
        <Typography.Title
          style={{
            margin: 0,
            zIndex: 1,
            color: "#fff",
            fontWeight: 800,
            fontSize: "50px",
          }}
        >
          Say goodbye to parking hassles in
        </Typography.Title>
        <Typography.Title
          style={{
            margin: 0,
            zIndex: 1,
            color: "#f6c64d",
            fontWeight: 800,
            fontSize: "50px",
          }}
        >
          Metro manila
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
              color: "#fff",
              fontSize: "26px",
              fontWeight: 500,
            }}
          >
            PARKTASTIC PH gives you the power to create your own fantastic
            parking experience.
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

      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          padding: "113px 75px 0",
        }}
      >
        <div style={{ position: "absolute", top: "40.5em", left: 0 }}>
          <img
            src={car}
            alt="car-model"
            style={{ width: "350px", height: "auto" }}
          />
        </div>
        <div
          style={{
            backgroundImage: `url(${patern1}), url(${patern2}) `,
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
            color: "#6BB42F",
          }}
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
        <Row style={{ padding: "0px 10em" }}>
          <Col
            span={12}
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
              You can focus on enjoying the city without the stress of finding
              parking. We keep you informed about open parking spaces saving you
              valuable time!
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
        <Row style={{ padding: "0px 10em" }}>
          <Col
            span={12}
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
            span={12}
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
        <Row style={{ padding: "0px 10em" }}>
          <Col
            span={12}
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
              We provide enhanced measures, including 24/7 surveillance and
              well-lit environments.
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
        <Row style={{ padding: "0px 10em" }}>
          <Col
            span={12}
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
            span={12}
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
        <Row style={{ padding: "0px 10em" }}>
          <Col
            span={12}
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
              Access to special offers and promotions from malls, hotels,
              tourist attractions, and other business in Metro Manila.
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
      <div
        style={{
          minHeight: "calc(100vh - 64px)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
          flexDirection: "column",
          textShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
        }}
      >
        <div
          style={{
            position: "absolute",
            background: `url(${footerBackground})`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundPositionX: "center",
            width: "-webkit-fill-available",
            height: "-webkit-fill-available",
            filter: "brightness(0.5)",
            minHeight: "calc(100vh - 64px)",
          }}
        />

        <div
          style={{
            zIndex: 1,
            width: "840px",
          }}
        >
          <Typography.Title
            style={{
              margin: 0,
              color: "#fff",
              fontWeight: 900,
              fontSize: "50px",
              letterSpacing: "0.01em",
            }}
          >
            <span style={{ color: "#f6c64d" }}>PARKTASTIC PH</span>&nbsp;
            Collaborates with Local Government and Business for Liveable Cities.
          </Typography.Title>
        </div>

        <div
          style={{
            zIndex: 1,
            width: "1025px",
            marginBottom: "3em",
            marginTop: "2em",
          }}
        >
          <Typography.Title
            level={4}
            style={{
              margin: 0,
              color: "#fff",
              fontSize: "26px",
              fontWeight: 600,
            }}
          >
            We actively partner with local government and businesses across the
            Philippines to foster liveable, sustainable cities. Our adaptive
            platform addresses the unique needs of each community while
            enhancing parking experience in urban areas.
          </Typography.Title>
        </div>
        <div
          style={{
            width: "550px",
            zIndex: 1,
          }}
        >
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
