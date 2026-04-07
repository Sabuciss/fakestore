import { useEffect, useState } from 'react';
import './App.css';
import Header from './components/Header/Header';
import SearchBar from './components/SearchBar/SearchBar';
import Category from './components/Category/Category';
import ProductCard from './ProductCard';
import ProductDetail from './ProductDetail';

function App() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const categories = ['women', 'men', 'kids'];
  const [search, setSearch] = useState('');
  const [activeCategory, setActiveCategory] = useState('');
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const getProducts = async () => {
      try {
        const response = await fetch('/api/mirror/products');
        const json = await response.json();
        const list = Array.isArray(json) ? json : (json.data ?? []);
        const normalized = list.map((p) => ({ ...p, id: p.id ?? p._id }));
        setProducts(normalized);
      } catch (err) {
        console.error('Neizdevās ielādēt produktus:', err);
      } finally {
        setLoading(false);
      }
    };
    getProducts();
  }, []);

  const filtered = products.filter((p) => {
    const matchesSearch = p.title.toLowerCase().includes(search.toLowerCase());
    const matchesCategory = activeCategory ? p.category === activeCategory : true;
    return matchesSearch && matchesCategory;
  });

  function addToCart(product) {
    setCart((prev) => [...prev, product]);
  }

  if (selectedProduct) {
    return (
      <>
        <Header cartCount={cart.length} />
        <ProductDetail
          product={selectedProduct}
          onBack={() => setSelectedProduct(null)}
          onAddToCart={() => addToCart(selectedProduct)}
        />
      </>
    );
  }

  return (
    <>
      <Header cartCount={cart.length} />
      <main className="app-shell">
        {loading ? (
          <p className="loading-text">Ielādē produktus...</p>
        ) : (
          <>
            <SearchBar value={search} onChange={setSearch} />

            <div className="category-filters">
              <Category
                name="Visi"
                isActive={activeCategory === ''}
                onClick={() => setActiveCategory('')}
              />
              {categories.map((cat) => (
                <Category
                  key={cat}
                  name={cat.charAt(0).toUpperCase() + cat.slice(1)}
                  isActive={activeCategory === cat}
                  onClick={() => setActiveCategory(activeCategory === cat ? '' : cat)}
                />
              ))}
            </div>

            <p className="results-info">
              Rāda {filtered.length} no {products.length} produktiem
            </p>

            <div className="product-list">
              {filtered.map((product) => (
                <ProductCard
                  key={product.id}
                  {...product}
                  onSelect={() => setSelectedProduct(product)}
                  onAddToCart={() => addToCart(product)}
                />
              ))}
            </div>
          </>
        )}
      </main>
    </>
  );
}

export default App;