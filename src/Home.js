import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";

const Home = () => {
  return (
    <>
      <div className="video-container d-flex">
        <video
          src="../assets/img/bgVid.mp4"
          width="100%"
          height="100%"
          autoPlay
          muted
          loop
        />
        <Container className="align-self-center mb-5 d-flex">
          <Row>
            <Col md={12} className="text-left">
              <h1 className="display-1 mt-auto">Javascript</h1>
              <h1 className="display-1 mt-auto">Developer</h1>
              <Button variant="outline-secondary" className="btn-xl">
                HIRE ME NOW
              </Button>{" "}
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default Home;
