import React from "react";

import { Button, Card, Col, Input, Row, Space, Typography } from "antd";

import headerBackground from "../../assets/images/park1.jpg";
import footerBackground from "../../assets/images/bgc1.jpg";

import realTime from "../../assets/images/consumers/available-parking.svg";
import payParking from "../../assets/images/home/pay-parking.jpg";
import security from "../../assets/images/home/security.jpg";
import perks from "../../assets/images/home/perks.jpg";

import banner from "../../assets/images/consumers/consumer-banner.png";

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
            Become PARKTASTIC Buddy
          </Button>
        </div>
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
        <Row style={{ padding: "0px 10em" }}>
          <Col span={12}>
            <Typography.Title>Real Time Parking Availability</Typography.Title>
            <Typography.Title level={4}>
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
        <Row style={{ padding: "0px 10em" }} gutter={[24, 24]}>
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
          <Col span={12}>
            <Typography.Title>Park, Book, Pay, Repeat</Typography.Title>
            <Typography.Title level={4}>
              You can focus on enjoying the city without the stress of finding
              parking. We keep you informed about open parking spaces saving you
              valuable time!
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
          <Col span={12}>
            <Typography.Title>Secure and Safe Parking</Typography.Title>
            <Typography.Title level={4}>
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
              src={realTime}
              alt="real-time parking"
              style={{
                width: "-webkit-fill-available",
                height: "auto",
                borderRadius: "2em",
              }}
            />
          </Col>
          <Col span={12}>
            <Typography.Title>Parktastic Bayani</Typography.Title>
            <Typography.Title level={4}>
              Our partners are ready to assist you in navigating your parking
              spot, ensuring a smooth and stress-free process. Additionally, we
              offer a range of valuable services tailored to your needs,
              including car trouble assistance an car wash options.
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
          <Col span={12}>
            <Typography.Title>Unlocking Exclusive Perks</Typography.Title>
            <Typography.Title level={4}>
              Access to special offers and promotions from malls, hotels,
              tourist attractions and other business in Metro Manila.
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
            width: "600px",
          }}
        >
          <Typography.Title style={{ margin: 0, color: "#fff" }}>
            <span style={{ color: "#f6c64d" }}>Parktastic PH</span>&nbsp;
            Collaborates with Local Government and Business for Liveable Cities.
          </Typography.Title>
        </div>

        <div
          style={{
            zIndex: 1,
            width: "800px",
            marginBottom: "3em",
            marginTop: "2em",
          }}
        >
          <Typography.Title level={4} style={{ margin: 0, color: "#fff" }}>
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
          <Button type="primary" size="large">
            Learn more
          </Button>
        </div>
      </div>
    </>
  );
}
