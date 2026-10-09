import { Link } from "react-router-dom";

// Pagină provizorie: lista reală vine din API în etapa următoare
function Products() {
  return (
    <section>
      <h1>Products</h1>
      <ul>
        <li>
          <Link to="/products/1">Product 1</Link>
        </li>
        <li>
          <Link to="/products/2">Product 2</Link>
        </li>
      </ul>
    </section>
  );
}

export default Products;
