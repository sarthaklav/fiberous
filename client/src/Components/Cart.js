import { useCart } from "../Contexts/cart-context.js";

export function Cart() {
  const { cart, dispatch } = useCart();
  return (
    <>
      <div className="cart">
        <div className="cart-head">
          <div className="description cart-pill">Item Description</div>
          <div className="price cart-pill">Unit Price</div>
          <div className="quantity cart-pill">Quantity</div>
          <div className="subtotal cart-pill">Sub Total</div>
          <div className="savings cart-pill">Savings</div>
        </div>
        {cart.map((item) => {
          return (
            <div className="cart-item">
              <div className="description">
                <div>
                  <img style={{ width: "150px" }} src={`${item.image}`} />
                </div>
                <div>
                  <h4 className="cart-pill">{item.name}</h4>
                </div>
              </div>
              <div className="price cart-pill">
                <div>Rs {item.price}</div>
              </div>
              <div className="quantity cart-pill">
                <div>
                  <button
                    disabled={item.quantity <= 1}
                    onClick={() =>
                      dispatch({ type: "DECREMENT_QUANTITY", payload: item.id })
                    }
                  >
                    -
                  </button>
                  <span>{item.quantity}</span>
                  <button
                    onClick={() =>
                      dispatch({ type: "INCREMENT_QUANTITY", payload: item.id })
                    }
                  >
                    +
                  </button>
                </div>
              </div>
              <div className="subtotal cart-pill">
                <div> Rs {item.price * item.quantity} </div>
              </div>
              <div className="savings cart-pill">
                <div>savings</div>
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
            </div>
          );
        })}
      </div>
    </>
  );
}
