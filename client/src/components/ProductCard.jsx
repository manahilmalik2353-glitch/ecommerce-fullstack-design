import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";

function ProductCard({ product }) {
  const { addToCart } = useCart();
  const productId = product._id || product.id;

  return (
    <div className="figma-product-card">
      <Link to={`/products/${productId}`} className="figma-product-img">
        <img src={product.image} alt={product.name} />
      </Link>

      <div className="figma-product-info">
        <div className="price-row">
          <strong>${product.price.toFixed(2)}</strong>
          {product.oldPrice > 0 && <span>${product.oldPrice.toFixed(2)}</span>}
        </div>

        <div className="rating-row">
          <span>★★★★★</span>
          <small>{product.rating}</small>
        </div>

        <Link to={`/products/${productId}`} className="figma-product-title">
          {product.name}
        </Link>

        <button className="mini-cart-btn" onClick={() => addToCart(product)}>
          🛒 Add to cart
        </button>
      </div>
    </div>
  );
}

export default ProductCard;