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

const NavBar = ({ logout, user, setUser }) => {
  const getUser = async () => {
    const email = window.localStorage.getItem("email");
    const response = await axios.post("/api/users/getuser", { email });
    const temp = response.data;
    temp.location = location;
    setUser(temp);
  };

  // window.onunload = function () {
  //   logout();
  // };

  useEffect(() => {
    getUser();
  }, []);

  return (
    <>
      <Navbar bg="light" sticky="top" expand="md">
        <Navbar.Brand href="/#">
          {user.imageURL ? (
            <img
              className="rounded-circle"
              src={user.imageURL}
              width="40"
              height="40"
              alt=""
            />
          ) : (
            <img
              className="rounded-circle"
              src="../assets/avatar15.png"
              width="60"
              height="60"
              alt=""
            />
          )}
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="/#">Control Center</Nav.Link>
            <NavDropdown title="Brands" id="basic-nav-dropdown">
              <NavDropdown.Item href="/#/products">
                All Products
              </NavDropdown.Item>
              <NavDropdown.Item href="/#/products:PoloRalphLauren">
                Polo Ralph Lauren
              </NavDropdown.Item>
              <NavDropdown.Item href="/#/products:TommyHilfiger">
                Tommy Hilfiger
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#">Contact Us</Nav.Link>
          </Nav>
          {/* <>
              <div>
                Welcome&nbsp;
                <a className="mr-3" href="">
                  {auth.firstName}
                </a>
              </div>
                <Nav.Link variant="primary" onClick={logout}>
                  Logout
                </Nav.Link>
            </> */}
        </Navbar.Collapse>
      </Navbar>
    </>
  );
};

export default NavBar;
