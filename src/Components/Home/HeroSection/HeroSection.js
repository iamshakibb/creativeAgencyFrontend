import React from "react";
import { Button, Container, Row } from "react-bootstrap";
import { Link } from "react-scroll";
import "./HeroSection.css";

export default function HeroSection() {
  return (
    <Container>
      <Row>
        <div className="col-md-7 heroBanner mobile d-flex align-items-center justify-content-center">
          <img src="https://i.ibb.co/CmqRHq1/Frame.png" alt="banner" />
        </div>
        <div className="col-md-5 heroText col-sm-12 d-flex align-items-center justify-content-center">
          <div>
            <h1 className="mb-3">Let’s Grow Your Brand To The Next Level</h1>
            <p className="mb-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus commodo ipsum duis laoreet maecenas. Feugiat </p>
            <Link to="services" smooth={true} duration={1000}>
              <Button className="hireBtn commonBtn">Hire Us</Button>
            </Link>
          </div>
        </div>
        <div className="col-md-7 desktop heroBanner d-flex align-items-center justify-content-center">
          <img src="https://i.ibb.co/CmqRHq1/Frame.png" alt="banner" />
        </div>
      </Row>
    </Container>
  );
}
