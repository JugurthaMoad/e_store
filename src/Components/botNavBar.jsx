import React, { Component, useContext, useEffect, useState } from "react";
import { HomeIcon, CartIcon, ProfilIcon } from "./icons";
import CartContext from "../context/CartContext";
import { NavLink, useLocation, useMatch } from "react-router-dom";
const BotNavBar = ({ articlesInCart, ...props }) => {
  const cart = useContext(CartContext);
  const location = useLocation();

  return (
    <div className=" grid grid-cols-3 items-center justify-center p-3 fixed bottom-0 w-full bg-black text-white">
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
          <div className="flex justify-center items-center">
            <CartIcon />
            <span
              className={
                cart.articlesInCart > 0
                  ? "relative flex justify-center items-center bottom-4 block w-5 h-5 rounded-full text-xs bg-red-600"
                  : "hidden"
              }
            >
              {cart.articlesInCart}
            </span>
          </div>
        </NavLink>
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
