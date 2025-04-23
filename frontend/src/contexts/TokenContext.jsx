//creo y exporto el contexto
import { createContext, useState } from "react";

export const TokenContext = createContext();

//creo y exporto al proveedor

const CartProvider = ({ children }) => {
  const [token, setToken] = useState(true);

  const logout = () => {
    setToken(false);
  };

  return (
    <TokenContext.Provider value={{ token, logout }}>
      {children}
    </TokenContext.Provider>
  );
};

export default CartProvider;
