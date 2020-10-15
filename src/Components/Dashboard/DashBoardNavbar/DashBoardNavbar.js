import React from "react";
import { Container, Row } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import "./DashBoardNavabar.css";

export default function DashBoardNavbar({ userInfo, setUserInfo }) {
  const location = window.location;
  const pathname = location.pathname.slice(11);
  const history = useHistory();

  const goTOHome = () => {
    const path = "/home";
    history.push(path);
  };

  return (
    <div style={{ backgroundColor: "#fff" }}>
      <Container>
        <nav className="pt-3">
          <Row className="align-items-center justify-content-center">
            <p onClick={goTOHome} className="logo navlogo">
              <img src="https://i.ibb.co/t445Mcy/logo.png" alt="LOGO" />
            </p>
            <div className="sectionName d-flex align-items-center">
              <h5 style={{ fontSize: "0.9em" }}>{pathname}</h5>
            </div>
            <div className="userName d-flex align-items-center justify-content-end">
              <h5 style={{ fontSize: "0.9em" }}>{userInfo.name}</h5>
            </div>
          </Row>
        </nav>
      </Container>
    </div>
  );
}
