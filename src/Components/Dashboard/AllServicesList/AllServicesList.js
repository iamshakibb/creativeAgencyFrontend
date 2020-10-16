import Axios from "axios";
import React, { useState } from "react";
import { useEffect } from "react";
import { Form, Row } from "react-bootstrap";
import DashboardSlider from "../DashboardSlider/DashboardSlider";
import DashboardStatus from "../DashbordPageStatus/DashboardStatus";
import MobileAllServerList from "../MobileAllServiceList/MobileAllServerList";
import "./AllServicesList.css";
export default function AllServicesList() {
  document.body.style.backgroundColor = "#e5e5e5";
  const [serviceListData, setServiceListData] = useState([]);
  useEffect(() => {
    Axios.get("https://polar-dawn-10321.herokuapp.com/getOrder").then((res) => {
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
    Axios.patch(`https://polar-dawn-10321.herokuapp.com/editStatus/${id}`, allInfo);
  };
  return (
    <>
      <div>
        <Row>
          <div className="col-md-3 col-sm-4 col-lg-3 pr-0">
            <DashboardSlider />
          </div>
          <div className="col-md-9 desktop col-sm-8 col-lg-9">
            <Row className="addServicesForm">
              <DashboardStatus pageName={{ name: "All Service List" }} />
              <div className="col-md-12 my-1 mr-5 dashboardContainer" style={{ backgroundColor: "#e5e5e5", height: "88vh", overflowY: "scroll" }}>
                <Row className="servicesHeading p-2 mt-2 text-center" style={{ backgroundColor: "#fff", borderRadius: "10px" }}>
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
            </Row>
          </div>
          <div className="mobile col-md-9 col-sm-8 col-lg-9 dashboardContainer">
            <MobileAllServerList update={update} serviceListData={serviceListData} />
          </div>
        </Row>
      </div>
    </>
  );
}
