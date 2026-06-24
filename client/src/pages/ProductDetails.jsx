import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { getProductById, getProducts } from "../services/api";
import { useCart } from "../context/CartContext";

function ProductDetails() {
  const { id } = useParams();
  const { addToCart } = useCart();

  const [product, setProduct] = useState(null);
  const [relatedProducts, setRelatedProducts] = useState([]);
  const [suggestedProducts, setSuggestedProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    async function loadProductDetails() {
      try {
        setLoading(true);
        setError("");

        const productData = await getProductById(id);
        const allProducts = await getProducts();

        setProduct(productData);

        const otherProducts = allProducts.filter((item) => item._id !== id);

        setRelatedProducts(otherProducts.slice(0, 6));
        setSuggestedProducts(otherProducts.slice(0, 5));
      } catch (err) {
        setError("Product details load nahi ho rahe. Backend check karo.");
      } finally {
        setLoading(false);
      }
    }

    loadProductDetails();
  }, [id]);

  if (loading) {
    return (
      <section className="figma-detail-page">
        <div className="container empty-box">
          <h2>Loading product details...</h2>
        </div>
      </section>
    );
  }

  if (error || !product) {
    return (
      <section className="figma-detail-page">
        <div className="container empty-box">
          <h2>{error || "Product not found"}</h2>
          <Link to="/products" className="figma-primary-btn">
            Back to Products
          </Link>
        </div>
      </section>
    );
  }

  return (
    <section className="figma-detail-page">
      <div className="container">
        <div className="breadcrumb">
          Home &gt; Products &gt; {product.category} &gt; {product.name}
        </div>

        <div className="detail-main-card">
          <div className="detail-gallery">
            <div className="detail-main-image">
              <img src={product.image} alt={product.name} />
            </div>

            <div className="detail-thumbnails">
              {[1, 2, 3, 4, 5, 6].map((thumb) => (
                <button key={thumb}>
                  <img src={product.image} alt={product.name} />
                </button>
              ))}
            </div>
          </div>

          <div className="detail-info">
            <p className="stock-status">✓ In stock</p>

            <h1>{product.name}</h1>

            <div className="detail-rating-row">
              <span>★★★★★</span>
              <b>{product.rating}</b>
              <small>32 reviews</small>
              <small>{product.orders} sold</small>
            </div>

            <div className="price-box">
              <div>
                <strong>${product.price.toFixed(2)}</strong>
                <span>50-100 pcs</span>
              </div>

              <div>
                <strong>${(product.price * 0.92).toFixed(2)}</strong>
                <span>100-700 pcs</span>
              </div>

              <div>
                <strong>${(product.price * 0.85).toFixed(2)}</strong>
                <span>700+ pcs</span>
              </div>
            </div>

            <div className="detail-table">
              <div>
                <span>Price:</span>
                <p>Negotiable</p>
              </div>

              <div>
                <span>Type:</span>
                <p>{product.category}</p>
              </div>

              <div>
                <span>Brand:</span>
                <p>{product.brand}</p>
              </div>

              <div>
                <span>Stock:</span>
                <p>{product.stock} items available</p>
              </div>

              <div>
                <span>Material:</span>
                <p>Premium material</p>
              </div>

              <div>
                <span>Design:</span>
                <p>Modern nice</p>
              </div>

              <div>
                <span>Warranty:</span>
                <p>2 years full warranty</p>
              </div>
            </div>
          </div>

          <aside className="supplier-card">
            <div className="supplier-top">
              <div className="supplier-avatar">R</div>
              <div>
                <p>Supplier</p>
                <h4>Guangji Trading LLC</h4>
              </div>
            </div>

            <div className="supplier-meta">
              <p>🇩🇪 Germany, Berlin</p>
              <p>✓ Verified Seller</p>
              <p>🌐 Worldwide shipping</p>
            </div>

            <button className="figma-primary-btn">Send inquiry</button>

            <button
              className="figma-outline-btn"
              onClick={() => addToCart(product)}
            >
              Add to cart
            </button>

            <Link to="/products" className="seller-profile-link">
              Seller's profile
            </Link>

            <button className="save-later-btn">♡ Save for later</button>
          </aside>
        </div>

        <div className="detail-lower-layout">
          <div className="detail-description-card">
            <div className="tabs">
              <button className="active">Description</button>
              <button>Reviews</button>
              <button>Shipping</button>
              <button>About seller</button>
            </div>

            <div className="description-content">
              <p>
                {product.description} This product is suitable for modern
                ecommerce customers who need reliable quality, professional
                design, and practical daily usage.
              </p>

              <table>
                <tbody>
                  <tr>
                    <td>Model</td>
                    <td>#{product._id.slice(-6)}</td>
                  </tr>
                  <tr>
                    <td>Style</td>
                    <td>Classic style</td>
                  </tr>
                  <tr>
                    <td>Certificate</td>
                    <td>ISO-898921212</td>
                  </tr>
                  <tr>
                    <td>Category</td>
                    <td>{product.category}</td>
                  </tr>
                  <tr>
                    <td>Brand</td>
                    <td>{product.brand}</td>
                  </tr>
                </tbody>
              </table>

              <ul>
                <li>Premium quality product</li>
                <li>Fast and secure shipping support</li>
                <li>Available from verified supplier</li>
                <li>Suitable for online marketplace customers</li>
              </ul>
            </div>
          </div>

          <aside className="you-may-like">
            <h3>You may like</h3>

            {suggestedProducts.map((item) => (
              <Link
                to={`/products/${item._id}`}
                className="suggested-item"
                key={item._id}
              >
                <img src={item.image} alt={item.name} />

                <div>
                  <h4>{item.name.split(" ").slice(0, 3).join(" ")}</h4>
                  <p>${item.price.toFixed(2)} - ${item.oldPrice.toFixed(2)}</p>
                </div>
              </Link>
            ))}
          </aside>
        </div>

        <div className="related-products-card">
          <h3>Related products</h3>

          <div className="related-products-grid">
            {relatedProducts.map((item) => (
              <Link
                to={`/products/${item._id}`}
                className="related-item"
                key={item._id}
              >
                <img src={item.image} alt={item.name} />
                <h4>{item.name.split(" ").slice(0, 3).join(" ")}</h4>
                <p>${item.price.toFixed(2)}-${item.oldPrice.toFixed(2)}</p>
              </Link>
            ))}
          </div>
        </div>

        <div className="discount-banner">
          <div>
            <h3>Super discount on more than 100 USD</h3>
            <p>Have you ever finally just write dummy info</p>
          </div>

          <Link to="/products">Shop now</Link>
        </div>
      </div>
    </section>
  );
}

export default ProductDetails;