import React, { useEffect, useState } from "react";
import { Container, Row } from "react-bootstrap";
import "./ServiceSection.css";
import axios from "axios";
import { Link } from "react-router-dom";

export default function ServiceSection() {
  const [services, setServices] = useState();
  useEffect(() => {
    axios.get("https://polar-dawn-10321.herokuapp.com/getServices").then((res) => setServices(res.data));
  }, []);
  let sixServices;
  if (services) {
    const newServices = services.slice(0, 6);
    sixServices = newServices;
  }
  return (
    <Container>
      <Row className="services my-5 align-items-center justify-content-center" id="services">
        <div className="col-sm-12 my-5 Heading text-center">
          <h1>
            Provide awesome <span>services</span>
          </h1>
        </div>
        <div className="col-sm-12 my-5 py-2">
          <Row>
            {!sixServices ? (
              <div className="col-sm-12 text-center">
                <img src="https://s8.gifyu.com/images/Infinity-0.9s-211px.gif" alt="preloader" />
              </div>
            ) : (
              sixServices.map((service) => (
                <div className="col-md-4 servicesItem text-center" key={service._id}>
                  {/* <Link to={{ pathname: `/order/${service.title}`, search: `?sort=${service.image.img}` }}> */}
                  <Link to={{ pathname: `/order/${service.title}`, search: `?sort=${service.image.img}` }}>
                    <Row className="my-3 align-items-center justify-content-center">
                      <div className="col-sm-12">
                        <img src={`data:image/png;base64,${service.image.img}`} alt={`${service.title}`} />
                      </div>
                      <div className="col-sm-12">
                        <h5>{service.title}</h5>
                      </div>
                      <div className="col-sm-10">
                        <p>{service.description}</p>
                      </div>
                    </Row>
                  </Link>
                </div>
              ))
            )}
          </Row>
          <div className="col-sm-12 my-5  d-flex align-items-center justify-content-end">
            <Link className="seeAll " to="/allServices">
              see all
            </Link>
          </div>
        </div>
      </Row>
    </Container>
  );
}
