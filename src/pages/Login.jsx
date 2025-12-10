import { useContext } from "react";
import { UserContext } from "../context/UserContext";

export default function Login() {
  const { login } = useContext(UserContext);

  return (
    <div className="container text-center mt-5">
      <h1>Página de Login</h1>

      <button className="btn btn-primary mt-3" onClick={login}>
        Iniciar sesión
      </button>
    </div>
  );
}
