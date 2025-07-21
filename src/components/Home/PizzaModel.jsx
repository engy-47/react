import React from 'react';
import { Modal, Button } from 'react-bootstrap';
import './pizzamodel.css'; 

export default function PizzaModal({ show, onHide, product }) {
  if (!product) return null;

  return (
    <Modal show={show} onHide={onHide} size="lg" centered className="pizza-modal">
      <Modal.Body className="d-flex flex-lg-row flex-column p-0">
        <div className="p-4 flex-grow-1 border-end">
          <h4 className="fw-bold">{product.name}</h4>
          <div className="my-4">
            <h6 className="fw-bold mb-3">Choose Size</h6>
            <div className="d-flex gap-3">
              <div className="pizza-size-box">Small<br /><small>(Not Available)</small></div>
              <div className="pizza-size-box selected">Medium<br /><small>(Serves 2)</small></div>
              <div className="pizza-size-box">Large<br /><small>(Serves 3)</small></div>
            </div>
          </div>

          <div className="my-4">
            <h6 className="fw-bold mb-3">Choose Crust</h6>
            <div className="crust-list">
              {product.crusts?.map((item, i) => (
                <div className="d-flex justify-content-between align-items-center mb-3" key={i}>
                  <div className="d-flex align-items-center">
                    <img src={item.image} alt="" className="option-img" />
                    <div className="ms-2">
                      <h6 className="mb-0">{item.name}</h6>
                      {item.default && <small className="badge bg-warning text-dark">DEFAULT</small>}
                    </div>
                  </div>
                  <span className="text-muted">{item.price} AED</span>
                </div>
              ))}
            </div>
          </div>

          <Button variant="outline-danger" className="mt-3">Reset Customization</Button>
        </div>
        <div className="summary-section p-4 text-center">
          <img src={product.image} className="img-fluid rounded mb-3" alt={product.name} />
          <h5 className="fw-bold">{product.name}</h5>
          <p className="text-muted">{product.description}</p>
          <div className="price-box bg-light p-3 rounded">
            <h6 className="fw-bold mb-2 text-danger">{product.price}</h6>
            <Button variant="danger" className="w-100">Add to cart</Button>
          </div>
        </div>
      </Modal.Body>
    </Modal>
  );
}
