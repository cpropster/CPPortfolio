import React, { useEffect } from "react";
import axios from "axios";
import {
  Navbar,
  Nav,
  NavDropdown,
  Form,
  FormControl,
  Button,
} from "react-bootstrap";

const NavBar = () => {
  // window.onunload = function () {
  //   logout();
  // };

  return (
    <>
      <Navbar
        className="fixed-top text-center"
        bg="transparent"
        sticky="top"
        expand="lg"
      >
        <Navbar.Brand href="/#">
          <img
            className="invert"
            src="../assets/img/CPlogo.png"
            width="40"
            height="40"
            alt=""
          />
        </Navbar.Brand>
        <Navbar.Toggle
          className="white-toggler"
          aria-controls="basic-navbar-nav"
        />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="abs-center-x">
            <Nav.Link href="/#">Portfolio</Nav.Link>
            <Nav.Link href="/#">Resume</Nav.Link>
            <Nav.Link href="/#">About</Nav.Link>
            <Nav.Link href="/#">Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
};

export default NavBar;
