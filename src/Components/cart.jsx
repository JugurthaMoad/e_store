import React, { Component, useContext, useState, useEffect } from "react";
import CartContext from "../context/CartContext";
import { BackIcon, CheckedIcon } from "./icons";
import BotNavBar from "./botNavBar";
import Item from "./item";
import { useNavigate } from "react-router-dom";
import emptyCart from "../images/pannier.png";

const Cart = ({ listArticles }) => {
  let navigate = useNavigate();
  let cart = useContext(CartContext);
  const { elements } = cart;
  const hundleBack = () => {
    navigate("/");
  };
  const renderItems = (elements) => {
    if (elements.length === 0) {
      return (
        <div>
          <img src={emptyCart} />
        </div>
      );
    } else {
      return elements.map((item, index) => {
        return (
          <div className="bg-white p-2 h-36 w-full" key={index}>
            <div className="h-full w-full">
              <Item article={item} />
            </div>
          </div>
        );
      });
    }
  };
  return (
    <div className="bg-gray-300 min-h-screen">
      <div className="w-screen h-18 bg-black text-white p-4 grid grid-cols-3 items-center">
        <div>
          <BackIcon className="float-left" click={hundleBack} />
        </div>
        <div className="text-center text-xl font-bold">Mon Panier</div>
        <div>
          <CheckedIcon className="float-right" />
        </div>
      </div>
      <div className="w-screen flex flex-col justify-center items-center gap-y-4 text-black pb-20 pt-2 px-4">
        {renderItems(elements)}
      </div>

      <BotNavBar />
    </div>
  );
};

export default Cart;
