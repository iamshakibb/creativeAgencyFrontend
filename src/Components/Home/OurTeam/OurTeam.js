import React from "react";
import { Container } from "react-bootstrap";
import NavBar from "../NavBar/NavBar";

export default function OurTeam() {
  document.body.style.backgroundColor = "#fbd062";
  return (
    <div>
      <NavBar />
      <Container>
        <div className="col-sm-12 text-center my-5">
          <h1>This Page is Under Development</h1>
        </div>
      </Container>
    </div>
  );
}
