import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faComment, faHdd, faPlus, faShoppingCart, faUserPlus } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import "./DashboardSlider.css";
import Axios from "axios";

export default function DashboardSlider({ userInfo, setUserInfo }) {
  const [isAdminHere, setIsAdminHere] = useState();
  const email = userInfo.email;
  useEffect(() => {
    Axios.get(`http://localhost:8000/getAdminInfo?email=` + email).then((res) => {
      const adminData = res.data;
      setIsAdminHere({ adminData });
    });
  }, []);
  return (
    <div className="col-md-3 px-2 my-5 py-5 sliderContainer" style={{ height: "75vh" }}>
      <ul>
        {!isAdminHere ? null : isAdminHere.adminData.length === 0 ? null : (
          <>
            <li className="my-4 p-1 sliderMenu">
              <Link to="/dashboard/allServicesList">
                <FontAwesomeIcon icon={faHdd} className="mr-3" />
                All Services
              </Link>
            </li>
            <li className="my-4 p-1 sliderMenu">
              <Link to="/dashboard/addService">
                <FontAwesomeIcon icon={faPlus} className="mr-3" />
                Add Services
              </Link>
            </li>
            <li className="my-4 p-1 sliderMenu">
              <Link to="/dashboard/makeAdmin">
                <FontAwesomeIcon icon={faUserPlus} className="mr-3" />
                Make Admin
              </Link>
            </li>
          </>
        )}
        <li className="my-4 p-1 sliderMenu">
          <Link to="/dashboard/order">
            <FontAwesomeIcon icon={faShoppingCart} className="mr-3" />
            Order
          </Link>
        </li>
        <li className="my-4 p-1 sliderMenu">
          <Link to="/dashboard/serviceList">
            <FontAwesomeIcon icon={faHdd} className="mr-3" />
            Service List
          </Link>
        </li>
        <li className="my-4 p-1 sliderMenu">
          <Link to="/dashboard/feedback">
            <FontAwesomeIcon icon={faComment} className="mr-3" />
            Feedback
          </Link>
        </li>
      </ul>
    </div>
  );
}
