import { useEffect, useState } from "react";
import Header from "../components/Header";
import CardPizza from "../components/CardPizza";

export default function Home() {
  const [pizzas, setPizzas] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/api/pizzas")
      .then((res) => res.json())
      .then((data) => setPizzas(data));
  }, []);

  return (
    <main className="container my-4">
      <Header />

      <section className="row g-4">
        {pizzas.map((pizza) => (
          <div key={pizza.id} className="col-12 col-md-6 col-lg-4">
            <CardPizza
              id={pizza.id}
              name={pizza.name}
              price={pizza.price}
              ingredients={pizza.ingredients}
              img={pizza.img}
            />
          </div>
        ))}
      </section>
    </main>
  );
}
