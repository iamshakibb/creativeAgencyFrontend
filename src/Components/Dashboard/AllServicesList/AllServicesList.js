import Axios from "axios";
import React, { useState } from "react";
import { useEffect } from "react";
import { Form, Row } from "react-bootstrap";
import "./AllServicesList.css";

export default function AllServicesList() {
  const [serviceListData, setServiceListData] = useState([]);
  useEffect(() => {
    Axios.get("http://localhost:8000/getOrder").then((res) => {
      setServiceListData(res.data);
    });
  }, [serviceListData]);

  let statusInfo = false;
  const update = (id, status) => {
    if (status === false) {
      statusInfo = true;
    } else if (status === true) {
      statusInfo = false;
    }
    const allInfo = { statusInfo };
    Axios.patch(`http://localhost:8000/editStatus/${id}`, allInfo);
  };
  return (
    <div className="dashboardItemContainer addScroll col-md-12 my-4 p-5">
      <div className="desktop">
        <Row className="servicesHeading p-2  text-center" style={{ backgroundColor: "#FFF", borderRadius: "10px" }}>
          <div className="col-md-2">
            <p>Name</p>
          </div>
          <div className="col-md-3">
            <p>Email</p>
          </div>
          <div className="col-md-2">
            <p>Service</p>
          </div>
          <div className="col-md-3">
            <p>Project Details</p>
          </div>
          <div className="col-md-2">
            <p>Status</p>
          </div>
        </Row>
        {serviceListData.length === 0 ? (
          <div className="col-sm-12 text-center">
            <img src="https://s8.gifyu.com/images/Infinity-0.9s-211px.gif" alt="preloader" />
          </div>
        ) : (
          serviceListData.map((data) => (
            <Row key={data._id} className="p-2 my-2 text-center" style={{ fontSize: "0.89em" }}>
              <div className="col-md-2">
                <p>{data.name}</p>
              </div>
              <div className="col-md-3">
                <p>{data.email}</p>
              </div>
              <div className="col-md-2">
                <p>{data.serviceName}</p>
              </div>
              <div className="col-md-3">
                <p>{data.projectDetail}</p>
              </div>
              <div className="col-md-2">
                <Form>
                  <Form.Group controlId="exampleForm.ControlSelect1">
                    {data.ispending ? (
                      <select
                        id="exampleForm.ControlSelect1"
                        className="form-control form-control-sm"
                        onChange={() => update(data._id, data.ispending)}
                        style={{ backgroundColor: "#ffe3e3", color: "#FF4545" }}
                        value={"Pending"}
                      >
                        <option value="Pending" style={{ backgroundColor: "#fff", color: "#000" }}>
                          Pending
                        </option>
                        <option style={{ backgroundColor: "#fff", color: "#000" }}>Done</option>
                      </select>
                    ) : (
                      <select
                        id="exampleForm.ControlSelect1"
                        className="form-control form-control-sm"
                        onChange={() => update(data._id, data.ispending)}
                        style={{ backgroundColor: "#c6ffe0", color: "#009444" }}
                        value={"Done"}
                      >
                        <option value="Done" style={{ backgroundColor: "#fff", color: "#000" }}>
                          Done
                        </option>
                        <option value style={{ backgroundColor: "#fff", color: "#000" }}>
                          Pending
                        </option>
                      </select>
                    )}
                  </Form.Group>
                </Form>
              </div>
            </Row>
          ))
        )}
      </div>
      <div className="mobile">
        {serviceListData.length === 0 ? (
          <div className="col-sm-12 text-center">
            <img src="https://s8.gifyu.com/images/Infinity-0.9s-211px.gif" alt="preloader" />
          </div>
        ) : (
          serviceListData.map((data) => (
            <div key={data._id} className="services p-2 my-3" style={{ fontSize: "0.8em", backgroundColor: "#fff", borderRadius: "15px" }}>
              <Row className="text-center align-items-center justify-content-center">
                <div className="col-4">
                  <p>Name</p>
                </div>
                <div className="col-8">
                  <p>Shakib</p>
                </div>
                <div className="col-4">
                  <p>Email</p>
                </div>
                <div className="col-8">
                  <p>Shihabunshakib9346@gmail.com</p>
                </div>
                <div className="col-4">
                  <p>Service</p>
                </div>
                <div className="col-8">
                  <p>Web Design</p>
                </div>
                <div className="col-4">
                  <p>Product detail</p>
                </div>
                <div className="col-8">
                  <p>hello hello hello hello hello hello hello hello hello hello hello</p>
                </div>
                <div className="col-4">
                  <p>Status</p>
                </div>
                <div className="col-8">
                  <Form>
                    <Form.Group controlId="exampleForm.ControlSelect1">
                      {data.ispending ? (
                        <select
                          id="exampleForm.ControlSelect1"
                          className="form-control form-control-sm"
                          onChange={() => update(data._id, data.ispending)}
                          style={{ backgroundColor: "salmon" }}
                          value={"Pending"}
                        >
                          <option value="Pending" style={{ backgroundColor: "#fff" }}>
                            Pending
                          </option>
                          <option style={{ backgroundColor: "#fff" }}>Done</option>
                        </select>
                      ) : (
                        <select
                          id="exampleForm.ControlSelect1"
                          className="form-control form-control-sm"
                          onChange={() => update(data._id, data.ispending)}
                          style={{ backgroundColor: "#7ab259" }}
                          value={"Done"}
                        >
                          <option value="Done" style={{ backgroundColor: "#fff" }}>
                            Done
                          </option>
                          <option value style={{ backgroundColor: "#fff" }}>
                            Pending
                          </option>
                        </select>
                      )}
                    </Form.Group>
                  </Form>
                </div>
              </Row>
            </div>
          ))
        )}
      </div>
    </div>
  );
}
