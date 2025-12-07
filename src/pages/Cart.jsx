import { useState } from "react";
import { pizzaCart } from "../assets/pizzas";

export default function Cart() {
  const [cart, setCart] = useState(pizzaCart);

  const increase = (id) => {
    setCart(cart.map(p =>
      p.id === id ? { ...p, quantity: p.quantity + 1 } : p
    ));
  };

  const decrease = (id) => {
    setCart(
      cart
        .map(p => p.id === id ? { ...p, quantity: p.quantity - 1 } : p)
        .filter(p => p.quantity > 0)
    );
  };

  const total = cart.reduce(
    (sum, p) => sum + p.price * p.quantity, 
    0
  );

  return (
    <div className="container my-4">

      <h4 className="fw-bold mb-4">Detalles del pedido:</h4>

      {cart.map((pizza) => (
        <div key={pizza.id} 
             className="d-flex align-items-center justify-content-between mb-3 border-bottom pb-2">

          {/* Imagen */}
          <div className="d-flex align-items-center gap-3">
            <img 
              src={pizza.img} 
              alt={pizza.name} 
              style={{ width: "70px", height: "70px", borderRadius: "5px", objectFit: "cover" }} 
            />

            <span className="fw-semibold">{pizza.name}</span>
          </div>

          {/* Precio y Controles */}
          <div className="d-flex align-items-center gap-3">

            <span className="fw-bold">
              ${pizza.price.toLocaleString("es-CL")}
            </span>

            {/* Botones */}
            <button 
              className="btn btn-sm btn-outline-danger fw-bold"
              style={{ width: "35px" }}
              onClick={() => decrease(pizza.id)}
            >
              –
            </button>

            <span className="fw-bold">{pizza.quantity}</span>

            <button 
              className="btn btn-sm btn-outline-primary fw-bold"
              style={{ width: "35px" }}
              onClick={() => increase(pizza.id)}
            >
              +
            </button>

          </div>
        </div>
      ))}

      <h3 className="fw-bold mt-4">
        Total: ${total.toLocaleString("es-CL")}
      </h3>

      <button className="btn btn-dark mt-3 px-5">Pagar</button>
    </div>
  );
}
