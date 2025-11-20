import CardPizza from "./CardPizza";
import { pizzas } from "../assets/pizzas";

export default function Home() {
  return (
    <main className="container my-4">
      <h1 className="text-center mb-4">🍕 Nuestras Pizzas</h1>

      <section className="row g-4">
        {pizzas.map((pizza) => (
          <div key={pizza.id} className="col-12 col-md-6 col-lg-4">
            <CardPizza
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
