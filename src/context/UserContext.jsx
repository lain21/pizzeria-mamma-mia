import { createContext, useState, useEffect } from "react";

export const UserContext = createContext();

export default function UserProvider({ children }) {
  // Leer el token desde localStorage al iniciar
  const [token, setToken] = useState(() => {
    const savedToken = localStorage.getItem("token");
    return savedToken ? JSON.parse(savedToken) : false; // por defecto false
  });

  // Cada vez que cambie el token, guardarlo
  useEffect(() => {
    localStorage.setItem("token", JSON.stringify(token));
  }, [token]);

  // Login simulado
  const login = () => setToken(true);

  // Logout real
  const logout = () => {
    console.log("LOGOUT EJECUTADO");
    setToken(false);
  };

  return (
    <UserContext.Provider value={{ token, login, logout }}>
      {children}
    </UserContext.Provider>
  );
}
