import { Link } from "react-router-dom";
import { products } from "../data/products";
import { useCart } from "../context/CartContext";

function Cart() {
  const {
    cartItems,
    removeFromCart,
    increaseQuantity,
    decreaseQuantity,
    clearCart,
    cartTotal,
    addToCart,
getProductId,
  } = useCart();

  const savedProducts = products.slice(2, 6);
  const discount = cartTotal > 0 ? 60 : 0;
  const tax = cartTotal > 0 ? 14 : 0;
  const finalTotal = cartTotal - discount + tax;

  return (
    <section className="figma-cart-page">
      <div className="container">
        <h1 className="cart-title">My cart ({cartItems.length})</h1>

        <div className="cart-main-layout">
          <div className="cart-left-card">
            {cartItems.length === 0 ? (
              <div className="cart-empty-state">
                <h2>Your cart is empty</h2>
                <p>Add products to your cart and they will appear here.</p>
                <Link to="/products" className="back-shop-btn">
                  ← Back to shop
                </Link>
              </div>
            ) : (
              <>
                {cartItems.map((item) => (
                  <div className="figma-cart-item" key={getProductId(item)}>
                    <img src={item.image} alt={item.name} />

                    <div className="cart-item-details">
                      <h3>{item.name}</h3>
                      <p>Size: medium, Color: blue, Material: Plastic</p>
                      <p>Seller: Artel Market</p>

                      <div className="cart-actions">
                        <button onClick={() => removeFromCart(item.removeFromCart(getProductId(item)))}>
                          Remove
                        </button>
                        <button>Save for later</button>
                      </div>
                    </div>

                    <div className="cart-item-side">
                      <strong>${(item.price * item.quantity).toFixed(2)}</strong>

                      <div className="cart-qty-box">
                        <button onClick={() => decreaseQuantity(getProductId(item))}>-</button>
                        <span>Qty: {item.quantity}</span>
                        <button onClick={() => increaseQuantity(getProductId(item))}>+</button>
                      </div>
                    </div>
                  </div>
                ))}

                <div className="cart-bottom-actions">
                  <Link to="/products" className="back-shop-btn">
                    ← Back to shop
                  </Link>

                  <button className="remove-all-btn" onClick={clearCart}>
                    Remove all
                  </button>
                </div>
              </>
            )}
          </div>

          <aside className="cart-summary-area">
            <div className="coupon-card">
              <p>Have a coupon?</p>
              <div>
                <input type="text" placeholder="Add coupon" />
                <button>Apply</button>
              </div>
            </div>

            <div className="summary-card">
              <div className="summary-line">
                <span>Subtotal:</span>
                <strong>${cartTotal.toFixed(2)}</strong>
              </div>

              <div className="summary-line discount">
                <span>Discount:</span>
                <strong>-${discount.toFixed(2)}</strong>
              </div>

              <div className="summary-line tax">
                <span>Tax:</span>
                <strong>+${tax.toFixed(2)}</strong>
              </div>

              <div className="summary-total">
                <span>Total:</span>
                <strong>${finalTotal > 0 ? finalTotal.toFixed(2) : "0.00"}</strong>
              </div>

              <button className="checkout-btn">Checkout</button>

              <div className="payment-row">
                <span>💳</span>
                <span>🏦</span>
                <span>🅿️</span>
                <span>💰</span>
              </div>
            </div>
          </aside>
        </div>

        <div className="cart-services">
          <div>
            <span>🔒</span>
            <div>
              <h4>Secure payment</h4>
              <p>Have you ever finally just</p>
            </div>
          </div>

          <div>
            <span>💬</span>
            <div>
              <h4>Customer support</h4>
              <p>Have you ever finally just</p>
            </div>
          </div>

          <div>
            <span>🚚</span>
            <div>
              <h4>Free delivery</h4>
              <p>Have you ever finally just</p>
            </div>
          </div>
        </div>

        <section className="saved-section">
          <h2>Saved for later</h2>

          <div className="saved-grid">
            {savedProducts.map((product) => (
              <div className="saved-card" key={product.id}>
                <Link to={`/products/${product.id}`} className="saved-img">
                  <img src={product.image} alt={product.name} />
                </Link>

                <strong>${product.price.toFixed(2)}</strong>
                <p>{product.name}</p>

                <button onClick={() => addToCart(product)}>
                  🛒 Move to cart
                </button>
              </div>
            ))}
          </div>
        </section>

        <div className="discount-banner cart-discount">
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

export default Cart;