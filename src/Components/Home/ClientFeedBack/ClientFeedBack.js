import Axios from "axios";
import React, { useEffect, useState } from "react";
import { Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./ClientFeedBack.css";

export default function ClientFeedBack() {
  const [clientFeedbackData, setClientFeedbackData] = useState();
  useEffect(() => {
    Axios.get("https://polar-dawn-10321.herokuapp.com/getClientFeedback").then((res) => {
      setClientFeedbackData(res.data);
    });
  }, [clientFeedbackData]);

  let sixFeedback;
  if (clientFeedbackData) {
    const newFeedback = clientFeedbackData.slice(0, 3);
    sixFeedback = newFeedback;
  }

  return (
    <Container>
      <Row className="pt-3 pb-5 mb-5">
        <div className="col-sm-12 my-5 py-1  text-center Heading">
          <h1>
            Clients <span>Feedback</span>
          </h1>
        </div>
        {!sixFeedback ? null : sixFeedback.length === 0 ? (
          <div className="col-sm-12 text-center">
            <img src="https://s8.gifyu.com/images/Infinity-0.9s-211px.gif" alt="preloader" />
          </div>
        ) : (
          sixFeedback.map((data) => (
            <div key={data._id} className="col-lg-4 col-md-6 clientFeedback mb-4">
              <div className="clientFeedBackContainer  p-3" style={{ height: "200px" }}>
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
        <div className="col-sm-12 my-4 text-right">
          <Link to="/allClientFeedback" className="seeAll">
            see all
          </Link>
        </div>
      </Row>
    </Container>
  );
}
