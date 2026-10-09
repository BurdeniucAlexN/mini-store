import { NavLink, Outlet } from "react-router-dom";

function Dashboard() {
  return (
    <section>
      <h1>Dashboard</h1>

      <nav className="subnav">
        <NavLink to="/dashboard" end>
          Overview
        </NavLink>
        <NavLink to="/dashboard/profile">Profile</NavLink>
        <NavLink to="/dashboard/settings">Settings</NavLink>
      </nav>

      {/* Aici se afișează ruta copil activă */}
      <Outlet />
    </section>
  );
}

export default Dashboard;
