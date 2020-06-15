import React, { useState } from "react";
import { Col, Button, Row, Typography } from "antd";
import "../css/app.css";
import { LoginFormFirebase } from "./LoginForm";

const { Title, Text } = Typography;

/**
 * TODO: use a proper css to style this page
 */

export const Landing = (props) => {
  const [showForm, setShowForm] = useState(false);
  const [accessType, setAccessType] = useState("");

  return (
    <Row
      style={{
        display: "flex",
        backgroundColor: "#C4EBC8",
        height: "100vh",
        alignContent: "center",
        textAlign: "center",
      }}
    >
      <Col span={14} style={{ shapeRendering: "crispEdges" }}>
        <img
          src={require("../images/landing.png")}
          alt="landing app showcase"
          style={{ height: 650, width: 1000 }}
        />
      </Col>
      <Col
        span={10}
        style={{
          paddingTop: 100,
          alignCenter: "center",
          textAlign: "start",
        }}
      >
        <Title level={1}>Shelfify</Title>
        <Text style={{ fontSize: 20 }}>
          A minimalistic way to order whatever you want.
        </Text>
        <ul style={{ fontSize: 18 }}>
          <li>Highly Customizable Categories</li>
          <li>Minimalistic image-based cards</li>
          <li>Deep stats calculate upon what you read</li>
        </ul>
        <Row style={{ margin: 20 }}>
          <Button
            style={{ marginRight: 20 }}
            type="primary"
            onClick={() => {
              setShowForm(true);
              setAccessType("signup");
            }}
          >
            Sign Up
          </Button>
          <Button
            onClick={() => {
              setShowForm(true);
              setAccessType("login");
            }}
          >
            Log In
          </Button>
        </Row>
      </Col>
      {showForm && (
        <LoginFormFirebase
          accessType={accessType}
          visible={showForm}
          exit={() => setShowForm(false)}
        />
      )}
    </Row>
  );
};
