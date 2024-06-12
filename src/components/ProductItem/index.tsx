import React from 'react';
import './styles.css';

interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  image: string;
}
interface ProductItemProps {
  product: {
    id: number;
    name: string;
    description: string;
    price: number;
    image: string;
  };
  onClick: (id: number) => void;
  onAddToCart: (product: Product) => void;
}

function ProductItem({ product, onClick, onAddToCart }: ProductItemProps) {
  function handleAddToCart(e: React.MouseEvent<HTMLButtonElement>) {
    e.stopPropagation();
    onAddToCart(product);
    console.log('adicionou')
  }

  return (
    <div className="productItem" onClick={() => onClick(product.id)}>
      <div className="productItemImg">
        <img width="120" height="120" src={product.image} alt={product.name} />
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
            <button className="addToCart" onClick={handleAddToCart}>
              <span className="cartIcon"> 
                <svg className="icon" width="20px" height="20px" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 294.873 294.873" fill="#221E48" transform="matrix(-1, 0, 0, 1, 0, 0)">
                  <g id="SVGRepo_bgCarrier" stroke-width="0"/>
                  <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"/>
                  <g id="SVGRepo_iconCarrier"> <g> <path d="M287.373,37.98h-46.046c-8.789,0-17.546,6.626-19.936,15.085l-12.438,44.023 c-1.423-0.396-2.92-0.625-4.478-0.625H99.761c-5.056-22.543-25.217-39.442-49.263-39.442C22.653,57.021,0,79.675,0,107.518 c0,25.479,18.974,46.601,43.532,50.006c-0.011,0.329-0.009,0.661,0.024,0.998l2.61,26.457c0.925,9.373,9.027,16.715,18.446,16.715 h115.462c8.827,0,17.546-6.675,19.85-15.195l14.439-53.397c0.001-0.001,0.001-0.003,0.001-0.003l21.46-75.955 c0.583-2.061,3.359-4.163,5.502-4.163h46.046c4.142,0,7.5-3.357,7.5-7.5S291.515,37.98,287.373,37.98z M15,107.518 c0-19.573,15.924-35.497,35.498-35.497s35.497,15.924,35.497,35.497c0,19.573-15.924,35.497-35.497,35.497S15,127.092,15,107.518z M185.445,182.583c-0.551,2.036-3.262,4.111-5.371,4.111H64.612c-1.646,0-3.356-1.549-3.518-3.188l-2.578-26.135 c22.774-3.65,40.497-22.58,42.31-45.908h103.648c0.072,0,0.137,0.003,0.193,0.007c-0.011,0.056-0.025,0.119-0.044,0.188 L185.445,182.583z"/> <path d="M86.504,210.236c-12.863,0-23.328,10.465-23.328,23.328c0,12.863,10.465,23.328,23.328,23.328 c12.863,0,23.329-10.465,23.329-23.328C109.833,220.701,99.367,210.236,86.504,210.236z M86.504,241.892 c-4.592,0-8.328-3.736-8.328-8.328c0-4.592,3.736-8.328,8.328-8.328c4.592,0,8.329,3.736,8.329,8.328 C94.833,238.156,91.096,241.892,86.504,241.892z"/> <path d="M160.472,210.236c-12.863,0-23.328,10.465-23.328,23.328c0,12.863,10.465,23.328,23.328,23.328 c12.863,0,23.328-10.465,23.328-23.328C183.8,220.701,173.335,210.236,160.472,210.236z M160.472,241.892 c-4.592,0-8.328-3.736-8.328-8.328c0-4.592,3.736-8.328,8.328-8.328c4.592,0,8.328,3.736,8.328,8.328 C168.8,238.156,165.064,241.892,160.472,241.892z"/> <path d="M57.996,126.094v-11.075h11.078c4.142,0,7.5-3.357,7.5-7.5s-3.358-7.5-7.5-7.5H57.996V88.94 c0-4.143-3.358-7.5-7.5-7.5s-7.5,3.357-7.5,7.5v11.078H31.921c-4.142,0-7.5,3.357-7.5,7.5s3.358,7.5,7.5,7.5h11.075v11.075 c0,4.143,3.358,7.5,7.5,7.5S57.996,130.236,57.996,126.094z"/></g></g>
                </svg>
              </span>
            </button>
        </div>
    </div>
  );
}

export default ProductItem;
