import React from "react";
import { Form, Row } from "react-bootstrap";

export default function MobileAllServerList({ serviceListData, update }) {
  return (
    <>
      <div>
        {serviceListData.length === 0 ? (
          <div className="col-sm-12 text-center">
            <img src="https://s8.gifyu.com/images/Infinity-0.9s-211px.gif" alt="preloader" />
          </div>
        ) : (
          serviceListData.map((data) => (
            <div key={data._id} className="dashboardContainer services p-2" style={{ fontSize: "0.8em", backgroundColor: "#fff", borderRadius: "15px" }}>
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
            </div>
          ))
        )}
      </div>
    </>
  );
}
