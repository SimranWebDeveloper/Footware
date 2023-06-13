import React from "react";
import { Row, Col } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

const Header = () => {
  return (
    <header>
      <Container>
        <Row className="row">
          <Col lg={8} md={8} sm={6}  col={10}>
            <h1 className="text-muted fw-bold ">Footwear</h1>
          </Col>
          <Col lg={4} md={4} sm={4} col={12}>
            <form className="d-flex justify-content-between align-items-center rounded-pill border">
              <input
                type="text"
                className="form-control rounded-start-pill border-0 me-2"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
              />
              <button
                type="submit"
                className="searchIcon btn btn-primary border-0 rounded-circle"
              >
                <i className="fa-solid fa-magnifying-glass"></i>
              </button>
            </form>
          </Col>
            <Col sm={1} col={1}>
                <btn className="MenuBar"><i className="fa-solid fa-bars"></i></btn>
            </Col>
          <Col lg={12}  className="Menu">
            <div className=" d-flex justify-content-between " >
                <ul className="d-flex justify-content-between w-50 list-unstyled fs-6" >
                    <li>HOME</li>
                    <li>MEN</li>
                    <li>WOMEN</li>
                    <li>ABOUT</li>
                    <li>CONTACT</li>
                </ul>
                <div>
                    <button className="btn"><i className="fa-solid fa-cart-shopping"></i> CART (0)</button>
                </div>
            </div>
          </Col>
          
        </Row>
        <Row></Row>
      </Container>
    </header>
  );
};

export default Header;
