import { createContext, useState, useMemo } from "react";

// 1. Creamos el contexto
export const CartContext = createContext();

// 2. Creamos el Provider
const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  // Agregar producto al carrito
  const addToCart = (pizza) => {
    setCart((prevCart) => {
      const existing = prevCart.find((item) => item.id === pizza.id);

      if (existing) {
        return prevCart.map((item) =>
          item.id === pizza.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }

      return [...prevCart, { ...pizza, quantity: 1 }];
    });
  };

  // Aumentar cantidad
  const incrementItem = (id) => {
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  // Disminuir cantidad
  const decrementItem = (id) => {
    setCart((prevCart) =>
      prevCart
        .map((item) =>
          item.id === id ? { ...item, quantity: item.quantity - 1 } : item
        )
        .filter((item) => item.quantity > 0)
    );
  };

  // Eliminar item
  const removeFromCart = (id) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== id));
  };

  // 🔥 NUEVO: Vaciar carrito después del pago
  const clearCart = () => {
    setCart([]);
  };

  // Total del carrito
  const total = useMemo(
    () => cart.reduce((acc, item) => acc + item.price * item.quantity, 0),
    [cart]
  );

  const value = {
    cart,
    addToCart,
    incrementItem,
    decrementItem,
    removeFromCart,
    clearCart, // <-- 🔥 agregado aquí
    total,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};

export default CartProvider;
