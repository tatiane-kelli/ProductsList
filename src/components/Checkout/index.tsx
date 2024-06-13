import React, { useState } from 'react';
import InputMask from 'react-input-mask';
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

  function handleCardNumberChange(e: React.ChangeEvent<HTMLInputElement>) {
    setCardNumber(e.target.value);
  };

  function handleExpiryDateChange(e: React.ChangeEvent<HTMLInputElement>) {
    setExpiryDate(e.target.value);
  };

  function handleCvvChange(e: React.ChangeEvent<HTMLInputElement>) {
    setCvv(e.target.value);
  };

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
            title="Name"
            placeholder="Insira seu nome completo"
          />
        </label>
        <label className="label">
          <span className="title">Número do cartão</span>
          <InputMask
            mask="9999 9999 9999 9999"
            className="input-field"
            type="text"
            name="input-name"
            title="Card Number"
            placeholder="0000 0000 0000 0000"
            value={cardNumber}
            onChange={handleCardNumberChange}
          />
        </label>
        <div className="split">
          <label className="label">
            <span className="title">Data de validade</span>
            <InputMask
              mask="99/99"
              className="input-field"
              type="text"
              name="input-name"
              title="Expiry Date"
              placeholder="MM/YY"
              value={expiryDate}
              onChange={handleExpiryDateChange}
            />
          </label>
          <label className="label">
            <span className="title">CVV</span>
            <InputMask
              mask="999"
              className="input-field"
              type="text"
              name="cvv"
              title="CVV"
              placeholder="CVV"
              value={cvv}
              onChange={handleCvvChange}
            />
          </label>
        </div>
        <input className="checkoutBtn" type="button" value="Pagar" onClick={handlePayment} />
      </form>
    </div>
  );
}

export default Checkout;
