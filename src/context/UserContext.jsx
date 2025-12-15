import { createContext, useState, useEffect } from "react";

export const UserContext = createContext();

export default function UserProvider({ children }) {
  // Token inicial desde localStorage
  const [token, setToken] = useState(() => {
    const saved = localStorage.getItem("token");
    return saved ? JSON.parse(saved) : null;
  });

  // Email del usuario autenticado
  const [email, setEmail] = useState(() => {
    const saved = localStorage.getItem("email");
    return saved ? JSON.parse(saved) : null;
  });

  const isAuthenticated = !!token;

  // Guardar token y email cada vez que cambien
  useEffect(() => {
    localStorage.setItem("token", JSON.stringify(token));
  }, [token]);

  useEffect(() => {
    localStorage.setItem("email", JSON.stringify(email));
  }, [email]);

  // ----------------------------------------
  // LOGIN -> POST /api/auth/login
  // ----------------------------------------
  const login = async (email, password) => {
    const res = await fetch("http://localhost:5000/api/auth/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    });

    const data = await res.json();

    if (!res.ok) {
      throw new Error(data?.error || "Error al iniciar sesión");
    }

    setToken(data.token);
    setEmail(data.email);
  };

  // ----------------------------------------
  // REGISTER -> POST /api/auth/register
  // ----------------------------------------
  const register = async (email, password) => {
    const res = await fetch("http://localhost:5000/api/auth/register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    });

    const data = await res.json();

    if (!res.ok) {
      throw new Error(data?.error || "Error al registrar usuario");
    }

    setToken(data.token);
    setEmail(data.email);
  };

  // ----------------------------------------
  // GET PROFILE -> GET /api/auth/me
  // ----------------------------------------
  const getProfile = async () => {
    if (!token) return null;

    const res = await fetch("http://localhost:5000/api/auth/me", {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`, // JWT correcto
      },
    });

    const data = await res.json();

    if (!res.ok) {
      throw new Error(data?.error || "No se pudo obtener el perfil");
    }

    // sincronizar email
    if (data.email) {
      setEmail(data.email);
    }

    return data;
  };

  // ----------------------------------------
  // LOGOUT
  // ----------------------------------------
  const logout = () => {
    console.log("LOGOUT EJECUTADO");
    setToken(null);
    setEmail(null);
    localStorage.removeItem("token");
    localStorage.removeItem("email");
  };

  return (
    <UserContext.Provider
      value={{
        token,
        email,
        isAuthenticated,
        login,
        register,
        logout,
        getProfile,
      }}
    >
      {children}
    </UserContext.Provider>
  );
}
