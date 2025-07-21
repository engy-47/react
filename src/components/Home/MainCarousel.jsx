import React from "react";
import { Carousel } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import img1 from "../../assets/slice-cut-from-classic-pepperoni-pizza-with-green-pepper-rolls.jpg";
import img2 from "../../assets/pizza-pepperoni-table.jpg";
import img3 from "../../assets/top-view-chicken-pizza-with-yellow-cherry-tomatoes-bell-pepper-board.jpg";
import img4 from "../../assets/top-view-sausage-pizza-with-tomato-red-bell-pepper-cheese-top-view.jpg";

export default function MainCarousel() {
  const navigate = useNavigate();

  const handleFirstSlideClick = () => {
   navigate("/my-box");
  };

  return (
    <Carousel fade className="main-carousel">
      <Carousel.Item interval={5000}>
        <img
          className="d-block w-100"
          src={img1}
          alt="First slide"
          style={{ cursor: "pointer" }}
          onClick={handleFirstSlideClick}
        />
      </Carousel.Item>

      <Carousel.Item interval={5000}>
        <img className="d-block w-100" src={img2} alt="Second slide" />
      </Carousel.Item>

      <Carousel.Item interval={5000}>
        <img className="d-block w-100" src={img3} alt="Third slide" />
      </Carousel.Item>

      <Carousel.Item interval={5000}>
        <img className="d-block w-100" src={img4} alt="Fourth slide" />
      </Carousel.Item>
    </Carousel>
  );
}






