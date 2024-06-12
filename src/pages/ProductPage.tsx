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
interface ProductPageProps {
  onAddToCart: (product: Product) => void;
}

function ProductPage({ onAddToCart }: ProductPageProps) {
  const { id } = useParams<{ id: string }>();
  const [product, setProduct] = useState<Product | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    if (id) {
      const foundProduct = productsData.find((p) => p.id === parseInt(id));
      setProduct(foundProduct || null);
    }
  }, [id]);


  if (!id) {
    navigate('/');
    return null;
  }

  return (
    <div>
      {product ? (
        <ProductDetails product={product} onAddToCart={onAddToCart} />
      ) : (
        <p>Produto não encontrado :( </p>
      )}
    </div>
  );
}

export default ProductPage;
