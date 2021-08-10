import { NavLink } from "react-router-dom";
import { useCart } from "../Contexts/cart-context";
import products from "../data";
export function ProductCard({ product }) {
  const { cartDispatch } = useCart();
  return (
    <div
      key={product.id}
      className="card"
      style={{ margin: "1rem", flex: "200px", minWidth: "100px" }}
    >
      <img src={`${product.image}`} alt="product" />

      <div className="card-details">
        <NavLink to={`/products/${product.id}`}>
          <h4 className="side-nav-heading">{product.name}</h4>
        </NavLink>
        <span>
          Rs.{product.price} for {product.packet}{" "}
        </span>
        {!product.inStock && <p style={{ color: "red" }}>Out of stock </p>}
        {product.fastDelivery && <p>Fast Delivery available</p>}
        <p style={{ color: "red" }}>{product.offer}</p>

        <p>{product.category}</p>
      </div>
      <button
        onClick={() => cartDispatch({ type: "ADD_TO_CART", payload: product })}
        className="btn btn-secondary"
      >
        Add to cart
      </button>
    </div>
  );
}
