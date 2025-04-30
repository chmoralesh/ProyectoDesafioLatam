//creo y exporto el contexto
import { createContext, useState } from "react";

export const TokenContext = createContext();

//creo y exporto al proveedor

const TokenProvider = ({ children }) => {
  const [token, setToken] = useState(null);

  return (
    <TokenContext.Provider value={{ token, setToken }}>
      {children}
    </TokenContext.Provider>
  );
};

export default TokenProvider;
