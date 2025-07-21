import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import Navbar from './Navbar';
import MainCarousel from './MainCarousel';
import MenuCategories from './MenuCategories';
import ProductSection from './ProductSection';
import BestSellers from './BestSellers';
import ProductModal from './ProductModel';
import PizzaModal from './PizzaModel';
import Slide from './Slider';
import SupremeSaladModal from './SupremeSaladModal';

import Img1 from '../../assets/dietary-salad-with-tomatoes-feta-lettuce-spinach-pine-nuts.jpg';
import Img2 from '../../assets/fried-potato-wedges (1).jpg';
import Img4 from '../../assets/pizza-with-cheese-brown-wooden-surface-bright-surface.jpg';
import Img5 from '../../assets/pizza-with-cheese-brown-wooden-surface-bright-surface.jpg';
import img6 from '../../assets/pizza-with-sausages-tomato-cheese-olives-pepper.jpg';
import img7 from '../../assets/pepperoni-pizza-table.jpg';

import './home.css';

export default function HomePage() {
  const [modalShow, setModalShow] = useState(false);
  const [pizzaModalShow, setPizzaModalShow] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [selectedPizza, setSelectedPizza] = useState(null);
  const [supremeModalShow, setSupremeModalShow] = useState(false);

  const navigate = useNavigate();

  const bestSellerItems = [
    { image: img6, title: 'Best Seller 1', desc: 'Tasty pizza', price: 44, oldPrice: 55 },
    { image: img7, title: 'Best Seller 2', desc: 'Cheesy pizza', price: 48, oldPrice: 60 }
  ];

  const topPicks = [
    {
      name: 'Potato Wedges',
      price: 14.00,
      image: Img2
    },
    {
      name: 'Supreme Salad',
      price: 29.00,
      image: Img1,
      options: [
        { name: 'Mixed Vegetables', image: 'https://via.placeholder.com/60' },
        { name: 'Pickles', image: 'https://via.placeholder.com/60' },
        { name: 'Coleslaw', image: 'https://via.placeholder.com/60' },
        { name: 'Beetroot', image: 'https://via.placeholder.com/60' },
        { name: 'Green Salad', image: 'https://via.placeholder.com/60' }
      ]
    }
  ];

  const lovePizza = [
    {
      name: 'Chicken BBQ Supreme',
      price: 51.00,
      image: Img5,
      description: 'Classic grilled chicken draped in BBQ sauce',
    },
    {
      name: 'Margherita Classic',
      price: 45.00,
      image: img6,
      description: 'Fresh tomato sauce, mozzarella and basil.',
    }
  ];

  const handleTopPickClick = (product) => {
    if (product.name === 'Supreme Salad') {
      setSelectedProduct(product);
      setSupremeModalShow(true);
    } else {
      navigate('/choose-first', { state: { product } });
    }
  };

  const goToChooseFirst = (product) => {
    navigate('/choose-first', { state: { product } });
  };

  return (
    <>
      <Navbar />
      <MainCarousel />
      <MenuCategories />

     <ProductSection
  title="Top Picks"
  products={topPicks}
  onProductClick={handleTopPickClick}
/>

<ProductSection
  title="For the Love of Pizza"
  products={lovePizza}
  onProductClick={goToChooseFirst}
/>
      <BestSellers
        items={bestSellerItems.map(item => ({
          ...item,
          onClick: () => goToChooseFirst(item)
        }))}
      />

      <Slide />
      <ProductModal
        show={modalShow}
        onHide={() => setModalShow(false)}
        product={selectedProduct}
      />

      <PizzaModal
        show={pizzaModalShow}
        onHide={() => setPizzaModalShow(false)}
        product={selectedPizza}
      />

      <SupremeSaladModal
        show={supremeModalShow}
        onHide={() => setSupremeModalShow(false)}
        product={selectedProduct}
      />
    </>
  );
}






