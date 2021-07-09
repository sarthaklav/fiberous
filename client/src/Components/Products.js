import { useCart } from "../Contexts/cart-context";
import products from "../data";

export function Products() {
  const { dispatch } = useCart();
  return (
    <>
      <div className="products-page">
        <div className="side-nav">
          <aside className="">
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
                  <input className="float-left" type="checkbox" />
                  Up to 5%
                </label>
              </div>
              <div>
                <label className="float-left">
                  <input className="float-left" type="checkbox" />
                  5%-15%
                </label>
              </div>
              <div>
                <label className="float-left">
                  <input className="float-left" type="checkbox" />
                  15%-25%
                </label>
              </div>
              <div>
                <label className="float-left">
                  <input className="float-left" type="checkbox" />
                  More than 25%
                </label>
              </div>
            </div>
          </aside>
        </div>
        <div className="container-products">
          {products.map((product) => (
            <div
              className="card"
              style={{ margin: "1rem", flex: "200px", minWidth: "100px" }}
            >
              <img src={`${product.image}`} alt="product image" />

              <div className="card-details">
                <h4 className="side-nav-heading">{product.name}</h4>
                <span>
                  Rs.{product.price} for {product.packet}{" "}
                </span>
              </div>
              <button
                onClick={() =>
                  dispatch({ type: "ADD_TO_CART", payload: product })
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
