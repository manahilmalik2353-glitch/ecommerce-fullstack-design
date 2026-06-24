import { useEffect, useState } from "react";
import {
  createProduct,
  deleteProduct,
  getProducts,
  updateProduct,
} from "../services/api";
import { useAuth } from "../context/AuthContext";

const emptyForm = {
  name: "",
  price: "",
  oldPrice: "",
  image: "",
  description: "",
  category: "Electronics",
  brand: "",
  rating: "",
  orders: "",
  stock: "",
};

function AdminDashboard() {
  const { user, logout } = useAuth();

  const [products, setProducts] = useState([]);
  const [formData, setFormData] = useState(emptyForm);
  const [editingId, setEditingId] = useState(null);
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  async function loadProducts() {
    try {
      const data = await getProducts();
      setProducts(data);
    } catch (err) {
      setError(err.message);
    }
  }

  useEffect(() => {
    loadProducts();
  }, []);

  function handleChange(event) {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  }

  function prepareProductData() {
    return {
      name: formData.name,
      price: Number(formData.price),
      oldPrice: Number(formData.oldPrice || 0),
      image: formData.image,
      description: formData.description,
      category: formData.category,
      brand: formData.brand,
      rating: Number(formData.rating || 4.5),
      orders: Number(formData.orders || 100),
      stock: Number(formData.stock),
    };
  }

  async function handleSubmit(event) {
    event.preventDefault();

    try {
      setMessage("");
      setError("");

      const productData = prepareProductData();

      if (editingId) {
        await updateProduct(editingId, productData);
        setMessage("Product updated successfully");
      } else {
        await createProduct(productData);
        setMessage("Product added successfully");
      }

      setFormData(emptyForm);
      setEditingId(null);
      loadProducts();
    } catch (err) {
      setError(err.message);
    }
  }

  function handleEdit(product) {
    setEditingId(product._id);

    setFormData({
      name: product.name || "",
      price: product.price || "",
      oldPrice: product.oldPrice || "",
      image: product.image || "",
      description: product.description || "",
      category: product.category || "Electronics",
      brand: product.brand || "",
      rating: product.rating || "",
      orders: product.orders || "",
      stock: product.stock || "",
    });

    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  async function handleDelete(id) {
    const confirmDelete = window.confirm("Are you sure you want to delete this product?");

    if (!confirmDelete) return;

    try {
      setMessage("");
      setError("");

      await deleteProduct(id);
      setMessage("Product deleted successfully");
      loadProducts();
    } catch (err) {
      setError(err.message);
    }
  }

  function handleCancelEdit() {
    setEditingId(null);
    setFormData(emptyForm);
  }

  return (
    <section className="admin-page">
      <div className="container">
        <div className="admin-header">
          <div>
            <h1>Admin Dashboard</h1>
            <p>Logged in as {user?.email}</p>
          </div>

          <button className="figma-outline-btn" onClick={logout}>
            Logout
          </button>
        </div>

        <div className="admin-grid">
          <div className="admin-form-card">
            <h2>{editingId ? "Edit Product" : "Add New Product"}</h2>

            {message && <div className="auth-success">{message}</div>}
            {error && <div className="auth-error">{error}</div>}

            <form onSubmit={handleSubmit}>
              <label>Product Name</label>
              <input
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Wireless headphones"
                required
              />

              <div className="admin-two-cols">
                <div>
                  <label>Price</label>
                  <input
                    type="number"
                    name="price"
                    value={formData.price}
                    onChange={handleChange}
                    placeholder="99"
                    required
                  />
                </div>

                <div>
                  <label>Old Price</label>
                  <input
                    type="number"
                    name="oldPrice"
                    value={formData.oldPrice}
                    onChange={handleChange}
                    placeholder="129"
                  />
                </div>
              </div>

              <label>Image URL</label>
              <input
                name="image"
                value={formData.image}
                onChange={handleChange}
                placeholder="/images/headset.png"
                required
              />

              <label>Description</label>
              <textarea
                name="description"
                value={formData.description}
                onChange={handleChange}
                placeholder="Product description..."
                required
              />

              <div className="admin-two-cols">
                <div>
                  <label>Category</label>
                  <select
                    name="category"
                    value={formData.category}
                    onChange={handleChange}
                  >
                    <option>Electronics</option>
                    <option>Smartphones</option>
                    <option>Computer and tech</option>
                    <option>Clothes and wear</option>
                    <option>Home interiors</option>
                    <option>Accessories</option>
                  </select>
                </div>

                <div>
                  <label>Brand</label>
                  <input
                    name="brand"
                    value={formData.brand}
                    onChange={handleChange}
                    placeholder="Samsung"
                    required
                  />
                </div>
              </div>

              <div className="admin-two-cols">
                <div>
                  <label>Rating</label>
                  <input
                    type="number"
                    step="0.1"
                    name="rating"
                    value={formData.rating}
                    onChange={handleChange}
                    placeholder="4.8"
                  />
                </div>

                <div>
                  <label>Orders</label>
                  <input
                    type="number"
                    name="orders"
                    value={formData.orders}
                    onChange={handleChange}
                    placeholder="154"
                  />
                </div>
              </div>

              <label>Stock</label>
              <input
                type="number"
                name="stock"
                value={formData.stock}
                onChange={handleChange}
                placeholder="50"
                required
              />

              <button type="submit" className="figma-primary-btn">
                {editingId ? "Update Product" : "Add Product"}
              </button>

              {editingId && (
                <button
                  type="button"
                  className="figma-outline-btn"
                  onClick={handleCancelEdit}
                >
                  Cancel Edit
                </button>
              )}
            </form>
          </div>

          <div className="admin-products-card">
            <h2>Manage Products</h2>

            <div className="admin-products-list">
              {products.map((product) => (
                <div className="admin-product-row" key={product._id}>
                  <img src={product.image} alt={product.name} />

                  <div>
                    <h3>{product.name}</h3>
                    <p>
                      ${product.price} · {product.category} · Stock:{" "}
                      {product.stock}
                    </p>
                  </div>

                  <div className="admin-actions">
                    <button onClick={() => handleEdit(product)}>Edit</button>
                    <button onClick={() => handleDelete(product._id)}>
                      Delete
                    </button>
                  </div>
                </div>
              ))}

              {products.length === 0 && <p>No products found.</p>}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AdminDashboard;