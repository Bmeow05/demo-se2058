import { useState } from "react";
import Banner from "./components/Banner";
import Header from "./components/Header";
import ProductCard from "./components/ProductCard";
import products from "./products"
import Footer from "./components/Footer";

function App() {
  const [cart, setCart] = useState([]);
  const handleOnClick = (item) => {
    console.log(item)
    setCart((prev) => [...prev, item])
  }
  return (
    <div className="">
      <Header cart={cart} />
      <Banner />
      <div className="d-flex flex-row flex-wrap gap-3">
        {products.map((i) => (
          <ProductCard handleOnClick={handleOnClick} items={i} cart={cart} />
        ))}
      </div>
      <Footer />
    </div>
  );
}

export default App;
