import { useEffect, useState } from "react";
import Navbar from "../src/components/Navbar";
import "../styles/globals.css";

export default function App({ Component, pageProps }) {
  const [cart, setCart] = useState([]);

  const addToCart = (item, qty, price) => {
    setCart([...cart, [item, price]]);
  };
  const removeFromCart = (item, qty) => {
    let newCart = cart;
    let index = newCart.indexOf(item);
    newCart.splice(index);
    setCart(newCart);
  };

  const clearCart = () => {};

  useEffect(() => {}, []);
  return (
    <>
      <Navbar cart={cart} />
      <Component
        removeFromCart={removeFromCart}
        addToCart={addToCart}
        clearCart={clearCart}
        cart={cart}
        {...pageProps}
      />
    </>
  );
}
