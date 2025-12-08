import { useContext } from "react";
import Header from "../components/Header";
import CardPizza from "../components/CardPizza";
import { PizzaContext } from "../context/PizzaContext";

export default function Home() {
  const { pizzas, loading } = useContext(PizzaContext);

  if (loading) return <p className="text-center my-5">Cargando pizzas...</p>;

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
