import React from "react";
import { Navbar, Nav, Container, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./home.css";
import logo from '../../assets/Pizza_Hut_international_logo_2014.svg.webp'

export default function NavbarComponent() {
  const navigate = useNavigate();

  const goToLogin = () => {
    navigate("/login");
  };

  const goToCart = () => {
    navigate("/cart");
  };

  return (
  <Navbar expand="lg" className="py-3 navbar-custom fixed-top">
      <Container fluid>
        <Navbar.Brand href="#">
          <img
            src={logo}
            alt="Pizza Hut"
            className="logo"
            style={{ height: "60px" }}
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbar-nav" />
        <Navbar.Collapse id="navbar-nav">
          <Nav className="me-auto align-items-center gap-2">
            <Button variant="light" className="nav-btn active">
              <i className="bi bi-truck"></i> Delivery
            </Button>
            <Button variant="light" className="nav-btn">Pickup</Button>
            <Button variant="light" className="nav-btn">Curbside</Button>
            <Button variant="light" className="nav-btn">Dine-In</Button>
          </Nav>
          <Nav className="ms-auto align-items-center gap-3">
            <div className="select-location">
              <i className="bi bi-house-door"></i> Select Location
            </div>
            <i
              className="bi bi-cart"
              style={{ fontSize: "1.5rem", cursor: "pointer" }}
              onClick={goToCart}
            ></i>
            <Button variant="outline-secondary">عربي</Button>
            <Button variant="danger" className="login-btn" onClick={goToLogin}>
              LOGIN
            </Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}


