import React from 'react';
import ProductCard from './ProductCard';
import { Container, Row, Col } from 'react-bootstrap';

const products = [
  { id: 1, name: 'Margherita Pizza', price: 70, image: '/images/pizza1.jpg' },
  { id: 2, name: 'Super Supreme Pizza', price: 95, image: '/images/pizza2.jpg' },
  { id: 3, name: 'Caesar Salad', price: 40, image: '/images/salad.jpg' },
];

export default function ProductsPage() {
  return (
    <Container className="mt-5">
      <h2 className="text-center text-danger mb-4">🍕 Menu</h2>
      <Row>
        {products.map((product) => (
          <Col key={product.id} md={4}>
            <ProductCard product={product} />
          </Col>
        ))}
      </Row>
    </Container>
  );
}

