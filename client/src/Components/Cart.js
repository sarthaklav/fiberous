import { useCart } from "../Contexts/cart-context.js";
import { NavLink, Link } from "react-router-dom";
export function Cart() {
  const { cart, dispatch } = useCart();
  console.log(`cart length is ${cart.length} from line 3`);
  function getTotalPrice() {
    const Total = cart.reduce((acc, item) => {
      return (
        acc +
        item.quantity *
          (item.inOffer
            ? item.price - (item.price * item.offer) / 100
            : item.price)
      );
    }, 0);
    return Total;
  }
  function getTotalSavings() {
    const TotalSavings = cart.reduce((acc, item) => {
      if (item.inOffer) {
        return acc + (item.price * item.offer) / 100;
      }
      return acc;
    }, 0);
    return TotalSavings;
  }

  return cart.length === 0 ? (
    <h3>
      There is nothing to show in cart. Browse{" "}
      <Link to={"/products"}>products</Link> to add
    </h3>
  ) : (
    <>
      <div className="cart">
        <div className="cart-head">
          <div className="description cart-pill">Item Description</div>
          <div className="price cart-pill">Unit Price</div>
          <div className="quantity cart-pill">Quantity</div>
          <div className="subtotal cart-pill">Sub Total</div>
          <div className="savings savings-head cart-pill">Savings</div>
        </div>
        {cart.map((item) => {
          const effectivePrice = item.inOffer
            ? item.price - (item.price * item.offer) / 100
            : item.price;
          return (
            <div className="cart-item" key={item.id}>
              <div className="description">
                <div>
                  <img src={`${item.image}`} alt="" />
                </div>
                <div>
                  <h4 className="cart-pill">{item.name}</h4>
                </div>
              </div>
              <div className="price cart-pill">
                <div>Rs{effectivePrice}</div>
                {item.inOffer && (
                  <span className="actual-price">Rs. {item.price}</span>
                )}
              </div>
              <div className="quantity cart-pill">
                <div>
                  <button
                    disabled={item.quantity <= 1}
                    onClick={() =>
                      dispatch({
                        type: "DECREMENT_QUANTITY",
                        payload: item.id,
                      })
                    }
                  >
                    -
                  </button>
                  <span>{item.quantity}</span>
                  <button
                    onClick={() =>
                      dispatch({
                        type: "INCREMENT_QUANTITY",
                        payload: item.id,
                      })
                    }
                  >
                    +
                  </button>
                </div>
              </div>
              <div className="subtotal cart-pill">
                <div> Rs {effectivePrice * item.quantity} </div>
              </div>
              <div className="remove cart-pill">
                <span
                  onClick={() =>
                    dispatch({ type: "REMOVE_FROM_CART", payload: item.id })
                  }
                >
                  x
                </span>
              </div>
              <div className="savings savings-data cart-pill">
                <div>
                  {item.inOffer && (
                    <span>
                      You saved Rs.
                      {(item.price * item.offer) / 100}
                    </span>
                  )}
                </div>
              </div>
            </div>
          );
        })}

        <div className="cart-final-options">
          <div className="cart-reset-box">
            <button
              className="btn btn-cancel"
              onClick={() => dispatch({ type: "RESET_CART" })}
            >
              Reset
            </button>
            <NavLink to="/products" className="btn btn-primary">
              Continue Shopping
            </NavLink>
          </div>
          <div className="checkout-box">
            <div className="checkout-box-price">
              <div className="cart-price cart-pill">
                Sub Total Rs. {getTotalPrice()}
              </div>
              <div className="cart-savings-price cart-pill">
                Total savings Rs. {getTotalSavings()}{" "}
              </div>
            </div>

            <div>
              <NavLink to="/address" className="btn btn-secondary">
                Checkout
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
