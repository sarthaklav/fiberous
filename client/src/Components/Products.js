import { useReducer } from "react";
import { NavLink } from "react-router-dom";
import { useCart } from "../Contexts/cart-context";
import products from "../data";
function viewReducer(state, action) {
  switch (action.type) {
    case "SORT":
      return { ...state, sortBy: action.payload };
    case "TOGGLE_INVENTORY":
      return { ...state, showAllInventory: !state.showAllInventory };
    case "TOGGLE_DELIVERY":
      return { ...state, showFastDelivery: !state.showFastDelivery };
    default:
      return state;
  }
}

function getSortedData(productList, sortBy) {
  if (sortBy && sortBy === "PRICE_LOW_TO_HIGH")
    return productList.sort((a, b) => a["price"] - b["price"]);
  else if (sortBy === "PRICE_HIGH_TO_LOW")
    return productList.sort((a, b) => b["price"] - a["price"]);
  return productList;
}
function getFilteredProducts(
  sortedProducts,
  { showAllInventory, showFastDelivery }
) {
  return sortedProducts
    .filter(({ inStock }) => (showAllInventory ? true : inStock))
    .filter(({ fastDelivery }) => (showFastDelivery ? fastDelivery : true));
}

export function Products() {
  const { dispatch: cartDispatch } = useCart();
  const [{ sortBy, showAllInventory, showFastDelivery }, viewDispatch] =
    useReducer(viewReducer, {
      sortBy: null,
      showAllInventory: true,
      showFastDelivery: false,
    });
  const sortedProducts = getSortedData(products, sortBy);
  const filteredProducts = getFilteredProducts(sortedProducts, {
    showAllInventory,
    showFastDelivery,
  });
  return (
    <>
      <div className="products-page">
        <div className="side-nav">
          <aside className="">
            <div>
              <h4 className="side-nav-heading">Sort by</h4>
              <div>
                <label className="float-left">
                  <input
                    className="float-left"
                    type="radio"
                    name="sort"
                    onChange={() =>
                      viewDispatch({
                        type: "SORT",
                        payload: "PRICE_LOW_TO_HIGH",
                      })
                    }
                    checked={sortBy && sortBy === "PRICE_LOW_TO_HIGH"}
                  />
                  Price-Low to high
                </label>
              </div>
              <div>
                <label className="float-left">
                  <input
                    className="float-left"
                    type="radio"
                    name="sort"
                    onChange={() =>
                      viewDispatch({
                        type: "SORT",
                        payload: "PRICE_HIGH_TO_LOW",
                      })
                    }
                    checked={sortBy && sortBy === "PRICE_HIGH_TO_LOW"}
                  />
                  Price-High to low
                </label>
              </div>
            </div>
            <div>
              <h4 className="side-nav-heading">Seasonal </h4>
              <div>
                <label className="float-left">
                  <input
                    className="float-left"
                    type="checkbox"
                    onChange={() => viewDispatch({ type: "TOGGLE_INVENTORY" })}
                    checked={showAllInventory}
                  />
                  Include Out of Stock
                </label>
              </div>
              <div>
                <label className="float-left">
                  <input
                    className="float-left"
                    type="checkbox"
                    checked={showFastDelivery}
                    onChange={() => viewDispatch({ type: "TOGGLE_DELIVERY" })}
                  />
                  Fast Delivery
                </label>
              </div>
            </div>
            <div>
              <h4 className="side-nav-heading">Seasonal </h4>
              <div>
                <label className="float-left">
                  <input className="float-left" type="checkbox" />
                  Winter Fruits
                </label>
              </div>
              <div>
                <label className="float-left">
                  <input className="float-left" type="checkbox" />
                  Winter Veggies
                </label>
              </div>

              <div>
                <label className="float-left">
                  <input className="float-left" type="checkbox" />
                  Summer Fruits
                </label>
              </div>
              <div>
                <label className="float-left">
                  <input className="float-left" type="checkbox" />
                  Summer Veggies
                </label>
              </div>
            </div>

            <div>
              <h4 className="side-nav-heading">Price</h4>
              <div>
                <label className="float-left">
                  <input className="float-left" type="checkbox" />
                  Less than Rs.20
                </label>
              </div>
              <div>
                <label className="float-left">
                  <input className="float-left" type="checkbox" />
                  Rs.21 to Rs.50
                </label>
              </div>
              <div>
                <label className="float-left">
                  <input className="float-left" type="checkbox" />
                  Rs.51 to Rs.100
                </label>
              </div>
              <div>
                <label className="float-left">
                  <input className="float-left" type="checkbox" />
                  Rs.101 to Rs.200
                </label>
              </div>
            </div>
            <div>
              <h4 className="side-nav-heading">Discount</h4>
              <div>
                <label className="float-left">
                  <input
                    className="float-left"
                    type="checkbox"
                    onChange={() =>
                      viewDispatch({
                        type: "TOGGLE_OFFER_FILTER",
                        payload: "fivePercent",
                      })
                    }
                    checked
                  />
                  Up to 5%
                </label>
              </div>
              <div>
                <label className="float-left">
                  <input
                    className="float-left"
                    type="checkbox"
                    onChange={() =>
                      viewDispatch({
                        type: "TOGGLE_OFFER_FILTER",
                        payload: "tenPercent",
                      })
                    }
                    checked
                  />
                  10% off
                </label>
              </div>
              <div>
                <label className="float-left">
                  <input
                    className="float-left"
                    type="checkbox"
                    onChange={() =>
                      viewDispatch({
                        type: "TOGGLE_OFFER_FILTER",
                        payload: "fifteenPercent",
                      })
                    }
                    checked
                  />
                  15% off
                </label>
              </div>
              <div>
                <label className="float-left">
                  <input
                    className="float-left"
                    type="checkbox"
                    onChange={() =>
                      viewDispatch({
                        type: "TOGGLE_OFFER_FILTER",
                        payload: "20",
                      })
                    }
                    checked
                  />
                  20% off
                </label>
              </div>
              <div>
                <label className="float-left">
                  <input
                    className="float-left"
                    type="checkbox"
                    onChange={() =>
                      viewDispatch({
                        type: "TOGGLE_OFFER_FILTER",
                        payload: "25",
                      })
                    }
                    checked
                  />
                  25% off
                </label>
              </div>
            </div>
          </aside>
        </div>
        <div className="container-products">
          {filteredProducts.map((product) => (
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
                {!product.inStock && (
                  <p style={{ color: "red" }}>Out of stock </p>
                )}
                {product.fastDelivery && <p>Fast Delivery available</p>}
                <p style={{ color: "red" }}>{product.offer}</p>
              </div>
              <button
                onClick={() =>
                  cartDispatch({ type: "ADD_TO_CART", payload: product })
                }
                className="btn btn-secondary"
              >
                Add to cart
              </button>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
