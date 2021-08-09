import { createContext, useContext, useReducer } from "react";
const CartContext = createContext();

const cart = [
  {
    id: 1,
    name: "First item in cart",
    image: "http://krisaru.com/wp-content/uploads/2011/06/vege.jpg",
    quantity: 1,
    price: 25,
    inOffer: true,
    offer: 5,
  },
  {
    id: 2,
    name: "Another item in cart",
    image: "http://krisaru.com/wp-content/uploads/2011/06/vege.jpg",
    quantity: 1,
    price: 52,
    inOffer: false,
    offer: 5,
  },
];

function reducerFunc(state, action) {
  switch (action.type) {
    case "ADD_TO_CART":
      const itemToAddInCart = { ...action.payload, quantity: 1 };
      return { ...state, cart: [...state.cart, itemToAddInCart] };
    case "INCREMENT_QUANTITY":
      return {
        ...state,
        cart: state.cart.map((item) =>
          item.id === action.payload
            ? { ...item, quantity: item.quantity + 1 }
            : item
        ),
      };
    case "DECREMENT_QUANTITY":
      return {
        ...state,
        cart: state.cart.map((item) =>
          item.id === action.payload
            ? { ...item, quantity: item.quantity - 1 }
            : item
        ),
      };
    case "REMOVE_FROM_CART":
      return {
        ...state,
        cart: state.cart.filter((item) => item.id !== action.payload),
      };

    case "RESET_CART":
      return { ...state, cart: [] };
    default:
      return state;
  }
}
export function CartProvider({ children }) {
  const [state, cartDispatch] = useReducer(reducerFunc, { cart });
  return (
    <CartContext.Provider value={{ cart: state.cart, cartDispatch }}>
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  return useContext(CartContext);
}
