import React from 'react';
import ProductList from '../components/ProductsList';
import { useNavigate } from 'react-router-dom';

interface HomeProps {
  searchTerm: string;
}

function HomePage({ searchTerm }: HomeProps) {
  const navigate = useNavigate();

  const handleProductClick = (id: number) => {
    navigate(`/product/${id}`);
  };

  return (
    <div>
      <ProductList onProductClick={handleProductClick} searchTerm={searchTerm}/>
    </div>
  );
}

export default HomePage;
