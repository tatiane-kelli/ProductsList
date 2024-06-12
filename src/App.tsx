import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import ProductPage from './pages/ProductPage';
import CheckoutPage from './pages/CheckoutPage';
import Header from './components/Header';
import Cart from './pages/Cart';

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

function App() {
  const [searchTerm, setSearchTerm] = useState('');
  const [cart, setCart] = useState<CartItem[]>([]);

  function handleSearch(term: string) {
    setSearchTerm(term);
  }

  function handleAddToCart(product: Product) {
    const newItem: CartItem = { ...product, onRemoveFromCart: () => handleRemoveFromCart(product.id) };
    setCart([...cart, newItem]);
  }
  
  function handleRemoveFromCart(id: number) {
    setCart(cart.filter(item => item.id !== id));
  }
  
  return (
    <Router>
      <div className="app">
        <Header onSearch={handleSearch} cartItemCount={cart.length} />
        <main>
          <Routes>
            <Route path="/" element={<Home searchTerm={searchTerm} />} />
            <Route path="/product/:id" element={<ProductPage onAddToCart={handleAddToCart} />} />
            <Route path="/cart" element={<Cart cart={cart} />} />
            <Route path="/checkout" element={<CheckoutPage />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
