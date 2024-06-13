import React from 'react';
import Checkout from '../components/Checkout';
import { useNavigate } from 'react-router-dom';

interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  image: string;
}

interface CartItem extends Product {
  onRemoveFromCart: () => void;
}

interface CheckoutPageProps {
  cart: CartItem[];
  clearCart: () => void;
}

function CheckoutPage({ cart, clearCart }: CheckoutPageProps) {
  const navigate = useNavigate();

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
        items={cart} 
        onPaymentSuccess={handlePaymentSuccess} 
        onPaymentFailure={handlePaymentFailure} 
        clearCart={clearCart}
      />
    </div>
  );
}

export default CheckoutPage;
