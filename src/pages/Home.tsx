import React from 'react';
import ProductList from '../components/ProductsList';
import { useNavigate } from 'react-router-dom';

interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  image: string;
}
interface HomeProps {
  searchTerm: string;
  onAddToCart: (product: Product) => void;
}

function HomePage({ searchTerm, onAddToCart }: HomeProps) {
  const navigate = useNavigate();

  const handleProductClick = (id: number) => {
    navigate(`/product/${id}`);
  };

  return (
    <div>
      <ProductList 
        onProductClick={handleProductClick} 
        searchTerm={searchTerm}
        onAddToCart={onAddToCart}
      />
    </div>
  );
}

export default HomePage;
