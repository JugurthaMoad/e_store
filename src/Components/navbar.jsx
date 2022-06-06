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
  const [profileDropMenu, setProfile] = useState(false);
  const hundleShowMenu = () => {
    setShowMenu(!showMenu);
  };
  const navigate = useNavigate();
  const hundleBack = () => {
    navigate(-1);
  };
  const hundleCart = () => {
    navigate("/cart");
  };
  const hundleProfil = () => {
    navigate("/profile");
  };
  return (
    <>
      <div className="w-full">
        <div className="w-full h-16 bg-black text-white px-4 grid grid-cols-3 items-center md:hidden">
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
              className="block text-xl font-semibold uppercase"
            >
              Logo
            </span>
          </div>
          <div className="flex justify-end gap-2">
            <FavoriIncon />
            <div className="flex justify-center items-center">
              <CartIcon click={hundleCart} />
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
          </div>
        </div>
        <div
          className={
            showMenu
              ? "transition duration-300 ease-out w-5/6 h-4/5 absolute top-0 flex  translate-x-0 z-[150]"
              : "transition duration-300 ease-out w-5/6 h-4/5 absolute top-0 -left-10 flex  -translate-x-full z-[150]"
          }
        >
          <div className="bg-gray-400 w-full">
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
            className="w-8 bg-orange-500 text-black h-8 flex items-center"
            onClick={hundleShowMenu}
          >
            <CloseIcon />
          </span>
        </div>
        <div
          className={
            showMenu
              ? "transition-opacity w-screen h-screen bg-black opacity-25 bottom-0 fixed z-40"
              : "transition-opacity w-screen h-screen bg-black opacity-0 bottom-0 fixed  z-[-150]"
          }
        ></div>
        <div className="hidden md:fixed md:block md:w-screen md:bg-black md:text-white md:h-16">
          <div className="md:relative md:h-16 md:flex md:justify-between md:items-center md:gap-2 md:px-6 md:w-11/12 md:mx-auto lg:w-8/12 lg:mx-auto 2xl:w-6/12 2xl:mx-auto">
            <div className="">
              {" "}
              <BackIcon
                click={hundleBack}
                className={
                  useMatch("/")
                    ? "hidden"
                    : "cursor-pointer relative hover:text-orange-600"
                }
              />
              <div className={!useMatch("/") ? "hidden" : " relative"}>
                <GenderBar />
              </div>
            </div>
            <div
              onClick={() => navigate("/")}
              className="cursor-pointer block text-2xl font-semibold uppercase"
            >
              LOGO
            </div>
            <div className="flex justify-center items-center gap-5">
              <ProfilIcon
                click={hundleProfil}
                className="cursor-pointer md:hover:text-orange-600"
              />

              <FavoriIncon className="cursor-pointer md:hover:text-orange-600" />

              <div className="cursor-pointer h-full flex justify-center items-center">
                <CartIcon
                  className="md:hover:text-orange-600"
                  click={hundleCart}
                />
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
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default NavBar;
