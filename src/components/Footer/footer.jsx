import React from "react";
import "./footer.css";
import { Container, Row, Col } from "react-bootstrap";
import img from '../../assets/Pizza_Hut_international_logo_2014.svg.webp';

function Footer() {
  return (
    <footer className="footer py-4 mt-5">
      <Container>
      <div className="footer-logo-container">
  <img
    src={img}
    alt="Pizza Hut Logo"
    className="footer-logo"
  />
</div>

        <Row className="justify-content-center text-center text-md-start">
          <Col xs={12} md={2} className="mb-4 mb-md-0">
            <h6 className="footer-heading">MENU</h6>
            <ul className="list-unstyled">
              <li><a href="#">My Box Range</a></li>
              <li><a href="#">Special Offers</a></li>
              <li><a href="#">For Sharing</a></li>
              <li><a href="#">For One</a></li>
              <li><a href="#">Hut Favorites</a></li>
              <li><a href="#">Hut Signatures</a></li>
              <li><a href="#">Starters</a></li>
              <li><a href="#">Drinks and Desserts</a></li>
              <li><a href="#">Kids</a></li>
              <li><a href="#">Dips and Seasoning</a></li>
              <li><a href="#">Build Your Own</a></li>
            </ul>
          </Col>

          <Col xs={12} md={2} className="mb-4 mb-md-0">
            <h6 className="footer-heading">CUSTOMER SERVICE</h6>
            <ul className="list-unstyled">
              <li><a href="#">Contact Us</a></li>
              <li><a href="#">FAQs</a></li>
            </ul>
          </Col>

          <Col xs={12} md={2} className="mb-4 mb-md-0">
            <h6 className="footer-heading">MY ACCOUNT</h6>
            <ul className="list-unstyled">
              <li><a href="#">Sign In</a></li>
              <li><a href="#">Create Your Account</a></li>
              <li><a href="#">My Account</a></li>
            </ul>
          </Col>

          <Col xs={12} md={2} className="mb-4 mb-md-0">
            <h6 className="footer-heading">LEARN MORE</h6>
            <ul className="list-unstyled">
              <li><a href="#">Privacy Policy</a></li>
              <li><a href="#">Cookie Policy</a></li>
              <li><a href="#">Terms & Conditions</a></li>
            </ul>
          </Col>

          <Col xs={12} md={2} className="mb-4 mb-md-0">
            <h6 className="footer-heading">ABOUT US</h6>
            <ul className="list-unstyled">
              <li><a href="#">Store Locations</a></li>
              <li><a href="#">About Us</a></li>
            </ul>
          </Col>

          <Col xs={12} md={2}>
            <h6 className="footer-heading">FOLLOW US</h6>
            <div className="social-icons mb-2">
              <a href="#"><i className="bi bi-facebook"></i></a>
              <a href="#"><i className="bi bi-instagram"></i></a>
              <a href="#"><i className="bi bi-twitter"></i></a>
            </div>
            <div className="store-badges">
              <a href="#">
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
                  alt="Google Play"
                  className="store-img"
                />
              </a>
              <a href="#">
                <img
                  src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg"
                  alt="App Store"
                  className="store-img mt-2"
                />
              </a>
            </div>
          </Col>
        </Row>

        <Row className="mt-4">
          <Col xs={12} className="text-center">
            <p className="small text-muted">
              Crust availability, prices, participation, delivery areas and charges, and minimum purchase requirements for delivery may vary. Additional charge for extra cheese may apply.
            </p>
            <p className="small text-muted">
              PEPSI, PEPSI-COLA, PEPSI MAX and the Pepsi Globe are registered trademarks of PepsiCo, Inc. Twitter is a trademark of Twitter, Inc. All other trademarks are the property of their respective owners.
            </p>
            <p className="small text-muted">
              ©Pizza Hut, Inc. All rights reserved. The Pizza Hut name, logos and related marks are trademarks of Pizza Hut, Inc.
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;
