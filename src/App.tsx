import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Header from './components/Header';

function App() {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (term: string) => {
    setSearchTerm(term);
  };

  return (
    <Router>
      <div className="app">
        <Header onSearch={handleSearch} />
        <main>
          <Routes>
            <Route path="/" element={<Home searchTerm={searchTerm} />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
