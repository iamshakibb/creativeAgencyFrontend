import React from "react";
import { Navbar, Container, Nav, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { Link as Goto } from "react-scroll";
import "./NavBar.css";

export default function NavBar() {
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
            <Link to="/" className="mr-4 navMenuList">
              Our Team
            </Link>
            <Goto to="FooterSection" smooth={true} duration={1000} className="mr-4 navMenuList">
              Contact Us
            </Goto>
            <Link to="/dashboard/order/${service.title}">
              <Button className="loginBtn commonBtn mr-3">Login</Button>
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </Container>
  );
}
