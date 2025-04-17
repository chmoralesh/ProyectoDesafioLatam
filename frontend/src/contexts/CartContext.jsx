//creo y exporto el contexto
import { createContext, useState } from "react";
import { pizzaCart } from "../components/pizzas";

export const CartContext = createContext();

//creo y exporto al proveedor

const CartProvider = ({ children }) => {
  const [cart, setCart] = useState(pizzaCart);
  const [total, setTotal] = useState(0);

  return (
    <CartContext.Provider value={{ cart, setCart, total, setTotal }}>
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
