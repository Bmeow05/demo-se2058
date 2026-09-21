import './App.css';
import Header from './components/Header';
import Banner from './components/Banner';
import Footer from './components/Footer';
import ProductList from './components/ProductList';
import products from './data/products';
import { useState } from 'react';

function App() {
  const [searchTerm, setSearchTerm] = useState('');
  const [category, setCategory] = useState('All');
  const [cartItems, setCartItems] = useState([]);

  const filteredProducts = products.filter((product) => {
    const matchesCategory = category === 'All' || product.category === category;
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const addToCart = (product) => {
    setCartItems((items) => [...items, product]);
  };

  return (
    <div className="App" id="top">
      <Header
        cartCount={cartItems.length}
        searchTerm={searchTerm}
        onSearch={setSearchTerm}
        onCategoryChange={setCategory}
      />
      <main>
        <Banner />
        <section id="product" className="shop-section">
          <h2>Product List</h2>
          <ProductList products={filteredProducts} onAddToCart={addToCart} />
        </section>
        <section id="cart" className="cart-section" aria-labelledby="cart-title">
          <h2 id="cart-title">Shopping cart</h2>
          <p>{cartItems.length} item{cartItems.length === 1 ? '' : 's'} in your cart.</p>
        </section>
        <section id="contact" className="contact-section" aria-labelledby="contact-title">
          <h2 id="contact-title">Contact</h2>
          <p>Email: contact@shopfashion.com</p>
          <p>Phone: +84 123 456 789</p>
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default App;
