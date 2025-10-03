import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import CartProvider from "./contexts/CartContext.jsx";
import TokenProvider from "./contexts/TokenContext.jsx";
import UserProvider from "./contexts/UserContext.jsx";
import WebSocketProvider from "./contexts/WebSocketProvider.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <TokenProvider>
      <UserProvider>
        <CartProvider>
          <WebSocketProvider>
            <BrowserRouter>
              <App />
            </BrowserRouter>
          </WebSocketProvider>
        </CartProvider>
      </UserProvider>
    </TokenProvider>
  </StrictMode>
);
