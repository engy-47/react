import React, { useState } from 'react';
import { useCart } from './CartContext';
import SupremeSaladModal from './SupremeSaladModal';
import { useNavigate } from 'react-router-dom';

export default function ProductSection({ title, products }) {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const { addToCart, removeFromCart, cartItems } = useCart();
  const navigate = useNavigate();

  const getQuantity = (productName) => {
    const item = cartItems.find(p => p.name === productName);
    return item ? item.quantity : 0;
  };

  const handleClick = (product) => {
    if (title === "Top Picks" || product.name === "Potato" || title === "For the Love of Pizza") {
      setSelectedProduct(product);
      setShowModal(true);
    } else {
      navigate('/choose-first', { state: { product } });
    }
  };

  return (
    <>
      <section className="product-section container py-5">
        <div className="product-scroll-container">
          {products.map((product, index) => {
            const quantity = getQuantity(product.name);

            return (
              <div className="product-card shadow-sm" key={index}>
                <div className="p-3">
                  <h6 className="fw-semibold mb-2">{product.name}</h6>
                  {product.description && (
                    <p className="product-desc">
                      {product.description.slice(0, 100)}...
                      <span className="more-btn">MORE ▼</span>
                    </p>
                  )}
                </div>

                <div
                  className="image-wrapper"
                  onClick={() => handleClick(product)}
                  style={{ cursor: 'pointer' }}
                >
                  <img src={product.image} alt={product.name} />
                  <button className="customize-btn">
                    Customize <i className="bi bi-arrow-right"></i>
                  </button>
                  <i className="bi bi-heart favorite-icon"></i>
                </div>

                <div className="d-flex justify-content-between align-items-center p-3">
                  <span className="price fw-bold">
                    {product.price * (quantity || 1)} AED
                    {quantity > 1 && <small className="text-muted ms-2">({quantity}x)</small>}
                  </span>

                  {quantity === 0 ? (
                    <button className="add-btn" onClick={() => addToCart(product)}>
                      + Add
                    </button>
                  ) : (
                    <div className="d-flex align-items-center gap-2">
                      <button
                        className="btn btn-outline-danger btn-sm"
                        onClick={() => removeFromCart(product)}
                      >
                        ➖
                      </button>
                      <span>{quantity}</span>
                      <button
                        className="btn btn-outline-success btn-sm"
                        onClick={() => addToCart(product)}
                      >
                        ➕
                      </button>
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </section>
      {selectedProduct && (
        <SupremeSaladModal
          show={showModal}
          onHide={() => setShowModal(false)}
          product={selectedProduct}
        />
      )}
    </>
  );
}





