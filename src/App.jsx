import './App.css';
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./components/Home";
// import Login from "./components/Login";  // <-- QUITAR
import RegisterPage from "./components/RegisterPage"; // <-- ESTE SÍ EXISTE

export default function App() {
  return (
    <>
      <Navbar />
      <Home />
      {/* <Login /> */}   {/* <-- QUITAR DEL JSX TAMBIÉN */}
      <Footer />
    </>
  );
}
