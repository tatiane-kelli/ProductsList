import React from 'react';
import './ProductDetails.css';

interface ProductDetailsProps {
  product: {
    id: number;
    name: string;
    description: string;
    price: number;
    image: string;
  };
  onAddToCart: (product: any) => void;
}

function ProductDetails({ product, onAddToCart }: ProductDetailsProps) {
  return (
    <div className="product-details">
      <img src={product.image} alt={product.name} />
      <h2>{product.name}</h2>
      <p>{product.description}</p>
      <p>R$ {product.price.toFixed(2)}</p>
      <button onClick={() => onAddToCart(product)}>Adicionar ao Carrinho</button>
    </div>
  );
}

export default ProductDetails;
