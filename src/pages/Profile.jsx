import { useContext, useEffect, useState } from "react";
import { UserContext } from "../context/UserContext";
import { useNavigate } from "react-router-dom";

export default function Profile() {
  const { token, getProfile, email } = useContext(UserContext);
  const navigate = useNavigate();

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    // Si no hay token → redirigir al login
    if (!token) {
      navigate("/login");
      return;
    }

    // Llamar al backend
    const fetchProfile = async () => {
      try {
        await getProfile(); // actualiza el email en contexto
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProfile();
  }, [token]);

  // Cargando
  if (loading) {
    return (
      <div className="container mt-5 text-center">
        <h3>Cargando perfil...</h3>
      </div>
    );
  }

  // Error (ej: token expirado o inválido)
  if (error) {
    return (
      <div className="container mt-5 text-center">
        <h3 className="text-danger">Error: {error}</h3>
        <button
          className="btn btn-primary mt-3"
          onClick={() => navigate("/login")}
        >
          Ir al Login
        </button>
      </div>
    );
  }

  // Vista normal del perfil
  return (
    <div className="container mt-5 text-center">
      <h1>Perfil del Usuario</h1>
      <h4 className="mt-3">
        Correo: <strong>{email}</strong>
      </h4>

      <p className="mt-4">Tu sesión está activa y el token es válido.</p>
    </div>
  );
}
