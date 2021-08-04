import { useParams } from "react-router-dom";
import { useCart } from "../Contexts/cart-context";
import products from "../data";
export function ProductDetails() {
  const { id } = useParams();
  const product = products.find((product) => (product.id = id));
  const { dispatch } = useCart();
  return (
    <>
      <div className="card card-horizontal">
        <div className="card-image-container-horizontal">
          <img src={product.image} alt="" />
          <div>
            <button
              className="btn btn-primary"
              onClick={() =>
                dispatch({ type: "ADD_TO_CART", payload: product })
              }
            >
              Add to cart
            </button>
          </div>
        </div>

        <div>
          <h3>{product.name}</h3>
          <p>{product.description}</p>
          <p>Rs {product.price}</p>
        </div>
      </div>
    </>
  );
}
