import { Link } from "react-router-dom";

function ProductCard({ product }) {
  const { id, title, price, image } = product;

  return (
    <article className="product-card">
      <img src={image} alt={title} />
      <h3>{title}</h3>
      <p className="price">${price}</p>
      <Link className="button" to={`/products/${id}`}>
        View details
      </Link>
    </article>
  );
}

export default ProductCard;
