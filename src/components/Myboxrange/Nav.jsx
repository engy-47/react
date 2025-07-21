import React from "react";
import logo from '../../assets/Pizza_Hut_international_logo_2014.svg.webp'
import {
  Navbar,
  Nav,
  Container,
  Button,
  Form,
  FormControl,
  InputGroup,
} from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Nav.css";
import { useCart } from '../Home/CartContext'; 

import img1 from '../../assets/mixed-pizza-with-various-ingridients.jpg';
import img2 from '../../assets/pizza-pepperoni-table.jpg';
import img3 from '../../assets/side-view-pizza-with-chopped-pepper-board-cookware.jpg';
import img4 from '../../assets/pizza-with-cheese-brown-wooden-surface-bright-surface.jpg';
import img5 from '../../assets/pizza-with-sausages-tomato-cheese-olives-pepper.jpg';
import img6 from '../../assets/pepperoni-pizza-table.jpg';

const menuItems = [
  { name: 'My Box Range', image: img1, path: '/my-box' },
  { name: 'Special Offers', image: img2, path: '/special-offers' },
  { name: 'For Sharing', image: img3, path: '/for-sharing' },
  { name: 'For One', image: img4, path: '/for-one' },
  { name: 'Pizza', image: img5, path: '/pizza' },
  { name: 'Starters', image: img6, path: '/starters' },
  { name: 'Hut Favorite', image: img1, path: '/hut-favorite' },
  { name: 'Hut Signatures', image: img2, path: '/hut-signatures' },
  { name: 'Drinks & Desserts', image: img3, path: '/drinks-desserts' },
  { name: 'Kids', image: img4, path: '/kids' },
  { name: 'My Favourite', image: img5, path: '/my-favourite' },
  { name: 'Dips & Seasoning', image: img6, path: '/dips-seasoning' },
  { name: 'Build Your Own', image: img1, path: '/build-your-own' },
];

export default function CustomNavbar() {
  const navigate = useNavigate();
  const { cartItems } = useCart();

  return (
    <div>
      <Navbar expand="lg" className="navbar-custom py-3">
        <Container fluid>
          <Navbar.Brand href="/">
            <img
              src={logo}
              alt="Pizza Hut"
              className="logo"
              style={{ height: "60px" }}
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbar-main" />
          <Navbar.Collapse id="navbar-main">
            <Nav className="me-auto gap-2 align-items-center">
              <Button variant="light" className="nav-btn active"><i className="bi bi-truck"></i> Delivery</Button>
              <Button variant="light" className="nav-btn">Pickup</Button>
              <Button variant="light" className="nav-btn">Curbside</Button>
              <Button variant="light" className="nav-btn">Dine-In</Button>
            </Nav>
            <Nav className="ms-auto gap-3 align-items-center">
              <div className="select-location"><i className="bi bi-house-door"></i> Select Location</div>
              <div
                className="cart-icon position-relative"
                onClick={() => navigate("/cart")}
                style={{ cursor: "pointer" }}
              >
                <i className="bi bi-cart fs-4"></i>
                <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                  {cartItems.length}
                </span>
              </div>

              <Button variant="outline-secondary">عربي</Button>
            <Button variant="danger" className="login-btn" onClick={() => navigate('/login')}>LOGIN</Button>

            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Navbar expand="lg" className="menu-navbar py-2 bg-light shadow-sm">
        <Container fluid className="flex-nowrap">
          <div className="scroll-container d-flex align-items-center">
            {menuItems.map((item, idx) => (
              <div
                key={idx}
                className="menu-item text-center"
                onClick={() => navigate(item.path)}
              >
                <img src={item.image} alt={item.name} className="menu-icon" />
                <div className="menu-name">{item.name}</div>
              </div>
            ))}
          </div>

          <Form className="search-form ms-3 d-none d-lg-block">
            <InputGroup>
              <FormControl type="search" placeholder="Search..." aria-label="Search" />
              <Button variant="light"><i className="bi bi-search"></i></Button>
            </InputGroup>
          </Form>
        </Container>
      </Navbar>
    </div>
  );
}



