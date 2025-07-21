import React, { useState, useEffect } from 'react';
import { Modal, Button } from 'react-bootstrap';
import { useCart } from '../Home/CartContext';
import './super.css';

export default function SupremeSaladModal({ show, onHide, product }) {
  const { addToCart, removeFromCart, cartItems } = useCart();
  const [quantity, setQuantity] = useState(1);
  const saladOptions = product?.options || [];

  useEffect(() => {
    const itemInCart = cartItems.find(item => item.name === product?.name);
    setQuantity(itemInCart ? itemInCart.quantity : 1);
  }, [cartItems, product]);

  const handleAdd = () => {
    addToCart(product);
  };

  const handleRemove = () => {
    removeFromCart(product);
  };

  return (
    <Modal show={show} onHide={onHide} size="lg" centered className="salad-modal">
      <Modal.Body className="d-flex flex-column flex-md-row p-4">
        {/* Salad options */}
        <div className="flex-fill pe-md-4 border-end salad-options">
          <h5 className="fw-bold mb-3">
            {product?.name === "Potato"
              ? "Choose your favorite potato styles"
              : product?.name === "Supreme Salad"
              ? "Choose any 5 salads"
              : "Customize your order"}
          </h5>
          <p className="text-muted">
            {product?.name === "Potato"
              ? "Customize your potato dish with sauces and styles."
              : "Customize 5 items from 10 different salads."}
          </p>

          <div className="salad-list">
            {saladOptions.map((item, index) => (
              <div className="d-flex align-items-center mb-3" key={index}>
                <img src={item.image} alt={item.name} className="option-img me-3" />
                <div className="flex-grow-1">
                  <div className="fw-semibold">{item.name}</div>
                  <span className="badge bg-warning text-dark">DEFAULT</span>
                </div>
                <div className="d-flex align-items-center">
                  <button className="btn btn-outline-danger btn-sm me-1">
                    <i className="bi bi-trash"></i>
                  </button>
                  <span className="mx-1">1</span>
                  <button className="btn btn-outline-danger btn-sm">+</button>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="flex-fill ps-md-4 mt-4 mt-md-0">
          <img src={product?.image} className="img-fluid rounded mb-3" alt={product?.name} />
          <h5 className="fw-bold">{product?.name}</h5>
          <p className="text-muted">Customize 5 items from 10 different salads.</p>

          <div className="d-flex justify-content-between align-items-center bg-light p-3 rounded">
            <div>
              <span className="badge bg-danger me-2">{quantity} ITEM{quantity > 1 ? 'S' : ''}</span>
              <strong className="text-dark">{(product?.price * quantity).toFixed(2)} AED</strong>
              <span className="text-muted d-block small">Inclusive Of Taxes</span>
            </div>
            <div className="d-flex">
              <Button variant="outline-danger" onClick={handleRemove} disabled={quantity <= 1}>
                <i className="bi bi-dash-lg"></i>
              </Button>
              <Button variant="danger" className="mx-2" onClick={handleAdd}>
                <i className="bi bi-plus-lg"></i> Add to cart
              </Button>
            </div>
          </div>
        </div>
      </Modal.Body>
    </Modal>
  );
}


