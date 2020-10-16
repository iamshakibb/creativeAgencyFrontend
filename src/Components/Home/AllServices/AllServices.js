import axios from "axios";
import React, { useEffect, useState } from "react";
import { Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import NavBar from "../../Home/NavBar/NavBar";

export default function AllServices() {
  const [services, setServices] = useState();
  useEffect(() => {
    axios.get("https://polar-dawn-10321.herokuapp.com/getServices").then((res) => {
      setServices(res.data);
    });
  }, []);
  return (
    <div>
      <NavBar />

      <Container>
        <Row>
          {!services ? (
            <div className="col-sm-12 text-center">
              <img src="https://s8.gifyu.com/images/Infinity-0.9s-211px.gif" alt="preloader" />
            </div>
          ) : (
            services.map((service) => (
              <div className="col-md-4 servicesItem text-center" key={service._id}>
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
      </Container>
    </div>
  );
}
