import React from "react";
import { Container } from "react-bootstrap";

export default function FooterSectiom() {
  const date = new Date().getFullYear();
  return (
    <Container className="text-center py-3">
      <div className="con-sm-12">copyright Orange labs {date}</div>
    </Container>
  );
}
