import React from 'react';
import { Modal, Button } from 'react-bootstrap';
import './home.css';

export default function ProductModal({ show, onHide, product }) {
  if (!product) return null;

  return (
    <Modal show={show} onHide={onHide} size="lg" centered className="product-modal">
      <Modal.Body className="d-flex flex-lg-row flex-column p-0">
        <div className="p-4 flex-grow-1 border-end">
          <h4 className="fw-bold">{product.name}</h4>
          <p className="text-muted mb-3">Choose any 5 salads</p>
          <div className="salad-options-list">
            {product.options?.map((item, i) => (
              <div className="d-flex justify-content-between align-items-center mb-3" key={i}>
                <div className="d-flex align-items-center">
                  <img src={item.image} alt="" className="option-img" />
                  <div className="ms-2">
                    <h6 className="mb-0">{item.name}</h6>
                    <small className="badge bg-warning text-dark">DEFAULT</small>
                  </div>
                </div>
                <div className="d-flex align-items-center">
                  <Button variant="outline-danger" size="sm" className="me-2">🗑️</Button>
                  <span>1</span>
                  <Button variant="outline-danger" size="sm" className="ms-2">+</Button>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="summary-section p-4 text-center">
          <img src={product.image} className="img-fluid rounded mb-3" alt={product.name} />
          <h5 className="fw-bold">{product.name}</h5>
          <p className="text-muted">Customize 5 items from 10 different salads.</p>
          <div className="price-box bg-light p-3 rounded">
            <h6 className="fw-bold mb-2 text-danger">{product.price} AED</h6>
            <Button variant="danger" className="w-100">Add to cart</Button>
          </div>
        </div>
      </Modal.Body>
    </Modal>
  );
}
