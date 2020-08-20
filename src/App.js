/* eslint-disable complexity */
import React, { useState, useEffect } from "react";
import { Switch, Route, useHistory } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import axios from "axios";
import NavBar from "./NavBar";
import Login from "./Login";
// import CreateUsername from "./CreateUsername";
// import Home from "./Home";

const App = () => {
  const [auth, setAuth] = useState({});
  const [user, setUser] = useState({});
  const [error, setError] = useState("");
  const history = useHistory();

  console.log(user);

  useEffect(() => {
    setAuth(window.localStorage.getItem("token"));
  }, []);

  const logout = () => {
    window.localStorage.removeItem("token");
    window.localStorage.removeItem("email");
    window.localStorage.removeItem("userId");
    history.push("/login");
  };

  const updateAccount = async (user) => {
    try {
      const updated = (await axios.put(`/api/users/${user.id}`, user)).data;
      setAuth(updated);
      setError("");
    } catch (ex) {
      setError(ex.response.data.message);
    }
  };

  if (!auth) {
    return (
      <Container fluid="md">
        <Row className="h-100">
          <Col sm={12} className="my-auto">
            <Login />
          </Col>
        </Row>
      </Container>
    );
  } else {
    return (
      <>
        <NavBar logout={logout} user={user} setUser={setUser} />
      </>
    );
  }
};

export default App;
