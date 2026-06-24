import { Link } from "react-router-dom";

function MenuPage() {
  return (
    <section className="simple-page">
      <div className="container">
        <div className="simple-card">
          <h1>Menu</h1>
          <p>
            Use this page to quickly navigate through the main ecommerce
            sections.
          </p>

          <div className="menu-link-grid">
            <Link to="/">Home</Link>
            <Link to="/products">Products</Link>
            <Link to="/cart">Cart</Link>
            <Link to="/login">Login</Link>
            <Link to="/signup">Signup</Link>
            <Link to="/help">Help</Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default MenuPage;