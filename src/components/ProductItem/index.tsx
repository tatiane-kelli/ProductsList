import React from 'react';
import './ProductItem.css';

interface ProductItemProps {
  product: {
    id: number;
    name: string;
    description: string;
    price: number;
    image: string;
  };
  onClick: (id: number) => void;
}

const ProductItem: React.FC<ProductItemProps> = ({ product, onClick }) => {
  return (
    <div className="product-item" onClick={() => onClick(product.id)}>
      <img src={product.image} alt={product.name} />
      <h3>{product.name}</h3>
      <p>{product.description}</p>
      <p>R$ {product.price.toFixed(2)}</p>
    </div>
  );
};

export default ProductItem;
