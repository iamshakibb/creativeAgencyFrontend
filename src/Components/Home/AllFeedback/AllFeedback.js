import Axios from "axios";
import React, { useEffect, useState } from "react";
import { Container, Row } from "react-bootstrap";
import NavBar from "../NavBar/NavBar";

export default function AllFeedback() {
  const [clientFeedbackData, setClientFeedbackData] = useState();
  useEffect(() => {
    Axios.get("https://polar-dawn-10321.herokuapp.com/getClientFeedback").then((res) => {
      setClientFeedbackData(res.data);
    });
  }, [clientFeedbackData]);
  return (
    <>
      <NavBar />
      <Container>
        <Row>
          {!clientFeedbackData ? null : clientFeedbackData.length === 0 ? (
            <div className="col-sm-12 text-center">
              <img src="https://s8.gifyu.com/images/Infinity-0.9s-211px.gif" alt="preloader" />
            </div>
          ) : (
            clientFeedbackData.map((data) => (
              <div key={data._id} className="col-lg-4 col-md-6 clientFeedback mb-4">
                <div className="clientFeedBackContainer p-3" style={{ height: "200px" }}>
                  <Row>
                    <div className="col-sm-12">
                      <Row className="align-items-center justify-content-center">
                        <div className="col-sm-4 clientImg">
                          <img style={{ borderRadius: "50%" }} src={data.img} alt="customer-3" />
                        </div>
                        <div className="col-sm-8 clientInfo text-left">
                          <h5>{data.name}</h5>
                          <h6>{data.designationAndCompanyName}</h6>
                        </div>
                      </Row>
                    </div>
                    <div className="col-sm-12 mt-2">
                      <p>{data.feedback}</p>
                    </div>
                  </Row>
                </div>
              </div>
            ))
          )}
        </Row>
      </Container>
    </>
  );
}
