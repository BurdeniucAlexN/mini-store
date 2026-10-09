import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import ProductCard from "../components/ProductCard";
import { getProducts } from "../services/productService";

function Products() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [retryCount, setRetryCount] = useState(0);

  // Query params: /products?category=electronics&sort=price&search=phone
  const [searchParams, setSearchParams] = useSearchParams();
  const category = searchParams.get("category") ?? "";
  const sort = searchParams.get("sort") ?? "";
  const search = searchParams.get("search") ?? "";

  useEffect(() => {
    let cancelled = false;

    async function loadProducts() {
      try {
        const data = await getProducts();
        if (!cancelled) setProducts(data);
      } catch {
        if (!cancelled) setError("Unable to load products.");
      } finally {
        if (!cancelled) setLoading(false);
      }
    }

    loadProducts();
    return () => {
      cancelled = true;
    };
  }, [retryCount]);

  const handleRetry = () => {
    setLoading(true);
    setError(null);
    setRetryCount((count) => count + 1);
  };

  const updateParam = (key, value) => {
    const next = new URLSearchParams(searchParams);
    if (value) {
      next.set(key, value);
    } else {
      next.delete(key);
    }
    setSearchParams(next, { replace: true });
  };

  const categories = [...new Set(products.map((product) => product.category))];

  const query = search.trim().toLowerCase();
  const visibleProducts = products.filter(
    (product) =>
      (!category || product.category === category) &&
      (!query ||
        product.title.toLowerCase().includes(query) ||
        product.description.toLowerCase().includes(query))
  );

  if (sort === "price") {
    visibleProducts.sort((a, b) => a.price - b.price);
  } else if (sort === "price-desc") {
    visibleProducts.sort((a, b) => b.price - a.price);
  }

  return (
    <section>
      <h1>Products</h1>

      <div className="filters">
        <input
          type="search"
          placeholder="Search..."
          value={search}
          onChange={(event) => updateParam("search", event.target.value)}
        />

        <select
          value={category}
          onChange={(event) => updateParam("category", event.target.value)}
        >
          <option value="">All categories</option>
          {categories.map((name) => (
            <option key={name} value={name}>
              {name}
            </option>
          ))}
        </select>

        <select
          value={sort}
          onChange={(event) => updateParam("sort", event.target.value)}
        >
          <option value="">Default order</option>
          <option value="price">Price: low to high</option>
          <option value="price-desc">Price: high to low</option>
        </select>
      </div>

      {loading && <p className="status">Loading...</p>}

      {error && (
        <div className="error">
          <p>{error}</p>
          <button onClick={handleRetry}>Try again</button>
        </div>
      )}

      {!loading && !error && visibleProducts.length === 0 && (
        <p className="status">No products found.</p>
      )}

      {!loading && !error && (
        <div className="product-grid">
          {visibleProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      )}
    </section>
  );
}

export default Products;
