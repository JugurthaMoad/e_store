import React, { Component, useContext, useState, useEffect } from "react";
import CartContext from "../context/CartContext";
import { BackIcon, CheckedIcon } from "./icons";
import BotNavBar from "./botNavBar";
import Item from "./item";
import { useNavigate } from "react-router-dom";

const Cart = ({ listArticles }) => {
  let navigate = useNavigate();
  let cart = useContext(CartContext);
  // problem in artItems
  const { items } = cart;
  const { elements } = cart;
  console.log("elements = ", elements);
  const hundleBack = () => {
    navigate("/");
  };

  /*
  useEffect(() => {
    fillCart();
    setItems(articles);
    console.log("item = ", itemsCart);
  }, [tab]);
*/
  return (
    <div>
      <div className="w-screen h-18 bg-black text-white p-4 grid grid-cols-3 items-center">
        <div>
          <BackIcon className="float-left" click={hundleBack} />
        </div>
        <div className="text-center text-xl font-bold">Mon Panier</div>
        <div>
          <CheckedIcon className="float-right" />
        </div>
      </div>
      <div className="text-white self-center">Mon Panier</div>

      <div className="w-screen grid grid-cols-1 gap-4 text-black items-center justify-items-center pb-24">
        {elements.map((item, index) => {
          console.log("pas de blep");
          return <Item key={index} article={item} />;
        })}
      </div>

      <BotNavBar />
    </div>
  );
};

export default Cart;
