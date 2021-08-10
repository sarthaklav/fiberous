import { NavLink } from "react-router-dom";
import { useCart } from "../Contexts/cart-context";

export function ProductCard({ product }) {
  const { cartDispatch } = useCart();
  return (
    <div
      key={product.id}
      className="card"
      style={!product.inStock ? { opacity: "0.4" } : {}}
    >
      <div class="card-img-container badge-applied-on">
        <img src={`${product.image}`} alt="product" />
        <div class="badge-on-card">
          {product.fastDelivery && <span>Fast Delivery</span>}
          {!product.inStock && (
            <p class="card-text-over-card-img" style={{ color: "red" }}>
              Out of stock{" "}
            </p>
          )}
        </div>
      </div>

      <div className="card-details">
        <NavLink to={`/products/${product.id}`}>
          <h4 className="side-nav-heading">{product.name}</h4>
          <div>
            Rs.{product.price}
            <span className="packet-quantity">
              {" "}
              for {product.packetQuantity}
            </span>
          </div>
          <div className="offer">
            Offer:
            {product.offer}% Off
          </div>
          <p style={{ color: "red" }}></p>
          <p>{product.category}</p>{" "}
        </NavLink>
      </div>
      {product.inStock && (
        <button
          onClick={() =>
            cartDispatch({ type: "ADD_TO_CART", payload: product })
          }
          className="btn btn-secondary"
        >
          Add to cart
        </button>
      )}
    </div>
  );
}
