import React, { Component, useState, useEffect, useContext } from "react";
import GenderContext from "../context/genderContext";
import { getCategorie } from "../services/data";
import {
  ProfilIcon,
  FavoriIncon,
  CartIcon,
  MobilMenu,
  CloseIcon,
} from "./icons";
import GenderBar from "./genderBar";
const NavBar = ({ articlesInCart }) => {
  const [showMenu, setShowMenu] = useState(0);
  const [listCategorie, setList] = useState([]);
  const currentGender = useContext(GenderContext);
  const hundleShowMenu = () => {
    setShowMenu(!showMenu);
  };
  useEffect(() => {
    setList(getCategorie(currentGender.name));
  }, [currentGender.name]);
  return (
    <>
      <div>
        <div className="w-full h-20 bg-black text-white px-2 py-0 grid grid-cols-3 items-center md:hidden">
          <div>
            <MobilMenu click={hundleShowMenu} />
          </div>
          <div>
            <span className="block text-2xl font-semibold uppercase">Logo</span>
          </div>
          <div className="flex justify-end">
            <FavoriIncon className="text-orange-500" />
            <ProfilIcon />
            <CartIcon />
            <span
              className={
                articlesInCart > 0
                  ? "relative bottom-4 block w-6 h-6 rounded-full text-center items-center bg-red-600"
                  : "hidden"
              }
            >
              {articlesInCart}
            </span>
          </div>
        </div>
        <div
          className={showMenu ? "w-5/6 h-4/5 absolute top-0 flex" : "hidden"}
        >
          <div className="bg-gray-400 w-5/6">
            <GenderBar />
            <ul className="w-full h-full flex flex-col items-center py-4 gap-y-2">
              {listCategorie.map((cat, index) => {
                return (
                  <li
                    key={index}
                    className="w-5/6 text-xl p-4 bg-slate-50
                  "
                  >
                    {cat}
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
        </div>
      </div>
    </>
  );
};

export default NavBar;
