/* eslint-disable complexity */
import React, { useState, useEffect } from "react";
import { Switch, Route, useHistory } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import axios from "axios";
import NavBar from "./NavBar";
import Home from "./Home";
import LoadingScreen from "./LoadingScreen";
// import CreateUsername from "./CreateUsername";
// import Home from "./Home";

const App = () => {
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);
  const history = useHistory();

  useEffect(() => {
    setTimeout(() => setLoading(false), 4000);
  }, []);

  // if (loading) {
  //   return (
  //     <Container fluid="md">
  //       <Row className="h-100">
  //         <Col md={12} className="my-auto">
  //           <LoadingScreen />
  //         </Col>
  //       </Row>
  //     </Container>
  //   );
  // } else {
  return (
    <>
      <NavBar />
      <Home />
    </>
  );
  // }
};

export default App;
