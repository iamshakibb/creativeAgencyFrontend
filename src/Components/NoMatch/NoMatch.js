import React from "react";
import { Container } from "react-bootstrap";

export default function NoMatch() {
  return (
    <div style={{ backgroundColor: "#fbd062", height: "100vh", display: "flex", alignItems: "center" }}>
      <Container style={{ position: "relative" }}>
        <div className="col-sm-12 d-flex align-items-center justify-content-center">
          <h1>Sorry, Not fond!</h1>
        </div>
      </Container>
    </div>
  );
}
