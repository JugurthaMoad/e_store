import React, { Component, useContext, useEffect, useState } from "react";
import { HomeIcon, CartIcon, ProfilIcon } from "./icons";
import CartContext from "../context/CartContext";
import { NavLink, useLocation, useMatch } from "react-router-dom";
const BotNavBar = ({ articlesInCart, ...props }) => {
  const cart = useContext(CartContext);
  const location = useLocation();

  return (
    <>
      <div className=" grid grid-cols-3 items-center justify-center p-3 fixed bottom-0 w-full bg-black text-white m-t-1 md:hidden">
        <div className="flex justify-center">
          <NavLink
            to="/e_store"
            className={useMatch("/e_store") ? "text-orange-600" : "text-white"}
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
      <div className="hidden bg-black text-white h-12 md:inline-block md:w-full md:box-content text-center align-middle">
        Copyright(c){" "}
        <a
          href="https://guileless-twilight-d83e77.netlify.app/"
          target="_blank"
          rel="noreferrer"
        >
          Jugurtha Moad
        </a>
      </div>
    </>
  );
};

export default BotNavBar;
