import { Link } from "react-router-dom";

export default function Navbar() {
  const total = 25000;
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

      {/* Botón de carrito que redirige a /cart */}
      <div>
        <Link to="/cart" className="btn btn-success">
          🛒 Total: ${totalCLP}
        </Link>
      </div>
    </nav>
  );
}
