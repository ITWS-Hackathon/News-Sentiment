import React from "react";
import styled from "styled-components";
import { Navbar as Nav, Form, Container, Row, Col } from "react-bootstrap";
import axios from "axios";

const StyledNav = styled(Nav)`
  display: flex;
  justify-content: center;
  align-items: center;

  & .navbar-brand,
  & .navbar-brand:hover {
    color: green;
  }

  & input {
    width: 20vw;
  }
`;

function Navbar() {
  const keys = ["word", "test", "something"];
  let search = (e) => {
    axios
      .post("http://localhost:3000/keywords", {
        keywords: keys,
      })
      .then((res) => {
        console.log(res);
      });
  };

  return (
    <StyledNav bg="light" exapnd="lg">
      <Container className="justify-content-space-around">
        <Form onSubmit={search}>
          <Form.Group className="mb-3" controlId="exampleForm.Keywords">
            <Container>
              <Row>
                <Col>
                  <Form.Label>Enter Keywords</Form.Label>
                </Col>
                <Col>
                  <Form.Control
                    type="text"
                    placeholder="Comma Separated List"
                  />
                </Col>
              </Row>
            </Container>
          </Form.Group>
        </Form>
      </Container>
      <StyledNav.Brand>News Scraper Data Analytics</StyledNav.Brand>
    </StyledNav>
  );
}

export default Navbar;
