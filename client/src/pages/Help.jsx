import { Link } from "react-router-dom";

function Help() {
  return (
    <section className="simple-page">
      <div className="container">
        <div className="simple-card">
          <h1>Help Center</h1>
          <p>
            Welcome to SmartShop Help Center. Here users can find information
            about orders, shipping, returns, payments, and supplier support.
          </p>

          <div className="simple-grid">
            <div>
              <h3>Orders</h3>
              <p>Track your orders and manage your shopping cart.</p>
            </div>

            <div>
              <h3>Shipping</h3>
              <p>We support worldwide shipping from verified suppliers.</p>
            </div>

            <div>
              <h3>Returns</h3>
              <p>Customers can request refunds and returns for eligible items.</p>
            </div>
          </div>

          <Link to="/products" className="figma-primary-btn">
            Continue Shopping
          </Link>
        </div>
      </div>
    </section>
  );
}

export default Help;