import React, { Component, useContext, useEffect, useState } from "react";
import { HomeIcon, CartIcon, ProfilIcon } from "./icons";
import CartContext from "../context/CartContext";
import { NavLink, useLocation, useMatch } from "react-router-dom";
const BotNavBar = ({ articlesInCart, ...props }) => {
  const cart = useContext(CartContext);
  const location = useLocation();

  return (
    <div className=" grid grid-cols-3 items-center justify-center p-4 fixed bottom-0 w-full bg-black text-white">
      <div className="flex justify-center">
        <NavLink
          to="/"
          className={useMatch("/") ? "text-orange-600" : "text-white"}
        >
          <HomeIcon />
        </NavLink>
      </div>
      <div className="flex justify-center">
        <NavLink
          to="/cart"
          className={useMatch("/cart") ? "text-orange-600" : "text-white"}
        >
          <CartIcon />
        </NavLink>

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
        <NavLink
          to="/profile"
          className={useMatch("/profile") ? "text-orange-600" : "text-white"}
        >
          <ProfilIcon />
        </NavLink>
      </div>
    </div>
  );
};

export default BotNavBar;
