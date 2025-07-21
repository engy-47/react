import React from 'react';
import './MyboxRange.css';
import { Button } from 'react-bootstrap';
import { BsHeart, BsArrowRight } from 'react-icons/bs';
import Navbar from './Nav';
import { useCart } from '../Home/CartContext';

import box1 from '../../assets/pepperoni-pizza-table.jpg';
import box2 from '../../assets/pizza-pepperoni-table.jpg';
import box3 from '../../assets/side-view-pizza-with-chopped-pepper-board-cookware.jpg';
import box4 from '../../assets/top-view-sausage-pizza-with-tomato-red-bell-pepper-cheese-top-view.jpg';

const products = [
  {
    name: "My Box Original",
    desc: "1 Square Pizza + 2 Sides",
    price: 37.00,
    oldPrice: 55.00,
    image: box1,
  },
  {
    name: "My Box Pro",
    desc: "1 Square Pizza + Pasta + 1 Side",
    price: 42.00,
    oldPrice: 56.50,
    image: box2,
  },
  {
    name: "My Melts Box",
    desc: "1 Melts + 2 sides",
    price: 36.00,
    oldPrice: 48.00,
    image: box3,
  },
  {
    name: "My Pasta Box",
    desc: "Chicken or Veggie Pasta + 2 Sides",
    price: 39.00,
    oldPrice: 50.00,
    image: box4,
  }
];

const MyBoxPage = () => {
  const { addToCart, removeFromCart, cartItems } = useCart();

  const getQuantity = (productName) => {
    const item = cartItems.find((i) => i.name === productName);
    return item ? item.quantity : 0;
  };

  const totalPrice = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (
    <div>
      <Navbar />

      <div className="container-fluid py-4 px-md-5">
        <h3 className="fw-bold mb-2">Special Offer</h3>
        <hr className="border-danger border-2 opacity-100 w-25 mb-4" />

        <div className="row gx-4 gy-4">
          <div className="col-lg-9">
            <div className="row gy-4">
              {products.map((item, idx) => {
                const quantity = getQuantity(item.name);
                return (
                  <div className="col-md-6" key={idx}>
                    <div className="box-card shadow-sm rounded-4 bg-white p-3 position-relative">
                      <BsHeart className="position-absolute top-0 end-0 m-3 fs-5 text-dark" />
                      <h5 className="fw-bold">{item.name}</h5>
                      <p className="text-muted small mb-2">{item.desc}</p>
                      <div className="text-center">
                        <img
                          src={item.image}
                          alt={item.name}
                          className="img-fluid my-box-img"
                          style={{ maxHeight: '200px', objectFit: 'cover' }}
                        />
                      </div>
                      <div className="d-flex justify-content-between align-items-center mt-3">
                        <Button variant="light" className="btn-sm fw-bold border">
                          Customize <BsArrowRight className="ms-1" />
                        </Button>
                        <div>
                          <span className="text-muted text-decoration-line-through me-2 small">{item.oldPrice} AED</span>
                          <span className="fw-bold">{item.price.toFixed(2)} AED</span>
                        </div>
                      </div>
                      {quantity === 0 ? (
                        <Button
                          variant="outline-danger"
                          className="w-100 mt-3 rounded-3 fw-semibold"
                          onClick={() => addToCart(item)}
                        >
                          + Add
                        </Button>
                      ) : (
                        <div className="d-flex justify-content-between align-items-center mt-3">
                          <Button variant="outline-danger" onClick={() => removeFromCart(item)}>
                            ➖
                          </Button>
                          <span>{quantity}</span>
                          <Button variant="outline-success" onClick={() => addToCart(item)}>
                            ➕
                          </Button>
                        </div>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="col-lg-3">
            <div className="cart-box p-4 rounded-4 shadow-sm bg-white">
              {cartItems.length === 0 ? (
                <>
                  <img
                    src="https://cdn-icons-png.flaticon.com/512/891/891462.png"
                    alt="Empty Cart"
                    className="img-fluid mb-3"
                    style={{ maxHeight: '120px' }}
                  />
                  <h6 className="fw-bold">Your Cart is Empty</h6>
                  <p className="text-muted small">Please add some items from the menu.</p>
                </>
              ) : (
                <>
                  <h6 className="fw-bold mb-3">Your Cart</h6>
                  <ul className="list-group mb-3">
                    {cartItems.map((item, idx) => (
                      <li className="list-group-item d-flex justify-content-between align-items-center" key={idx}>
                        <span>{item.name}</span>
                        <span>{item.quantity} x {item.price} AED</span>
                      </li>
                    ))}
                  </ul>
                  <h6>Total: <strong>{totalPrice.toFixed(2)} AED</strong></h6>
                  <Button variant="success" className="w-100 mt-3">Checkout</Button>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyBoxPage;
