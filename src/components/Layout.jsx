import { NavLink, Outlet } from "react-router-dom";

function Layout() {
  return (
    <>
      <header className="navbar">
        <span className="brand">Mini Store</span>
        <nav>
          <NavLink to="/" end>
            Home
          </NavLink>
          <NavLink to="/products">Products</NavLink>
          <NavLink to="/about">About</NavLink>
        </nav>
      </header>

      <main>
        <Outlet />
      </main>

      <footer>
        <p>&copy; 2026 Mini Store — proiect de laborator</p>
      </footer>
    </>
  );
}

export default Layout;
