import React, { Component, useContext } from "react";
import { HomeIcon, CartIcon, ProfilIcon } from "./icons";
import CartContext from "../context/CartContext";
const BotNavBar = ({ articlesInCart }) => {
  const cart = useContext(CartContext);
  return (
    <div className="border-t-2 border-black grid grid-cols-3 items-center justify-center p-4 fixed bottom-0 w-full bg-white">
      <div className="flex justify-center">
        <HomeIcon />
      </div>
      <div className="flex justify-center">
        <CartIcon />
        <span
          className={
            cart.articlesInCart > 0
              ? "relative bottom-4 block m-0 w-6 h-6 rounded-full text-center text-white items-center bg-red-600"
              : "hidden"
          }
        >
          {cart.articlesInCart}
        </span>
      </div>
      <div className="flex justify-center">
        <ProfilIcon />
      </div>
    </div>
  );
};

export default BotNavBar;
