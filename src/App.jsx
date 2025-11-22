import "./App.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Pizza from "./components/Pizza";
import RegisterPage from "./components/RegisterPage";
import { Routes, Route } from "react-router-dom";

export default function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pizza/:id" element={<Pizza />} />
        <Route path="/register" element={<RegisterPage />} />
      </Routes>

      <Footer />
    </>
  );
}
