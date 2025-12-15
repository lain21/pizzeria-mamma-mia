import { useContext, useState } from "react";
import { CartContext } from "../context/CartContext";
import { UserContext } from "../context/UserContext";

export default function Cart() {
  const {
    cart,
    incrementItem,
    decrementItem,
    removeFromCart,
    total,
    clearCart,
  } = useContext(CartContext);

  const { token } = useContext(UserContext);

  const [msg, setMsg] = useState("");

  const handlePay = async () => {
    setMsg("");

    try {
      const res = await fetch("http://localhost:5000/api/checkouts", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`, // 🔐 token del usuario
        },
        body: JSON.stringify({ total }),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data?.error || "Error en el pago");
      }

      // Si todo OK
      setMsg("🎉 ¡Pago realizado con éxito!");
      clearCart(); // Vaciar carrito
    } catch (err) {
      setMsg(`❌ Error: ${err.message}`);
    }
  };

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

          <div className="d-flex align-items-center gap-3">
            <span className="fw-bold">
              ${pizza.price.toLocaleString("es-CL")}
            </span>

            <button
              className="btn btn-sm btn-outline-danger fw-bold"
              style={{ width: "35px" }}
              onClick={() => decrementItem(pizza.id)}
            >
              –
            </button>

            <span className="fw-bold">{pizza.quantity}</span>

            <button
              className="btn btn-sm btn-outline-primary fw-bold"
              style={{ width: "35px" }}
              onClick={() => incrementItem(pizza.id)}
            >
              +
            </button>

            <button
              className="btn btn-sm btn-outline-secondary fw-bold"
              onClick={() => removeFromCart(pizza.id)}
            >
              🗑️
            </button>
          </div>
        </div>
      ))}

      <h3 className="fw-bold mt-4">Total: ${total.toLocaleString("es-CL")}</h3>

      {/* Botón de pago */}
      <button
        className="btn btn-dark mt-3 px-5"
        disabled={!token || cart.length === 0}
        onClick={handlePay}
      >
        Pagar
      </button>

      {/* Mensajes */}
      {msg && <p className="mt-3 fw-bold">{msg}</p>}

      {!token && (
        <p className="text-danger mt-2">
          Debes iniciar sesión para completar el pago.
        </p>
      )}
    </div>
  );
}
