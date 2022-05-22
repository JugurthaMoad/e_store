import React, { Component, useContext, useState, useEffect } from "react";
import CartContext from "../context/CartContext";
import { BackIcon, CheckedIcon } from "./icons";
import BotNavBar from "./botNavBar";
import Item from "./item";
import { useNavigate } from "react-router-dom";

const Cart = ({ listArticles }) => {
  let navigate = useNavigate();
  let cart = useContext(CartContext);
  const [artItems, setItems] = useState([]);
  const { items } = cart;
  console.log("cart Items = ", artItems);
  const fillCart = (articles, ids) => {
    let elements = []; // the final car items
    /*
    if an article of articles is in ids ( list of ids ), will be add in cart items 
    */
    console.log("items = ", items);
    articles.forEach((article) => {
      if (ids.includes(article.id)) {
        elements.push(article);
      }
    });
    setItems(elements);
  };

  const hundleBack = () => {
    navigate("/");
  };

  useEffect(() => {
    console.log("test reloading ");
    fillCart(listArticles, items);
  }, [cart.articlesInCart]);

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
        {artItems.map((item, index) => {
          return <Item key={index} article={item} />;
        })}
      </div>

      <BotNavBar />
    </div>
  );
};

export default Cart;
