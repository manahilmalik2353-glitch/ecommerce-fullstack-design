import { useEffect, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import ProductCard from "../components/ProductCard";
import { getProducts } from "../services/api";

function Products() {
  const [searchParams] = useSearchParams();
  const [products, setProducts] = useState([]);
  const [searchText, setSearchText] = useState(searchParams.get("search") || "");
  const [selectedCategory, setSelectedCategory] = useState(
    searchParams.get("category") || "All"
  );
  const [viewMode, setViewMode] = useState(() =>
    window.innerWidth <= 700 ? "list" : "grid"
  );
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const categories = [
    "All",
    "Electronics",
    "Smartphones",
    "Computer and tech",
    "Clothes and wear",
    "Home interiors",
    "Accessories",
  ];

  const brands = ["Samsung", "Apple", "Huawei", "Pocco", "Lenovo", "Canon"];
  useEffect(() => {
    setSearchText(searchParams.get("search") || "");
    setSelectedCategory(searchParams.get("category") || "All");
  }, [searchParams]);
  useEffect(() => {
    async function loadProducts() {
      try {
        setLoading(true);
        setError("");

        const data = await getProducts({
          search: searchText,
          category: selectedCategory,
        });

        setProducts(data);
      } catch (err) {
        setError("Products load nahi ho rahe. Backend server check karo.");
      } finally {
        setLoading(false);
      }
    }

    loadProducts();
  }, [searchText, selectedCategory]);

  return (
    <section className="figma-products-page">
      <div className="container">
        <div className="breadcrumb">
          Home &gt; Clothing &gt; Men's wear &gt; Summer clothing
        </div>

        <div className="products-layout">
          <aside className="filter-sidebar">
            <div className="filter-group">
              <h4>Category</h4>

              {categories.map((category) => (
                <button
                  key={category}
                  className={selectedCategory === category ? "active-filter" : ""}
                  onClick={() => setSelectedCategory(category)}
                >
                  {category}
                </button>
              ))}

              <span className="see-all">See all</span>
            </div>

            <div className="filter-group">
              <h4>Brands</h4>

              {brands.map((brand) => (
                <label key={brand}>
                  <input type="checkbox" />
                  {brand}
                </label>
              ))}

              <span className="see-all">See all</span>
            </div>

            <div className="filter-group">
              <h4>Features</h4>
              <label><input type="checkbox" /> Metallic</label>
              <label><input type="checkbox" /> Plastic cover</label>
              <label><input type="checkbox" /> 8GB RAM</label>
              <label><input type="checkbox" /> Super power</label>
              <label><input type="checkbox" /> Large Memory</label>
            </div>

            <div className="filter-group">
              <h4>Price range</h4>
              <input type="range" />
              <div className="price-inputs">
                <input placeholder="Min" />
                <input placeholder="Max" />
              </div>
              <button className="apply-btn">Apply</button>
            </div>

            <div className="filter-group">
              <h4>Condition</h4>
              <label><input type="radio" name="condition" defaultChecked /> Any</label>
              <label><input type="radio" name="condition" /> Refurbished</label>
              <label><input type="radio" name="condition" /> Brand new</label>
              <label><input type="radio" name="condition" /> Old items</label>
            </div>
          </aside>

          <main className="products-main">
            <div className="products-topbar">
              <h2>{products.length} items in Mobile accessory</h2>

              <div className="topbar-actions">
                <label className="verified-check">
                  <input type="checkbox" defaultChecked />
                  Verified only
                </label>

                <select>
                  <option>Featured</option>
                  <option>Newest</option>
                  <option>Low to high</option>
                  <option>High to low</option>
                </select>

                <button
                  className={viewMode === "grid" ? "view-btn active" : "view-btn"}
                  onClick={() => setViewMode("grid")}
                >
                  ▦
                </button>

                <button
                  className={viewMode === "list" ? "view-btn active" : "view-btn"}
                  onClick={() => setViewMode("list")}
                >
                  ☰
                </button>
              </div>
            </div>

            <div className="active-filters">
              <span>Samsung ×</span>
              <span>Apple ×</span>
              <span>Pocco ×</span>
              <span>Metallic ×</span>

              <button
                onClick={() => {
                  setSearchText("");
                  setSelectedCategory("All");
                }}
              >
                Clear all filter
              </button>
            </div>

            <div className="product-search-line">
              <input
                type="text"
                placeholder="Search product name, brand or category..."
                value={searchText}
                onChange={(event) => setSearchText(event.target.value)}
              />
            </div>

            {loading && (
              <div className="empty-box">
                <h3>Loading products...</h3>
              </div>
            )}

            {error && (
              <div className="empty-box">
                <h3>{error}</h3>
              </div>
            )}

            {!loading && !error && products.length === 0 && (
              <div className="empty-box">
                <h3>No products found</h3>
                <p>Try another product name, brand, or category.</p>
              </div>
            )}

            {!loading && !error && viewMode === "grid" && (
              <div className="figma-products-grid">
                {products.map((product) => (
                  <ProductCard product={product} key={product._id} />
                ))}
              </div>
            )}

            {!loading && !error && viewMode === "list" && (
              <div className="figma-products-list">
                {products.map((product) => (
                  <div className="list-product-card" key={product._id}>
                    <Link to={`/products/${product._id}`} className="list-img">
                      <img src={product.image} alt={product.name} />
                    </Link>

                    <div className="list-info">
                      <Link to={`/products/${product._id}`}>
                        <h3>{product.name}</h3>
                      </Link>

                      <div className="list-price">
                        <strong>${product.price.toFixed(2)}</strong>
                        <span>${product.oldPrice.toFixed(2)}</span>
                      </div>

                      <div className="list-rating">
                        <span>★★★★★</span>
                        <small>{product.rating}</small>
                        <small>{product.orders} orders</small>
                        <b>Free Shipping</b>
                      </div>

                      <p>{product.description}</p>

                      <Link to={`/products/${product._id}`} className="view-details">
                        View details
                      </Link>
                    </div>

                    <button className="heart-btn">♡</button>
                  </div>
                ))}
              </div>
            )}

            <div className="pagination-row">
              <select>
                <option>Show 10</option>
                <option>Show 20</option>
              </select>

              <div className="pagination">
                <button>‹</button>
                <button className="active-page">1</button>
                <button>2</button>
                <button>3</button>
                <button>›</button>
              </div>
            </div>
          </main>
        </div>
      </div>
    </section>
  );
}

export default Products;