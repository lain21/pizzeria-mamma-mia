import { Link } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";

export default function Navbar() {
  const { total } = useContext(CartContext); // <-- usamos el contexto

  const totalCLP = total.toLocaleString("es-CL");

  return (
    <nav className="navbar navbar-dark bg-dark px-3 d-flex justify-content-between">
      {/* Menú de navegación */}
      <div className="d-flex gap-2">
        <Link to="/" className="btn btn-outline-light">
          🍕 Home
        </Link>

        <Link to="/register" className="btn btn-outline-light">
          📝 Register
        </Link>

        <Link to="/login" className="btn btn-outline-light">
          🔐 Login
        </Link>

        <Link to="/profile" className="btn btn-outline-light">
          👤 Profile
        </Link>
      </div>

      {/* Carrito mostrando total real */}
      <div>
        <Link to="/cart" className="btn btn-success">
          🛒 Total: ${totalCLP}
        </Link>
      </div>
    </nav>
  );
}
