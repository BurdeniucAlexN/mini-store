import { Link } from "react-router-dom";

function Home() {
  return (
    <section>
      <h1>Welcome to Mini Store</h1>
      <p>Browse our catalog and find something you like.</p>
      <Link className="button" to="/products">
        Shop now
      </Link>
    </section>
  );
}

export default Home;
