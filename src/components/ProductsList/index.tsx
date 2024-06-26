import React, { useState } from 'react';
import ProductItem from '../ProductItem';
import productsData from '../../data/products.json';
import './styles.css';

interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  image: string;
}
interface ProductListProps {
  searchTerm: string;
  onProductClick: (id: number) => void;
  onAddToCart: (product: Product) => void;
}

const priceRanges = [
  { label: 'Filtrar por preço', min: 0, max: Infinity },
  { label: 'R$ 0 - R$ 50', min: 0, max: 50 },
  { label: 'R$ 51 - R$ 100', min: 51, max: 100 },
  { label: 'R$ 101 - R$ 200', min: 101, max: 200 },
];

function ProductList({ searchTerm, onProductClick, onAddToCart }: ProductListProps) {
  const [selectedPriceRange, setSelectedPriceRange] = useState(priceRanges[0]);

  function handlePriceRangeChange(event: React.ChangeEvent<HTMLSelectElement>) {
    const selectedRange = priceRanges.find(range => range.label === event.target.value);
    setSelectedPriceRange(selectedRange || priceRanges[0]);
  };

  const filteredProducts = productsData
    .filter((product) => 
      product.name.toLowerCase().includes(searchTerm.toLowerCase())
    )
    .filter((product) =>
      product.price >= selectedPriceRange.min && product.price <= selectedPriceRange.max
    );

  return (
    <div className="productList">
      <div className="priceFilter">
        <select onChange={handlePriceRangeChange}>
          {priceRanges.map(range => (
            <option key={range.label} value={range.label}>
              {range.label}
            </option>
          ))}
        </select>
      </div>
      <div className="products">
        {filteredProducts.map((product) => (
          <ProductItem
            key={product.id}
            product={product}
            onClick={() => onProductClick(product.id)}
            onAddToCart={() => onAddToCart(product)}
          />
        ))}
      </div>
    </div>
  );
}

export default ProductList;
