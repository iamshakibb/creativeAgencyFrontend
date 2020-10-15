import React from "react";
import { Button, Form, FormGroup } from "react-bootstrap";

export default function ContactUsForm() {
  return (
    <>
      <Form>
        <FormGroup>
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
        </FormGroup>
        <FormGroup>
          <Form.Label>Your name / company’s name</Form.Label>
          <Form.Control type="text" placeholder="Enter you name or company's name" />
        </FormGroup>
        <FormGroup>
          <Form.Label>Your Message</Form.Label>
          <textarea className="form-control" placeholder="Enter your message" rows="3"></textarea>
        </FormGroup>
        <Button type="submit" className="commonBtn">
          Send
        </Button>
      </Form>
    </>
  );
}
