import { useContext } from "react";
import { CartContext } from "../context/CartContext";

export default function Cart() {
  const { cart, incrementItem, decrementItem, removeFromCart, total } =
    useContext(CartContext);

  return (
    <div className="container my-4">
      <h4 className="fw-bold mb-4">Detalles del pedido:</h4>

      {cart.length === 0 && (
        <p className="text-muted">Tu carrito está vacío 🍕</p>
      )}

      {cart.map((pizza) => (
        <div
          key={pizza.id}
          className="d-flex align-items-center justify-content-between mb-3 border-bottom pb-2"
        >
          {/* Imagen + Nombre */}
          <div className="d-flex align-items-center gap-3">
            <img
              src={pizza.img}
              alt={pizza.name}
              style={{
                width: "70px",
                height: "70px",
                borderRadius: "5px",
                objectFit: "cover",
              }}
            />
            <span className="fw-semibold">{pizza.name}</span>
          </div>

          {/* Precio + Controles */}
          <div className="d-flex align-items-center gap-3">
            <span className="fw-bold">
              ${pizza.price.toLocaleString("es-CL")}
            </span>

            {/* Botón restar */}
            <button
              className="btn btn-sm btn-outline-danger fw-bold"
              style={{ width: "35px" }}
              onClick={() => decrementItem(pizza.id)}
            >
              –
            </button>

            <span className="fw-bold">{pizza.quantity}</span>

            {/* Botón sumar */}
            <button
              className="btn btn-sm btn-outline-primary fw-bold"
              style={{ width: "35px" }}
              onClick={() => incrementItem(pizza.id)}
            >
              +
            </button>

            {/* Botón eliminar */}
            <button
              className="btn btn-sm btn-outline-secondary fw-bold"
              onClick={() => removeFromCart(pizza.id)}
            >
              🗑️
            </button>
          </div>
        </div>
      ))}

      {/* Total */}
      <h3 className="fw-bold mt-4">Total: ${total.toLocaleString("es-CL")}</h3>

      <button className="btn btn-dark mt-3 px-5">Pagar</button>
    </div>
  );
}
