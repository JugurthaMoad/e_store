import React, { Component, useContext } from "react";
import CartContext from "../context/CartContext";
import BotNavBar from "./botNavBar";

const Cart = () => {
  let cart = useContext(CartContext);
  return (
    <div>
      <div className="w-screen grid grid-cols-1 gap-4 text-black items-center p-12">
        {cart.items.map((item, index) => {
          return (
            <div key={index} className="text-center font-bold bg-gray-300">
              {item}
            </div>
          );
        })}
      </div>

      <BotNavBar />
    </div>
  );
};

export default Cart;
