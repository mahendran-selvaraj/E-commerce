import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { ShopContext } from "../components/ShopContext";

import { Home, ShoppingCart, User } from "lucide-react";

export default function Navbar() {
  const { cart, user, setUser } = useContext(ShopContext);
  const cartLength = Object.values(cart).reduce((sum, qty) => sum + qty, 0);

  const handleLogout = () => {
    setUser(null);
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-white shadow-sm py-3">
      <div className="container">
        <Link className="navbar-brand d-flex" to="/">
          <img
            src="logo.png"
            alt="Logo"
            className="me-2"
            style={{ height: "50px", objectFit: "contain" }}
          />
          <span className="fw-bold text-black">ShopEasy</span>
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link
                className="nav-link fw-bold text-dark shadow-sm px-3 py-2 rounded d-flex align-items-center"
                to="/"
              >
                <Home size={20} className="me-2" style={{ color: "black" }} />
                Home
              </Link>
            </li>

            <li className="nav-item">
              <Link
                className="nav-link fw-bold text-dark shadow-sm px-3 py-2 rounded d-flex align-items-center"
                to="/cart"
              >
                <ShoppingCart size={20} className="me-2" style={{ color: "black" }} />
                Cart
                <span
                  className="badge ms-2"
                  style={{
                    backgroundColor: cartLength > 0 ? "green" : "red",
                    color: "white",
                  }}
                >
                  {cartLength}
                </span>
              </Link>
            </li>

            <li className="nav-item">
              {user ? (
                <div className="nav-link fw-bold text-dark shadow-sm px-3 py-2 rounded d-flex align-items-center">
                  <User size={20} className="me-2" style={{ color: "black" }} />
                  {user.name}
                </div>
              ) : (
                <Link
                  className="nav-link fw-bold text-dark shadow-sm px-3 py-2 rounded d-flex align-items-center"
                  to="/login"
                >
                  <User size={20} className="me-2" style={{ color: "black" }} />
                  Login
                </Link>
              )}
            </li>

            {user && (
              <div >
                <button
                  onClick={handleLogout}
                  className="btn btn-outline-danger ms-3"
                >
                  Logout
                </button>
              </div>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
}
