import React from 'react';
import './home.css';

export default function BestSellers({ items = [] }) {
  return (
    <section className="best-sellers-section container py-5">
      <h4 className="section-title fw-bold">
        Best sellers <span className="emoji">🌟</span>
      </h4>

      <div className="best-sellers-scroll">
        {items.length > 0 ? (
          items.map((item, index) => (
            <div
              className="best-seller-card"
              key={index}
              onClick={item.onClick}
              style={{ cursor: 'pointer' }}
            >
              <img src={item.image} alt={`Best seller ${index + 1}`} />
            </div>
          ))
        ) : (
          <p>No items available.</p>
        )}
      </div>
    </section>
  );
}
