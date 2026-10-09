import { Link, useParams } from "react-router-dom";

// Pagină provizorie: demonstrează extragerea parametrului :id din URL
function ProductDetails() {
  const { id } = useParams();

  return (
    <section>
      <h1>Product #{id}</h1>
      <Link to="/products">← Back to products</Link>
    </section>
  );
}

export default ProductDetails;
