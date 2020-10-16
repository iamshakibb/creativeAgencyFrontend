import Axios from "axios";
import React, { useContext, useState } from "react";
import { Button, Form, FormGroup, Row } from "react-bootstrap";
import { UserInfoContent } from "../../../App";
import DashboardSlider from "../DashboardSlider/DashboardSlider";
import DashboardStatus from "../DashbordPageStatus/DashboardStatus";

export default function Feedback() {
  document.body.style.backgroundColor = "#e5e5e5";
  const user = useContext(UserInfoContent);
  const { userInfo, setUserInfo } = user;
  const [feedback, setFeedback] = useState({
    img: userInfo.img,
    name: userInfo.name,
    designationAndCompanyName: "",
    feedback: "",
  });

  const feedbackData = (e) => {
    setUserInfo({ ...userInfo, successMessage: "", errorMessage: "" });
    if (e.target.name === "Designation") {
      setFeedback({ ...feedback, designationAndCompanyName: e.target.value });
    } else if (e.target.name === "Feedback") {
      setFeedback({ ...feedback, feedback: e.target.value });
    } else if (e.target.name === "Name") {
      setFeedback({ ...feedback, name: e.target.value });
    }
  };

  const submitFeedback = (e) => {
    const designationInput = document.querySelector(".designation");
    const feedbackInput = document.querySelector(".feedback");
    e.preventDefault();
    Axios.post("https://polar-dawn-10321.herokuapp.com/sendClientFeedback", feedback)
      .then(() => {
        setUserInfo({ ...userInfo, successMessage: "Feedback submit successfully" });
        designationInput.value = "";
        feedbackInput.value = "";
      })
      .catch(() => {
        setUserInfo({ ...userInfo, errorMessage: "Can not submit feedback. Try again later" });
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
              <DashboardStatus pageName={{ name: "Feedback" }} />
              <Form onSubmit={submitFeedback} style={{ height: "86vh" }}>
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
                      <Form.Control defaultValue={userInfo.name} onChange={feedbackData} required type="text" className="text" name="Name" placeholder="Enter name" />
                    </FormGroup>
                    <FormGroup>
                      <Form.Label> Designation ,Company’s name</Form.Label>
                      <Form.Control required onChange={feedbackData} type="text" className="designation " name="Designation" placeholder="Enter Designation , Company’s name " />
                    </FormGroup>
                    <FormGroup>
                      <Form.Label>Your Feedback</Form.Label>
                      <textarea required onChange={feedbackData} className="form-control feedback" name="Feedback" placeholder="Enter Feedback" rows="3"></textarea>
                    </FormGroup>

                    <Button type="submit" className="mt-5 px-5 commonBtn ">
                      Submit
                    </Button>
                  </div>
                </Row>
              </Form>
            </Row>
          </div>
        </Row>
      </div>
      {/* <div className="dashboardItemContainer addScroll col-md-12 my-4 p-5">
        <Form onSubmit={submitFeedback}>
          <p className="success">{userInfo.successMessage}</p>
          <p className="error">{userInfo.errorMessage}</p>
          <FormGroup>
            <Form.Label>Name</Form.Label>
            <Form.Control defaultValue={userInfo.name} required type="text" className="text w-50" name="Name" placeholder="Enter name" />
          </FormGroup>
          <FormGroup>
            <Form.Label> Designation ,Company’s name</Form.Label>
            <Form.Control required onChange={feedbackData} type="text" className="designation w-50" name="Designation" placeholder="Enter Designation , Company’s name " />
          </FormGroup>
          <FormGroup>
            <Form.Label>Your Feedback</Form.Label>
            <textarea required onChange={feedbackData} className="form-control feedback w-50" name="Feedback" placeholder="Enter Feedback" rows="3"></textarea>
          </FormGroup>

          <Button type="submit" className="mt-5 px-5 commonBtn ">
            Submit
          </Button>
        </Form>
      </div> */}
    </>
  );
}
