import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { getProductById } from "../services/productService";

function ProductContent({ id }) {
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [retryCount, setRetryCount] = useState(0);

  // Id-ul extras din URL este folosit în request
  useEffect(() => {
    let cancelled = false;

    async function loadProduct() {
      try {
        const data = await getProductById(id);
        if (!cancelled) setProduct(data);
      } catch {
        if (!cancelled) setError("Unable to load product.");
      } finally {
        if (!cancelled) setLoading(false);
      }
    }

    loadProduct();
    return () => {
      cancelled = true;
    };
  }, [id, retryCount]);

  const handleRetry = () => {
    setLoading(true);
    setError(null);
    setRetryCount((count) => count + 1);
  };

  return (
    <section>
      <Link to="/products">← Back to products</Link>

      {loading && <p className="status">Loading...</p>}

      {error && (
        <div className="error">
          <p>{error}</p>
          <button onClick={handleRetry}>Try again</button>
        </div>
      )}

      {product && !loading && !error && (
        <div className="details">
          <img src={product.image} alt={product.title} />
          <div className="info">
            <h1>{product.title}</h1>
            <p className="category">{product.category}</p>
            <p className="price">${product.price}</p>
            <p>{product.description}</p>
            {product.rating && (
              <p>
                Rating: {product.rating.rate} / 5 ({product.rating.count}{" "}
                reviews)
              </p>
            )}
          </div>
        </div>
      )}
    </section>
  );
}

function ProductDetails() {
  const { id } = useParams();

  // key={id}: la schimbarea id-ului componenta se reia de la „Loading..."
  return <ProductContent key={id} id={id} />;
}

export default ProductDetails;
