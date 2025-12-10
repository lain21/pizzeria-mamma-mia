import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";

import CartProvider from "./context/CartContext";
import PizzaProvider from "./context/PizzaContext";
import UserProvider from "./context/UserContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <UserProvider>
      <BrowserRouter>
        <PizzaProvider>
          <CartProvider>
            <App />
          </CartProvider>
        </PizzaProvider>
      </BrowserRouter>
    </UserProvider>
  </React.StrictMode>
);
