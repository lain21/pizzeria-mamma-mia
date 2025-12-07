import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function Pizza() {
  const { id } = useParams();
  const [pizza, setPizza] = useState(null);
  const [error, setError] = useState(false);

  useEffect(() => {
    fetch(`http://localhost:5000/api/pizzas/${id}`)
      .then((res) => {
        if (!res.ok) throw new Error("Not Found");
        return res.json();
      })
      .then((data) => setPizza(data))
      .catch(() => setError(true));
  }, [id]);

  if (error)
    return <h2 className="text-center mt-5">❌ Pizza no encontrada</h2>;

  if (!pizza) return <p className="text-center mt-5">Cargando pizza...</p>;

  return (
    <div className="container my-5">
      <div className="row align-items-center">
        <div className="col-md-6">
          <img src={pizza.img} alt={pizza.name} className="img-fluid rounded" />
        </div>

        <div className="col-md-6">
          <h2 className="fw-bold text-capitalize">Pizza {pizza.name}</h2>

          <h5 className="mt-3">Ingredientes:</h5>
          <ul>
            {Array.isArray(pizza.ingredients) &&
              pizza.ingredients.map((ing, i) => <li key={i}>{ing}</li>)}
          </ul>

          <h4 className="fw-bold mt-3">
            Precio: ${pizza.price.toLocaleString("es-CL")}
          </h4>
        </div>
      </div>
    </div>
  );
}
