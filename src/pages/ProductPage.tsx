import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import ProductDetails from '../components/ProductDetails';
import productsData from '../data/products.json';

interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  image: string;
}

function ProductPage() {
  const { id } = useParams<{ id: string }>();
  const [product, setProduct] = useState<Product | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    if (id) {
      const foundProduct = productsData.find((p) => p.id === parseInt(id));
      setProduct(foundProduct || null);
    }
  }, [id]);

  const handleAddToCart = (product: Product) => {
    // Adicionar lógica de adicionar ao carrinho aqui
  };

  if (!id) {
    navigate('/');
    return null;
  }

  return (
    <div>
      {product ? (
        <ProductDetails product={product} onAddToCart={handleAddToCart} />
      ) : (
        <p>Produto não encontrado :( </p>
      )}
    </div>
  );
}

export default ProductPage;
