import Axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { Row } from "react-bootstrap";
import { UserInfoContent } from "../../../App";
import DashboardSlider from "../DashboardSlider/DashboardSlider";
import DashboardStatus from "../DashbordPageStatus/DashboardStatus";

export default function ServiceList() {
  const user = useContext(UserInfoContent);
  const { userInfo } = user;
  const [serviceListData, setServiceListData] = useState([]);
  const email = userInfo.email;
  useEffect(() => {
    Axios.get(`https://polar-dawn-10321.herokuapp.com/getSingleUserOrder?email=` + email).then((res) => {
      setServiceListData(res.data);
    });
  }, []);
  return (
    <>
      <div>
        <Row>
          <div className="col-md-4 col-sm-5 col-lg-3 pr-0">
            <DashboardSlider />
          </div>
          <div className="col-md-8 col-sm-7 col-lg-9 p-0">
            <DashboardStatus pageName={{ name: "Order" }} />
            <div className="dashboardItemContainer col-md-12 p-5" style={{ height: "90vh", overflowY: "scroll" }}>
              <Row className="align-items-center justify-content-center">
                {serviceListData.length === 0 ? (
                  <div className="col-sm-12 text-center">
                    <img src="https://s8.gifyu.com/images/Infinity-0.9s-211px.gif" alt="preloader" />
                  </div>
                ) : (
                  serviceListData.map((data) => (
                    <div className="col-lg-5 p-3 mx-2 mb-3" key={data._id} style={{ backgroundColor: "#fff", borderRadius: "10px" }}>
                      <Row className="align-items-center justify-content-center">
                        <div className="col-md-4 col-4">
                          <img style={{ width: "70px" }} src={`data:image/png;base64,${data.img}`} alt={`${data.serviceName}`} />
                        </div>
                        <div className="col-md-8 col-8 d-flex justify-content-end align-items-center">
                          <p
                            style={
                              data.ispending === true
                                ? { backgroundColor: "#FFE3E3", color: "#FF4545", borderRadius: "15px" }
                                : { backgroundColor: "#C6FFE0", color: "#009444", borderRadius: "15px" }
                            }
                            className="p-3"
                          >
                            {data.ispending === true ? <span>pending</span> : <span>Done</span>}
                          </p>
                        </div>
                        <div className="col-md-12 mt-3">
                          <h4>web Design</h4>
                        </div>
                        <div className="col-md-12 mt-1">
                          <p>We craft stunning and amazing web UI, using a well drrafted UX to fit your product.</p>
                        </div>
                      </Row>
                    </div>
                  ))
                )}
              </Row>
            </div>
          </div>
        </Row>
      </div>
    </>
  );
}
