import React from "react";
import { Container, Row } from "react-bootstrap";
import ContactUsForm from "./ContactUsForm/ContactUsForm";
import ContactUsText from "./ContactUsText/ContactUsText";

export default function ContactUs() {
  return (
    <Container>
      <Row className="mt-5 py-5">
        <div className="col-sm-12 col-md-5">
          <ContactUsText />
        </div>
        <div className="col-sm-12 col-md-7">
          <ContactUsForm />
        </div>
      </Row>
    </Container>
  );
}
