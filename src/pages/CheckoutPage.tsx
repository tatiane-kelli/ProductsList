import React, { useState } from 'react';
import Checkout from '../components/Checkout';
import { useNavigate } from 'react-router-dom';

function CheckoutPage() {
  const [cartItems, setCartItems] = useState([]);
  const navigate = useNavigate();

  function clearCart() {
    setCartItems([]);
  }

  function handlePaymentSuccess() {
    alert('Pagamento realizado com sucesso! ✅ Agradecemos pela compra');
    clearCart();
    navigate('/');
  }

  function handlePaymentFailure() {
    alert('Falha ao processar o pagamento. Por favor, tente novamente.');
    navigate('/cart');
  }

  return (
    <div>
      <Checkout 
        items={cartItems} 
        onPaymentSuccess={handlePaymentSuccess} 
        onPaymentFailure={handlePaymentFailure} 
        clearCart={clearCart}
      />
    </div>
  );
}

export default CheckoutPage;
