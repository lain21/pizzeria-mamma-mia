import { Link } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";

export default function CardPizza({ id, name, price, ingredients, img }) {
  const { addToCart } = useContext(CartContext);

  const priceCLP = price.toLocaleString("es-CL");

  return (
    <div className="card pizza-card">
      <img src={img} className="card-img-top" alt={name} />

      <div className="card-body text-center">
        <h5 className="card-title fw-bold mb-3">Pizza {name}</h5>

        <div className="line"></div>

        <h6 className="text-muted fw-semibold mb-2 mt-3">Ingredientes:</h6>

        <ul className="text-secondary small mb-3 list-unstyled">
          {ingredients.map((ing, index) => (
            <li key={index}>🍕 {ing}</li>
          ))}
        </ul>

        <div className="line"></div>

        <p className="fs-5 fw-bold mt-3 mb-3">Precio: ${priceCLP}</p>

        <div className="line"></div>

        <div className="d-flex justify-content-center gap-2 mt-3">
          <Link to={`/pizza/${id}`} className="btn btn-outline-primary w-50">
            Ver más 👀
          </Link>

          {/* 💥 Aquí agregamos al carrito */}
          <button
            className="btn btn-primary w-50"
            onClick={() =>
              addToCart({
                id,
                name,
                price,
                img,
                ingredients,
              })
            }
          >
            Añadir 🛒
          </button>
        </div>
      </div>
    </div>
  );
}
