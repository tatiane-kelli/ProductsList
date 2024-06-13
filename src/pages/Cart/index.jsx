import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './styles.css';

interface CartItem {
  id: number;
  name: string;
  description: string;
  price: number;
  image: string;
  onRemoveFromCart: () => void;
}

interface CartProps {
  cart: CartItem[];
}

function Cart({ cart }: CartProps) {
  const navigate = useNavigate();
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    const total = cart.reduce((acc, item) => acc + item.price, 0);
    setTotalPrice(total);
  }, [cart]);

  function handleGoToCheckout() {
    navigate('/checkout');
  }

  return (
    <div className="cart">
      <h2 className="cartTitle">Seu Carrinho</h2>
      {cart.length === 0 ? (
        <div className="emptyCartMessage">
          <p>Seu carrinho está vazio, <span className="goShoppingLink" onClick={() => navigate('/')}>clique aqui</span> e vá as compras 🎁</p>
        </div>
      ) : (
        <>
          <ul className="cartList">
            {cart.map((item, index) => (
              <>
                <li className="cartItem" key={index}>
                  <img className="cartItemImg" src={item.image} alt="product"/>
                  <div className="cartItemInfo">
                    <p className="cartItemName">{item.name}</p>
                    <strong className="cartItemPrice"> R$ {item.price.toFixed(2)}</strong>
                  </div>
                  <div className="removeItemBtnContainer">
                    <button className="removeFromCartBtn" onClick={item.onRemoveFromCart}>
                      <svg fill="#F4F3F7" width="16px" height="16px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M5.755,20.283,4,8H20L18.245,20.283A2,2,0,0,1,16.265,22H7.735A2,2,0,0,1,5.755,20.283ZM21,4H16V3a1,1,0,0,0-1-1H9A1,1,0,0,0,8,3V4H3A1,1,0,0,0,3,6H21a1,1,0,0,0,0-2Z"/></svg>
                      <p>Remover item</p>
                    </button>
                  </div>
                </li>
                <hr className="separator" />
              </>
            ))}
          </ul>
          <div className="totalPrice">
            <span>Total: R${totalPrice.toFixed(2)}</span>
          </div>
          <button className="goToPayment" onClick={handleGoToCheckout}>Finalizar compra</button>
        </>
      )}
    </div>
  );
}

export default Cart;
