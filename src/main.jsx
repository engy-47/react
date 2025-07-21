import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { CartProvider } from './components/Home/CartContext';
import { HashRouter } from 'react-router-dom';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <CartProvider>
      <HashRouter>
        <App />
      </HashRouter>
    </CartProvider>
  </React.StrictMode>
);

