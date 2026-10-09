import { useNavigate } from "react-router-dom";

function NotFound() {
  const navigate = useNavigate();

  return (
    <section className="center">
      <h1>404</h1>
      <p>Page not found.</p>
      <button onClick={() => navigate("/")}>Home</button>
    </section>
  );
}

export default NotFound;
