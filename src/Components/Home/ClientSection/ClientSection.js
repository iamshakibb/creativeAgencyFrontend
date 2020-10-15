import React from "react";
import { Container, Row } from "react-bootstrap";
import "./ClientSection.css";

export default function ClientSection() {
  return (
    <Container>
      <Row className="align-items-center my-5 py-5 justify-content-center client">
        <div className="col-md-2">
          <img src="https://i.ibb.co/Tt6YdSL/uber.png" alt="uber" />
        </div>
        <div className="col-md-2">
          <img src="https://i.ibb.co/dP3qx4n/slack.png" alt="slack" />
        </div>
        <div className="col-md-2">
          <img src="https://i.ibb.co/QHkHVSx/netflix.png" alt="netflix" />
        </div>
        <div className="col-md-2">
          <img src="https://i.ibb.co/QbX4qTC/google.png" alt="google" />
        </div>
        <div className="col-md-2">
          <img src="https://i.ibb.co/B2Mmmjq/airbnb.png" alt="airbnb" />
        </div>
      </Row>
    </Container>
  );
}
