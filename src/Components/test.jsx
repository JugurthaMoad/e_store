import React, { Component, useContext } from "react";
import CartContext from "../context/CartContext";
import { Link } from "react-router-dom";
const Test = () => {
  const cart = useContext(CartContext);
  return (
    <div className="w-screen h-screen bg-white">
      <Link to="/">Retour </Link>
      nombre articles = {cart.articlesInCart}
    </div>
  );
};

export default Test;
