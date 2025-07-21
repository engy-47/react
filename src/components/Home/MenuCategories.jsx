import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './home.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

import img1 from '../../assets/pepperoni-pizza-table.jpg';
import img2 from '../../assets/pizza-pepperoni-table.jpg';
import img3 from '../../assets/side-view-pizza-with-chopped-pepper-board-cookware.jpg';
import img4 from '../../assets/mixed-pizza-with-various-ingridients.jpg';
import img5 from '../../assets/mixed-pizza-with-various-ingridients.jpg';
import img6 from '../../assets/pepperoni-pizza-table.jpg';

const categories = [
  { title: 'My Box Range', image: img1, path: '/my-box' },
  { title: 'Special Offers', image: img2, path: '/special-offers' },
  { title: 'For Sharing', image: img3, path: '/for-sharing' },
  { title: 'For One', image: img4, path: '/for-one' },
  { title: 'Pizza', image: img5, path: '/pizza' },
  { title: 'Starters', image: img6, path: '/starters' },
];

export default function MenuCategories() {
  const navigate = useNavigate();

  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  return (
    <section className="container my-5">
      <div className="d-flex justify-content-between align-items-center mb-3">
        <h5 className="fw-bold">Explore Menu 🍕</h5>
        <a
          onClick={() => navigate('/my-box')}
          style={{ cursor: 'pointer' }}
          className="text-decoration-none"
        >
          View All
        </a>
      </div>

      <div className="d-flex gap-4 overflow-auto">
        {categories.map((cat, idx) => (
          <div
            key={idx}
            className="text-center menu-category-item"
            onClick={() => navigate(cat.path)}
            data-aos="fade-up"
            data-aos-delay={idx * 100}
          >
            <img src={cat.image} alt={cat.title} className="menu-category-img" />
            <p className="menu-category-title">{cat.title}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

