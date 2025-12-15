import { useState, useContext } from "react";
import { UserContext } from "../context/UserContext";
import { useNavigate } from "react-router-dom";

export default function RegisterPage() {
  const { register } = useContext(UserContext);
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [pass2, setPass2] = useState("");

  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    // Validaciones frontend
    if (!email.trim() || !pass.trim() || !pass2.trim()) {
      setError("Todos los campos son obligatorios.");
      return;
    }

    if (pass.length < 6) {
      setError("La contraseña debe tener al menos 6 caracteres.");
      return;
    }

    if (pass !== pass2) {
      setError("Las contraseñas no coinciden.");
      return;
    }

    try {
      // Llamar al método register del contexto
      await register(email, pass);

      // Redirigir al perfil tras registrarse
      navigate("/profile");
    } catch (err) {
      // Mensaje que viene del backend
      setError(err.message);
    }
  };

  return (
    <div className="container my-4" style={{ maxWidth: 520 }}>
      <h2 className="mb-3 text-center">Registro</h2>

      {error && <div className="alert alert-danger py-2">{error}</div>}

      <form onSubmit={handleSubmit} className="border rounded p-3 bg-white">
        <div className="mb-3">
          <label className="form-label">Email</label>
          <input
            type="email"
            className="form-control"
            placeholder="tu@correo.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Contraseña</label>
          <input
            type="password"
            className="form-control"
            placeholder="Mínimo 6 caracteres"
            value={pass}
            onChange={(e) => setPass(e.target.value)}
            required
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Confirmar contraseña</label>
          <input
            type="password"
            className="form-control"
            value={pass2}
            onChange={(e) => setPass2(e.target.value)}
            required
          />
        </div>

        <button type="submit" className="btn btn-dark w-100">
          Crear cuenta
        </button>
      </form>
    </div>
  );
}
