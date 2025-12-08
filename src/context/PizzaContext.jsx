import { createContext, useState, useEffect } from "react";

export const PizzaContext = createContext();

export default function PizzaProvider({ children }) {
  const [pizzas, setPizzas] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("http://localhost:5000/api/pizzas")
      .then((res) => res.json())
      .then((data) => {
        setPizzas(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error cargando pizzas:", error);
        setLoading(false);
      });
  }, []);

  return (
    <PizzaContext.Provider value={{ pizzas, loading }}>
      {children}
    </PizzaContext.Provider>
  );
}
