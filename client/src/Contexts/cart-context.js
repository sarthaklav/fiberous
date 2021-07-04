import { createContext, useContext, useReducer } from "react";
// import { cardImage } from "./card-image.jpeg";
const CartContext = createContext();

const cart = [
  {
    id: 1,
    name: "cart wala item",
    image: "http://krisaru.com/wp-content/uploads/2011/06/vege.jpg",
    price: 25,
  },
];

function reducerFunc(state, action) {
  switch (action.type) {
    case "ADD_TO_CART":
      return { ...state, cart: [...state.cart, action.payload] };
    default:
      return state;
  }
}
export function CartProvider({ children }) {
  const [state, dispatch] = useReducer(reducerFunc, { cart });
  return (
    <CartContext.Provider value={{ cart: state.cart, dispatch }}>
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  return useContext(CartContext);
}
