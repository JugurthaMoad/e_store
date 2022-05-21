import React, { Component, useContext } from "react";
import NavBar from "./navbar";
import CartContext from "../context/CartContext";
import { Link } from "react-router-dom";
const Test = ({ listCategorie }) => {
  const cart = useContext(CartContext);
  return (
    <div className="w-screen h-screen bg-white">
      <NavBar listCategorie={listCategorie} />
      <Link to="/">Retour </Link>
      nombre articles = {cart.articlesInCart}
    </div>
  );
};

export default Test;
