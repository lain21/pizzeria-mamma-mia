import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";

// IMPORTANTE → importar el provider
import CartProvider from "./context/CartContext";
import PizzaProvider from "./context/PizzaContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <PizzaProvider>
        <CartProvider>
          <App />
        </CartProvider>
      </PizzaProvider>
    </BrowserRouter>
  </React.StrictMode>
);
