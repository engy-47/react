import React from 'react';
import { useCart } from './CartContext';
import './cart.css';

const CartPage = () => {
  const { cartItems, increaseQuantity, decreaseQuantity } = useCart();

  const totalPrice = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <div className="cart-container container mt-5">
      <h2 className="text-center text-danger mb-4">🛒 Shopping Cart</h2>

      {cartItems.length === 0 ? (
        <p className="text-center text-muted">Your cart is currently empty.</p>
      ) : (
        <>
          <ul className="list-group cart-list">
            {cartItems.map((item, index) => (
              <li
                key={index}
                className="list-group-item d-flex justify-content-between align-items-center cart-item"
              >
                <div className="cart-item-info">
                  <strong>{item.name}</strong>
                  <div className="text-muted small">
                    {item.price} EGP × {item.quantity} ={" "}
                    {(item.price * item.quantity).toFixed(2)} EGP
                  </div>
                </div>
                <div className="cart-buttons">
                  <button
                    className="btn btn-sm btn-outline-danger"
                    onClick={() => decreaseQuantity(item.name)}
                  >
                    −
                  </button>
                  <span className="mx-2">{item.quantity}</span>
                  <button
                    className="btn btn-sm btn-outline-success"
                    onClick={() => increaseQuantity(item.name)}
                  >
                    +
                  </button>
                </div>
              </li>
            ))}
          </ul>

          <div className="total-price-box mt-4 p-3 text-end bg-light rounded shadow-sm">
            <h5>
              Total:{" "}
              <span className="text-success">
                {totalPrice.toFixed(2)} EGP
              </span>
            </h5>
            <small className="text-muted">Including VAT and taxes</small>
          </div>
        </>
      )}
    </div>
  );
};

export default CartPage;
