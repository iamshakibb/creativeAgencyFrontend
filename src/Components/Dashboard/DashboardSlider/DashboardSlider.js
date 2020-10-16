import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faComment, faHdd, faPlus, faShoppingCart, faUserPlus } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import "./DashboardSlider.css";
import Axios from "axios";
import { Row } from "react-bootstrap";
import { useContext } from "react";
import { UserInfoContent } from "../../../App";

export default function DashboardSlider() {
  const user = useContext(UserInfoContent);
  const { userInfo } = user;
  const [isAdminHere, setIsAdminHere] = useState();
  const email = userInfo.email;
  useEffect(() => {
    Axios.get(`https://polar-dawn-10321.herokuapp.com/getAdminInfo?email=` + email).then((res) => {
      const adminData = res.data;
      setIsAdminHere({ adminData });
    });
  }, []);
  return (
    <div style={{ height: "100vh", backgroundColor: "#fff", marginTop: "-16px" }} className="slider">
      <div className="col-md-12 pl-5 mt-3 sliderContainer">
        <Row>
          <div className=" col-md-12 ml-2 mt-4 ">
            <Link to="/">
              <img style={{ width: "120px" }} src="https://i.ibb.co/t445Mcy/logo.png" alt="LOGO" />
            </Link>
          </div>
          <div className="col-md-12 sliderMenuContainer my-5">
            <ul className="my-5">
              {!isAdminHere ? null : isAdminHere.adminData.length !== 0 ? (
                <>
                  <li className="my-4 col-sm-12 col-5 p-1 sliderMenu">
                    <Link to="/allServiceList">
                      <FontAwesomeIcon icon={faHdd} className="mr-3" />
                      All Services
                    </Link>
                  </li>
                  <li className="my-4 col-sm-12 col-5 p-1 sliderMenu">
                    <Link to="/addService">
                      <FontAwesomeIcon icon={faPlus} className="mr-3" />
                      Add Services
                    </Link>
                  </li>
                  <li className="my-4 col-sm-12 col-5 p-1 sliderMenu">
                    <Link to="/makeAdmin">
                      <FontAwesomeIcon icon={faUserPlus} className="mr-3" />
                      Make Admin
                    </Link>
                  </li>
                  <li className="my-4 col-sm-12 col-5 p-1 sliderMenu">
                    <Link to="/serviceList">
                      <FontAwesomeIcon icon={faHdd} className="mr-3" />
                      Service List
                    </Link>
                  </li>
                  <li className="my-4 col-sm-12 col-5 p-1 sliderMenu">
                    <Link to="/order">
                      <FontAwesomeIcon icon={faShoppingCart} className="mr-3" />
                      Order
                    </Link>
                  </li>
                </>
              ) : (
                <>
                  <li className="my-4 col-sm-12 col-5 p-1 sliderMenu">
                    <Link to="/order">
                      <FontAwesomeIcon icon={faShoppingCart} className="mr-3" />
                      Order
                    </Link>
                  </li>
                  <li className="my-4 col-sm-12 col-5 p-1 sliderMenu">
                    <Link to="/serviceList">
                      <FontAwesomeIcon icon={faHdd} className="mr-3" />
                      Service List
                    </Link>
                  </li>
                  <li className="my-4 col-sm-12 col-5 p-1 sliderMenu">
                    <Link to="/feedback">
                      <FontAwesomeIcon icon={faComment} className="mr-3" />
                      Feedback
                    </Link>
                  </li>
                </>
              )}
            </ul>
          </div>
        </Row>
      </div>
    </div>
  );
}
