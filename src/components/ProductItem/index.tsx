import React from 'react';
import './styles.css';

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

function ProductItem({ product, onClick }: ProductItemProps) {
  return (
    <div className="productItem" onClick={() => onClick(product.id)}>
      <div className="productItemImg">
        <img src={product.image} alt={product.name} />
      </div>
        <h3 className="productItemName">{product.name}</h3>
        <p className="productItemDescription">{product.description}</p>
        <hr className="separator" />
        <div className="productItem_footer">
            <p className="productItemPrice">R$ {product.price.toFixed(2)}</p>
            <button className="seeProductDetails">
              <svg width="20px" height="20px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="12" cy="12" r="3" stroke="#221E48" stroke-width="2"/>
              <path d="M20.188 10.9343C20.5762 11.4056 20.7703 11.6412 20.7703 12C20.7703 12.3588 20.5762 12.5944 20.188 13.0657C18.7679 14.7899 15.6357 18 12 18C8.36427 18 5.23206 14.7899 3.81197 13.0657C3.42381 12.5944 3.22973 12.3588 3.22973 12C3.22973 11.6412 3.42381 11.4056 3.81197 10.9343C5.23206 9.21014 8.36427 6 12 6C15.6357 6 18.7679 9.21014 20.188 10.9343Z" stroke="#221E48" stroke-width="2"/>
              </svg>
            </button>
        </div>
    </div>
  );
}

export default ProductItem;
