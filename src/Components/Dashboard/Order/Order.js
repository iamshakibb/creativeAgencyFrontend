import Axios from "axios";
import React, { useContext, useState } from "react";
import { Button, Form, FormGroup, Row } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { UserInfoContent } from "../../../App";
import "./Order.css";

export default function Order() {
  const imgQuery = window.location.search;
  const img = imgQuery.slice(6);
  const { title } = useParams();
  const user = useContext(UserInfoContent);
  const { userInfo, setUserInfo } = user;

  // setting the data in form data
  const [formData, setFormData] = useState({
    name: userInfo.name,
    email: userInfo.email,
    serviceName: title,
    projectDetail: "",
    price: 0,
    img: img,
  });
  const getFormData = (e) => {
    if (e.target.name === "Project Details") {
      setFormData({ ...formData, projectDetail: e.target.value });
    } else if (e.target.name === "Price") {
      setFormData({ ...formData, price: e.target.value });
    }
  };
  const onSubmit = (e) => {
    e.preventDefault();
    const projectDetails = document.querySelector(".projectDetails");
    const price = document.querySelector(".Price");

    Axios.post("http://localhost:8000/addOrder", formData)
      .then((res) => {
        setUserInfo({ ...userInfo, success: "file Uploaded successfully", error: "" });
        projectDetails.value = "";
        price.value = "";
      })
      .catch((error) => {
        setUserInfo({ ...userInfo, success: "", error: "Sorry, Unable to upload please try again" });
        projectDetails.value = "";
        price.value = "";
      });
  };

  return (
    <div className="dashboardItemContainer addScroll col-md-12 my-4 p-5">
      <Form onSubmit={onSubmit}>
        <Row>
          <div className="col-md-6">
            <FormGroup>
              <Form.Label>Name</Form.Label>
              <Form.Control defaultValue={userInfo.name} required type="text" className="Name" name="Name" placeholder="Your Name" />
            </FormGroup>
            <FormGroup>
              <Form.Label>Email</Form.Label>
              <Form.Control defaultValue={userInfo.email} required type="Email" className="Email" name="Email" placeholder="Your Email" />
            </FormGroup>
            <FormGroup>
              <Form.Label>Service Name</Form.Label>
              <Form.Control defaultValue={title} required type="text" className="ServiceName" name="Service Name" placeholder="Service Name" />
            </FormGroup>
            <FormGroup>
              <Form.Label>Project Details</Form.Label>
              <textarea onChange={getFormData} required className="form-control projectDetails" name="Project Details" placeholder="Enter Project Details" rows="3"></textarea>
            </FormGroup>
            <FormGroup>
              <Form.Label>Price</Form.Label>
              <Form.Control onChange={getFormData} required type="number" className="Price" name="Price" placeholder="Enter Price" />
            </FormGroup>
            <Button type="submit" className="commonBtn px-4">
              Submit
            </Button>
          </div>
        </Row>
      </Form>
    </div>
  );
}
