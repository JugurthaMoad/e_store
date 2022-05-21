import React, { Component, useContext } from "react";
import Articles from "./articles";
import NavBar from "./navbar";
import CartContext from "../context/CartContext";
import { Link } from "react-router-dom";
const Test = ({ listCategorie, listArticles }) => {
  const cart = useContext(CartContext);
  return (
    <div className="w-screen h-screen bg-white">
      <NavBar listCategorie={listCategorie} />
      <Articles listArticles={listArticles} />
    </div>
  );
};

export default Test;
