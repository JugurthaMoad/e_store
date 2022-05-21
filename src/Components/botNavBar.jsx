import React, { Component } from "react";
import { HomeIcon, CartIcon, ProfilIcon } from "./icons";
const BotNavBar = ({ articlesInCart }) => {
  return (
    <div className="border-t-2 border-black grid grid-cols-3 items-center justify-center p-4 absolute bottom-0 w-full">
      <div className="flex justify-center">
        <HomeIcon />
      </div>
      <div className="flex justify-center">
        <CartIcon />
        <span
          className={
            articlesInCart > 0
              ? "relative bottom-4 block m-0 w-6 h-6 rounded-full text-center text-white items-center bg-red-600"
              : "hidden"
          }
        >
          {articlesInCart}
        </span>
      </div>
      <div className="flex justify-center">
        <ProfilIcon />
      </div>
    </div>
  );
};

export default BotNavBar;
