import { useReducer, createContext, useContext, useEffect } from "react";
import data from "./Data";
import reducer from "./reducer";

const initState = {
  cart: data,
  total: 0,
  amount: 0,
};

const CartContext = createContext();

export function MyCartContext() {
  return useContext(CartContext);
}

function CartProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initState);

  useEffect(() => {
    dispatch({ type: "calculate" });
  }, [state.cart]);

  function quanti(id, status) {
    dispatch({ type: "quantity", payload: { id, status } });
  }

  function del(id) {
    dispatch({ type: "remove_item", payload: id });
  }

  const formatNumber = (num) => {
    return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,");
  };

  return (
    <CartContext.Provider value={{ ...state, quanti, del, formatNumber }}>
      {children}
    </CartContext.Provider>
  );
}

export { CartContext, CartProvider };
