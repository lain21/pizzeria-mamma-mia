import headerImg from '../assets/header.jpg';

export default function Header() {
  return (
    <header className="hero-banner">
      <img src={headerImg} alt="Pizzería Mamma Mía" className="hero-img" />
      <div className="hero-overlay"></div>
      <div className="hero-text text-center text-white">
        <h1 className="fw-bold display-4">¡Pizzería Mamma Mía!</h1>
        <p className="lead fs-5">¡Tenemos las mejores pizzas que podrás encontrar!</p>
      </div>
    </header>
  );
}
