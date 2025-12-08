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
        // si ya existe, solo aumento la cantidad
        return prevCart.map((item) =>
          item.id === pizza.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }

      // si no existe, lo agrego con quantity = 1
      return [...prevCart, { ...pizza, quantity: 1 }];
    });
  };

  // Aumentar cantidad de un producto
  const incrementItem = (id) => {
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  // Disminuir cantidad de un producto
  const decrementItem = (id) => {
    setCart(
      (prevCart) =>
        prevCart
          .map((item) =>
            item.id === id ? { ...item, quantity: item.quantity - 1 } : item
          )
          .filter((item) => item.quantity > 0) // si llega a 0, se elimina
    );
  };

  // Eliminar producto del carrito
  const removeFromCart = (id) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== id));
  };

  // Total del carrito (precio * cantidad)
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
    total,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};

export default CartProvider;
