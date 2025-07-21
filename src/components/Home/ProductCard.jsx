import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { useCart } from './CartContext';

export default function ProductCard({ product }) {
  const { addToCart } = useCart();

  return (
    <Card className="m-2 shadow-sm">
      <Card.Img variant="top" src={product.image} height="200" style={{ objectFit: 'cover' }} />
      <Card.Body>
        <Card.Title>{product.name}</Card.Title>
        <Card.Text>{product.price} EGP</Card.Text>
        <Button variant="success" onClick={() => addToCart(product)}>
          ➕ Add to Cart
        </Button>
      </Card.Body>
    </Card>
  );
}

