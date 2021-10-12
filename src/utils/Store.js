import Cookies from "js-cookie";
import { createContext, useReducer } from "react";

export const Store = createContext();

const initialState = {
  cart: {
    cartItems: Cookies.get("cartItems")
      ? JSON.parse(Cookies.get("cartItems"))
      : [],
  },
  userInfo: Cookies.get("userInfo")
    ? JSON.parse(JSON.stringify(Cookies.get("userInfo")))
    : null,

    billingAddress: Cookies.get("billingAddress")
    ? JSON.parse(JSON.stringify(Cookies.get("billingAddress")))
    : null,

    paymentInfo: Cookies.get("paymentInfo")
    ? JSON.parse(JSON.stringify(Cookies.get("paymentInfo")))
    : null,
};

function reducer(state, action) {
  switch (action.type) {
    case "ENROLL_ADD_ITEM": {
      const newItem = action.payload;
      const existItem = state.cart.cartItems.find(
        (item) => item._id === newItem._id
      );
      const cartItems = existItem
        ? state.cart.cartItems.map((item) =>
            item.name === existItem.name ? newItem : item
          )
        : [...state.cart.cartItems, newItem];
      Cookies.set("cartItems", JSON.stringify(cartItems));
      return { ...state, cart: { ...state.cart, cartItems } };
    }
    case "CART_REMOVE_ITEM": {
      const cartItems = state.cart.cartItems.filter(
        (item) => item._id !== action.payload._id
      );
      Cookies.set("cartItems", JSON.stringify(cartItems));
      return { ...state, cart: { ...state.cart, cartItems } };
    }
    case "USER_LOGIN":
      return { ...state, userInfo: action.payload };
    case "USER_LOGOUT":
      return { ...state, userInfo: null, cart: { cartItems: [] } };
      case "BILLING_ADDRESS":
        return { ...state, billingAddress: action.payload };
      case "PAYMENT_DETAILS":
        return { ...state, paymentInfo: action.payload };
    default:
      state;
  }
}

export default function StoreProvider(props) {
  const [state, dispatch] = useReducer(reducer, initialState);
  const value = { state, dispatch };
  return <Store.Provider value={value}>{props.children}</Store.Provider>;
}
