import Axios from "axios";
import React, { useState } from "react";
import { Button, Form, FormGroup } from "react-bootstrap";
import "./MakeAdmin.css";

export default function MakeAdmin({ userInfo, setUserInfo }) {
  const [email, setEmail] = useState({
    email: "",
  });
  const emailData = (e) => {
    if (e.target.name === "Email") {
      setEmail({ ...email, email: e.target.value });
      userInfo.successMessage = "";
      userInfo.errorMessage = "";
    }
  };

  const emailSubmit = (e) => {
    e.preventDefault();
    Axios.post("http://localhost:8000/addAdmin", email)
      .then(() => {
        setUserInfo({ ...userInfo, successMessage: "Make admin Successfully" });
      })
      .catch(() => {
        setUserInfo({ ...userInfo, errorMessage: "Can not make admin. Please Try again later" });
      });
  };
  return (
    <div className="dashboardItemContainer col-md-12 my-4 p-5">
      <Form onSubmit={emailSubmit} className="makeAdminForm">
        <p className="success">{userInfo.successMessage}</p>
        <p className="error">{userInfo.errorMessage}</p>
        <FormGroup>
          <Form.Label>Email</Form.Label>
          <div className="d-flex emailContainer justify-content-center align-items-center">
            <Form.Control onChange={emailData} required type="email" className=" email" name="Email" placeholder="Enter email" />
            <Button type="submit" className="mx-3 adminBtn commonBtn">
              Make Admin
            </Button>
          </div>
        </FormGroup>
      </Form>
    </div>
  );
}
