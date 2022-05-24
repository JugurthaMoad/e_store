import React, { Component, useState, useEffect, useContext } from "react";
import GenderContext from "../context/genderContext";
import CategorieContext from "../context/CategorieContext";
import CartContext from "../context/CartContext";
import { Link, useNavigate, useMatch } from "react-router-dom";
import { getCategorie } from "../services/data";
import {
  ProfilIcon,
  FavoriIncon,
  CartIcon,
  MobilMenu,
  CloseIcon,
  BackIcon,
} from "./icons";

import GenderBar from "./genderBar";
const NavBar = ({ listCategorie }) => {
  const [showMenu, setShowMenu] = useState(0);
  const currentGender = useContext(GenderContext);
  const currentCategorie = useContext(CategorieContext);
  const cart = useContext(CartContext);
  const hundleShowMenu = () => {
    setShowMenu(!showMenu);
  };
  const navigate = useNavigate();
  const hundleBack = () => {
    navigate(-1);
  };
  const hundleCart = () => {
    console.log("Cart");
    navigate("/cart");
  };
  return (
    <>
      <div>
        <div className="w-full h-20 bg-black text-white px-2 py-0 grid grid-cols-3 items-center md:hidden">
          <div className="flex items-center">
            <BackIcon
              click={hundleBack}
              className={useMatch("/") ? "hidden" : " relative"}
            />
            <MobilMenu click={hundleShowMenu} />
          </div>
          <div>
            <span
              onClick={() => {
                navigate("/");
              }}
              className="block text-2xl font-semibold uppercase"
            >
              Logo
            </span>
          </div>
          <div className="flex justify-end">
            <FavoriIncon />
            <CartIcon click={hundleCart} />
            <span
              className={
                cart.articlesInCart > 0
                  ? "relative bottom-4 block w-6 h-6 rounded-full text-center items-center bg-red-600"
                  : "hidden"
              }
            >
              {cart.articlesInCart}
            </span>
          </div>
        </div>
        <div
          className={
            showMenu ? "w-5/6 h-4/5 absolute top-0 flex z-40" : "hidden"
          }
        >
          <div className="bg-gray-400 w-5/6">
            <GenderBar />
            <ul className="w-full h-full flex flex-col items-center py-4 gap-y-2">
              {listCategorie.map((cat, index) => {
                return (
                  <li
                    key={index}
                    onClick={() => {
                      currentCategorie.setCurrentCategorie(cat);
                      hundleShowMenu();
                    }}
                    className={
                      "w-5/6 text-xl p-4 bg-slate-50" +
                      (cat === currentCategorie.name ? " text-orange-600" : "")
                    }
                  >
                    <Link to="/test"> {cat} </Link>
                  </li>
                );
              })}
            </ul>
          </div>
          <span
            className="w-12 bg-orange-500 text-black h-12 flex items-center"
            onClick={hundleShowMenu}
          >
            <CloseIcon />
          </span>
          <div className=" w-screen h-screen absolute top-0 -z-40 bg-black m-0 opacity-50"></div>
        </div>
      </div>
    </>
  );
};

export default NavBar;
