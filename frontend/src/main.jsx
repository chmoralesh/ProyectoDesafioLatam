import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import CartProvider from "./contexts/CartContext.jsx";
import TokenProvider from "./contexts/TokenContext.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <CartProvider>
      <TokenProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </TokenProvider>
    </CartProvider>
  </StrictMode>
);
