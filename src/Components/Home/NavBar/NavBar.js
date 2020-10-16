import React, { useContext } from "react";
import { Navbar, Container, Nav, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { Link as Goto } from "react-scroll";
import { UserInfoContent } from "../../../App";
import "./NavBar.css";

export default function NavBar() {
  const user = useContext(UserInfoContent);
  const { userInfo, setUserInfo } = user;

  const logOut = () => {
    setUserInfo({
      email: "",
      img: "",
      name: "",
    });
  };
  return (
    <Container>
      <Navbar expand="md" className="navBar">
        <Link to="/" className="logo">
          <img src="https://i.ibb.co/t445Mcy/logo.png" alt="LOGO" />
        </Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto navMenu d-flex align-items-center justify-content-center">
            <Link to="/" className="mr-4 navMenuList">
              Home
            </Link>
            <Goto to="workBackground" className="mr-4 navMenuList" smooth={true} duration={1000}>
              Our Portfolio
            </Goto>
            <Link to="/ourTeam" className="mr-4 navMenuList">
              Our Team
            </Link>
            <Goto to="FooterSection" smooth={true} duration={1000} className="mr-4 navMenuList">
              Contact Us
            </Goto>
            {userInfo.email.length > 0 ? (
              <Button onClick={logOut} style={{ cursor: "pointer" }} className="commonBtn mr-3">
                Log Out
              </Button>
            ) : (
              <Link to="/order">
                <Button className="loginBtn commonBtn mr-3">Login</Button>
              </Link>
            )}
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </Container>
  );
}
