import React from "react";
import { useNavigate } from "react-router-dom";
import "./home.css";

import Img1 from "../../assets/mixed-pizza-with-various-ingridients (1).jpg";
import Img2 from "../../assets/pepperoni-pizza-table.jpg";

const heroItems = [
  {
    id: 1,
    title: "Hut Rewards",
    subtitle: "Join Now and Get",
    highlight: "500 BONUS POINTS",
    button: "Join Rewards",
    image: Img1,
    bgColor: "#cc0000",
    path: "/hut-favorite",
  },
  {
    id: 2,
    title: "BOGO Tuesday",
    subtitle: "Buy One Get One",
    highlight: "FREE",
    button: "Order Now",
    image: Img2,
    bgColor: "#b30000",
    path: "/hut-favorite",
  },
];

export default function Slide() {
  const navigate = useNavigate();

  return (
    <section className="hero-slider-list-section container py-4">
      <div className="scroll-row">
        {heroItems.map((item) => (
          <div
            key={item.id}
            className="hero-card"
            style={{ backgroundColor: item.bgColor }}
          >
            <img
              src={item.image}
              alt={item.title}
              className="hero-image"
              onClick={() => navigate(item.path)}
              style={{ cursor: "pointer" }}
            />
            <div className="hero-content">
              <h3>{item.title}</h3>
              <p>{item.subtitle}</p>
              <h2>{item.highlight}</h2>
              <button>{item.button}</button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
