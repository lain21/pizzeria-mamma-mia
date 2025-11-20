import './App.css';
import Cart from "./components/Cart";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./components/Home";
// import LoginPage from "./components/Login";
// import RegisterPage from "./components/Register";
// import Cart from "./components/Cart";

export default function App() {
  return (
    <>
      <Navbar />
      {/* <Home /> */} 
      <Cart />
      {/* <RegisterPage /> */}
      {/* <LoginPage /> */}
      {/* <Cart /> */}
      <Footer />
    </>
  );
}
