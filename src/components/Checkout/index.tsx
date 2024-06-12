import React, { useState } from 'react';
import './styles.css';

interface CheckoutProps {
  items: any[];
  onPaymentSuccess: () => void;
  onPaymentFailure: () => void;
  clearCart: () => void;
}

function Checkout({ items, onPaymentSuccess, onPaymentFailure, clearCart }: CheckoutProps) {
  const [cardNumber, setCardNumber] = useState('');
  const [expiryDate, setExpiryDate] = useState('');
  const [cvv, setCvv] = useState('');

  function handlePayment() {
    const isSuccess = Math.random() > 0.5;
    if (isSuccess) {
      onPaymentSuccess();
    } else {
      onPaymentFailure();
    }
  }

  return (
    <div className="checkout">
      <h2 className="checkoutTitle">Checkout</h2>
      <p className="checkoutSubtitle">Preencha o formulário para finalizar sua compra.</p>
      <form className="form">
        <label className="label">
          <span className="title">Nome completo</span>
          <input
            className="input-field"
            type="text"
            name="input-name"
            title="Input title"
            placeholder="Insira seu nome completo"
          />
        </label>
        <label className="label">
          <span className="title">Card Number</span>
          <input
            id="serialCardNumber"
            className="input-field"
            type="number"
            name="input-name"
            title="Input title"
            placeholder="0000 0000 0000 0000"
            value={cardNumber}
            onChange={(e) => setCardNumber(e.target.value)}
          />
        </label>
        <div className="split">
          <label className="label">
            <span className="title">Data de validade</span>
            <input
              id="ExDate"
              className="input-field"
              type="text"
              name="input-name"
              title="Expiry Date"
              placeholder="XX/XX"
              value={expiryDate}
              onChange={(e) => setExpiryDate(e.target.value)}
            />
          </label>
          <label className="label">
            <span className="title">CVV</span>
            <input
              id="cvv"
              className="input-field"
              type="number"
              name="cvv"
              title="CVV"
              placeholder="CVV"
              value={cvv} 
              onChange={(e) => setCvv(e.target.value)}
            />
          </label>
        </div>
        <input className="checkoutBtn" type="button" value="Pagar" onClick={handlePayment} />
      </form>
    </div>
  );
}

export default Checkout;
