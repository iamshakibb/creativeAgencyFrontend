import Axios from "axios";
import React, { useContext, useState } from "react";
import { Button, Form, FormGroup, Row } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { UserInfoContent } from "../../../App";
import DashboardSlider from "../DashboardSlider/DashboardSlider";
import DashboardStatus from "../DashbordPageStatus/DashboardStatus";
import "./Order.css";

export default function Order() {
  document.body.style.backgroundColor = "#e5e5e5";
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
    setUserInfo({ ...userInfo, successMessage: "", errorMessage: "" });
    if (e.target.name === "Project Details") {
      setFormData({ ...formData, projectDetail: e.target.value });
    } else if (e.target.name === "Price") {
      setFormData({ ...formData, price: e.target.value });
    } else if (e.target.name === "Email") {
      setFormData({ ...formData, email: e.target.value });
    } else if (e.target.name === "Service Name") {
      setFormData({ ...formData, serviceName: e.target.value });
    } else if (e.target.name === "Name") {
      setFormData({ ...formData, name: e.target.value });
    }
  };
  const onSubmit = (e) => {
    document.body.style.backgroundColor = "#e5e5e5";
    e.preventDefault();
    const projectDetails = document.querySelector(".projectDetails");
    const price = document.querySelector(".Price");
    const name = document.querySelector(".Name");
    const email = document.querySelector(".Email");
    const serviceName = document.querySelector(".ServiceName");
    Axios.post("https://polar-dawn-10321.herokuapp.com/addOrder", formData)
      .then((res) => {
        setUserInfo({ ...userInfo, successMessage: "file Uploaded successfully", errorMessage: "" });
        projectDetails.value = "";
        price.value = "";
        name.value = "";
        email.value = "";
        serviceName.value = "";
      })
      .catch((error) => {
        setUserInfo({ ...userInfo, successMessage: "", errorMessage: "Sorry, Unable to upload please try again" });
        projectDetails.value = "";
        price.value = "";
        name.value = "";
        email.value = "";
        serviceName.value = "";
      });
  };

  return (
    <>
      <div>
        <Row>
          <div className="col-md-4 col-sm-5 col-lg-3 pr-0">
            <DashboardSlider />
          </div>
          <div className="col-md-8 col-sm-7 col-lg-9">
            <Row>
              <DashboardStatus pageName={{ name: "Order" }} />
              <Form onSubmit={onSubmit}>
                <Row>
                  <div className="col-md-10 col-lg-8 mt-4 mb-1 mx-5">
                    <p style={userInfo.successMessage ? { animation: "FadeAnimation 1s ease-in 2s forwards" } : null} className="success">
                      {userInfo.successMessage}
                    </p>
                    <p style={userInfo.errorMessage ? { animation: "FadeAnimation 1s ease-in 2s forwards" } : null} className="error">
                      {userInfo.errorMessage}
                    </p>
                  </div>
                  <div className="col-md-10 col-lg-12 my-1 mx-5">
                    <FormGroup>
                      <Form.Label>Name</Form.Label>
                      <Form.Control onChange={getFormData} defaultValue={userInfo.name} required type="text" className="Name" name="Name" placeholder="Your Name" />
                    </FormGroup>
                    <FormGroup>
                      <Form.Label>Email</Form.Label>
                      <Form.Control onChange={getFormData} defaultValue={userInfo.email} required type="Email" className="Email" name="Email" placeholder="Your Email" />
                    </FormGroup>
                    <FormGroup>
                      <Form.Label>Service Name</Form.Label>
                      <Form.Control onChange={getFormData} defaultValue={title} required type="text" className="ServiceName" name="Service Name" placeholder="Service Name" />
                    </FormGroup>
                    <FormGroup>
                      <Form.Label>Project Details</Form.Label>
                      <textarea
                        onChange={getFormData}
                        required
                        className="form-control projectDetails"
                        name="Project Details"
                        placeholder="Enter Project Details"
                        rows="3"
                      ></textarea>
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
            </Row>
          </div>
        </Row>
      </div>
    </>
  );
}
