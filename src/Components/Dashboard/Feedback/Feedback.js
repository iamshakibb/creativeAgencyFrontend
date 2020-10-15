import Axios from "axios";
import React, { useState } from "react";
import { Button, Form, FormGroup } from "react-bootstrap";

export default function Feedback({ userInfo, setUserInfo }) {
  const [feedback, setFeedback] = useState({
    img: userInfo.img,
    name: userInfo.name,
    designationAndCompanyName: "",
    feedback: "",
  });

  const feedbackData = (e) => {
    if (e.target.name === "Designation") {
      setFeedback({ ...feedback, designationAndCompanyName: e.target.value });
    } else if (e.target.name === "Feedback") {
      setFeedback({ ...feedback, feedback: e.target.value });
    }
  };

  const submitFeedback = (e) => {
    const designationInput = document.querySelector(".designation");
    const feedbackInput = document.querySelector(".feedback");
    e.preventDefault();
    Axios.post("http://localhost:8000/sendClientFeedback", feedback)
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
    <div className="dashboardItemContainer addScroll col-md-12 my-4 p-5">
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
    </div>
  );
}
