import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useCart } from "../context/CartContext";
import { useAuth } from "../context/AuthContext";

function Navbar() {
  const navigate = useNavigate();
  const { cartCount } = useCart();
  const { user, logout } = useAuth();

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchText, setSearchText] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  function closeMobileMenu() {
    setMobileMenuOpen(false);
  }

  function handleSearch(event) {
    event.preventDefault();

    const query = new URLSearchParams();

    if (searchText.trim()) {
      query.append("search", searchText.trim());
    }

    if (selectedCategory !== "All") {
      query.append("category", selectedCategory);
    }

    navigate(`/products${query.toString() ? `?${query.toString()}` : ""}`);
  }

  return (
    <header className="figma-header">
      <div className="container">
        <div className="top-header">
          <Link to="/" className="brand-logo">
            <span className="brand-icon">B</span>
            <strong>Brand</strong>
          </Link>

          <form className="search-box" onSubmit={handleSearch}>
            <input
              type="text"
              placeholder="Search"
              value={searchText}
              onChange={(event) => setSearchText(event.target.value)}
            />

            <select
              value={selectedCategory}
              onChange={(event) => setSelectedCategory(event.target.value)}
            >
              <option value="All">All category</option>
              <option value="Electronics">Electronics</option>
              <option value="Smartphones">Smartphones</option>
              <option value="Computer and tech">Computer and tech</option>
              <option value="Clothes and wear">Clothes and wear</option>
              <option value="Home interiors">Home interiors</option>
              <option value="Accessories">Accessories</option>
            </select>

            <button type="submit" className="search-btn">
              Search
            </button>
          </form>

          <nav className="header-icons">
            <Link to="/products">
              <span>🛍️</span>
              Products
            </Link>

            {user?.role === "admin" && (
              <Link to="/admin">
                <span>⚙️</span>
                Admin
              </Link>
            )}

            {!user ? (
              <>
                <Link to="/login">
                  <span>👤</span>
                  Login
                </Link>

                <Link to="/signup">
                  <span>📝</span>
                  Signup
                </Link>
              </>
            ) : (
              <button className="nav-logout-btn" onClick={logout}>
                <span>🚪</span>
                Logout
              </button>
            )}

            <Link to="/cart">
              <span>🛒</span>
              Cart ({cartCount})
            </Link>
          </nav>

          <button
            className="mobile-menu-btn"
            onClick={() => setMobileMenuOpen(true)}
          >
            ☰
          </button>
        </div>

        <div className="bottom-header">
          <nav>
            <Link to="/products">☰ All category</Link>
            <Link to="/products">Hot offers</Link>
            <Link to="/products">Gift boxes</Link>
            <Link to="/products">Projects</Link>
            <Link to="/menu">Menu item</Link>
            <Link to="/help">Help</Link>
          </nav>

          <div className="header-options">
            <span>English, USD</span>
            <span>Ship to 🇩🇪</span>
          </div>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="mobile-drawer-overlay" onClick={closeMobileMenu}>
          <aside
            className="mobile-drawer"
            onClick={(event) => event.stopPropagation()}
          >
            <button className="drawer-close" onClick={closeMobileMenu}>
              ×
            </button>

            <div className="drawer-user">
              <div className="user-avatar">U</div>

              {user ? (
                <p>{user.name || user.email}</p>
              ) : (
                <p>
                  <Link to="/login" onClick={closeMobileMenu}>
                    Sign in
                  </Link>{" "}
                  |{" "}
                  <Link to="/signup" onClick={closeMobileMenu}>
                    Register
                  </Link>
                </p>
              )}
            </div>

            <Link to="/" onClick={closeMobileMenu}>
              🏠 Home
            </Link>

            <Link to="/products" onClick={closeMobileMenu}>
              🛍️ Products
            </Link>

            <Link to="/cart" onClick={closeMobileMenu}>
              🛒 Cart ({cartCount})
            </Link>

            <Link to="/help" onClick={closeMobileMenu}>
              ❓ Help
            </Link>

            <Link to="/menu" onClick={closeMobileMenu}>
              📋 Menu item
            </Link>

            {user?.role === "admin" && (
              <Link to="/admin" onClick={closeMobileMenu}>
                ⚙️ Admin Dashboard
              </Link>
            )}

            {user && (
              <button
                className="drawer-logout"
                onClick={() => {
                  logout();
                  closeMobileMenu();
                }}
              >
                🚪 Logout
              </button>
            )}
          </aside>
        </div>
      )}
    </header>
  );
}

export default Navbar;