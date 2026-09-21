import ProductCard from './ProductCard';

export default function ProductList({ products, onAddToCart }) {
  if (products.length === 0) {
    return <p className="empty-state">No pieces match your search.</p>;
  }

  return (
    <div className="product-grid">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} onAddToCart={onAddToCart} />
      ))}
    </div>
  );
}
