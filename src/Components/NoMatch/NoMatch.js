import React from "react";
import { Container } from "react-bootstrap";

export default function NoMatch() {
  const body = document.querySelector(".body");
  body.style.backgroundColor = "#fbd062";
  return (
    <Container style={{ position: "relative" }}>
      <div style={{ bottom: "-300px" }} className="col-sm-12 d-flex align-items-center justify-content-center">
        <h1>Sorry, Not fond!</h1>
      </div>
    </Container>
  );
}
