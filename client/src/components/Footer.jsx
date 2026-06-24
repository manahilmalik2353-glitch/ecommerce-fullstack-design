import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="figma-footer">
      <div className="container footer-grid">
        <div className="footer-brand">
          <Link to="/" className="brand-logo">
            <span className="brand-icon">B</span>
            <strong>Brand</strong>
          </Link>

          <p>
            Best information about the company gies here but now lorem ipsum is
            fintingyt
          </p>

          <div className="social-row">
            <span>f</span>
            <span>t</span>
            <span>in</span>
            <span>ig</span>
            <span>yt</span>
          </div>
        </div>

        <div>
          <h3>About</h3>
          <Link>About Us</Link>
          <Link>Find store</Link>
          <Link>Categories</Link>
          <Link>Blogs</Link>
        </div>

        <div>
          <h3>Partnership</h3>
          <Link>About Us</Link>
          <Link>Find store</Link>
          <Link>Categories</Link>
          <Link>Blogs</Link>
        </div>

        <div>
          <h3>Information</h3>
          <Link>Help Center</Link>
          <Link>Money Refund</Link>
          <Link>Shipping</Link>
          <Link>Contact us</Link>
        </div>

        <div>
          <h3>For users</h3>
          <Link to="/login">Login</Link>
          <Link to="/signup">Register</Link>
          <Link>Settings</Link>
          <Link>My Orders</Link>
        </div>

        <div>
          <h3>Get app</h3>
          <button>App Store</button>
          <button>Google Play</button>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="container footer-bottom-inner">
          <p>© 2023 Ecommerce.</p>
          <p>🇺🇸 English</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;