import React, { Component, useContext, useState, useEffect } from "react";
import { CloseIcon, ForwardIcon } from "./icons";
import CartContext from "../context/CartContext";
const Item = ({ article }) => {
  const { deleteItem, addItems, addArticlesCart, hundleModify } =
    useContext(CartContext);
  const [accept, setAccept] = useState(false);
  const [showSize, setSize] = useState(true);
  const [showAlert, setAlert] = useState(false);
  const hundleAdd = () => {
    addArticlesCart();
    addItems(article.item);
  };
  const hundleDelete = () => {
    if (article.rep === 1) {
      setAlert(true);
    } else {
      setAlert(false);
      deleteItem(article.item);
    }
  };
  const hundleshowSize = () => {
    setSize(!showSize);
  };
  const hundleSize = (size) => {
    hundleshowSize();
    hundleModify(article.item, size);
  };

  return (
    <div className="h-full w-full flex justify-between items-center text-black">
      <div className="w-1/2 h-full">
        <img className="h-full w-full" src={article.item.image} />
      </div>
      <div className="flex flex-col justify-between w-1/2 h-full pl-2">
        <div>
          <span className="block w-full py-2 px-1 flex justify-between text-sm text-gray-400">
            {article.item.name}
            <span>l</span>
          </span>
          <span
            onClick={hundleshowSize}
            className="cursor-pointer hover:border-black p-1 px-3 bg-gray-100 border-2 border-gray-300 rounded-full text-sm"
          >
            {article.item.taille} v
          </span>
        </div>

        <span className="block w-full flex justify-between px-1">
          <span>{article.item.prix} €</span>
          <span>
            <span
              onClick={hundleDelete}
              className="cursor-pointer px-2 py-1 border-2 border-r-0 border-gray-300 rounded-l-full"
            >
              -
            </span>
            <span className="px-2 py-1 border-2 border-gray-300">
              {article.rep}
            </span>
            <span
              onClick={hundleAdd}
              className="cursor-pointer px-2 py-1 border-2 border-l-0 border-gray-300 rounded-r-full"
            >
              +
            </span>
          </span>
        </span>
      </div>
      <div
        className={
          showSize
            ? " bg-white w-screen fixed min-h-3/6 -bottom-1/2 right-0  hidden"
            : " w-screen min-h-3/6 fixed bottom-0 right-0 z-[150] md:h-screen md:flex md:justify-center md:items-center"
        }
      >
        <div className="h-2/3 p-2 md:w-3/12 md:border-2 md:border-red-900 md:bg-white md:h-[400px]">
          <span className="w-screen">
            <CloseIcon className="cursor-pointer" click={hundleshowSize} />
          </span>
          <div>
            <img className="h-40 w-screen" src={article.item.image} />
          </div>
          <div className="p-2 bg-white">
            <div className="text-sm text-stone-500 py-2">
              {article.item.name}
            </div>
            <div className="flex justify-between">
              <span className="text-lg font-bold">{article.item.prix} €</span>{" "}
            </div>
            <div>
              <span className="text-sm py-2">Taille:</span>
              <ul className="flex gap-2 pl-6">
                {article.item.tailles.map((taille, index) => {
                  return (
                    <li
                      className={
                        taille === article.item.taille
                          ? "cursor-pointer border-2 border-orange-600 px-4 rounded-2xl"
                          : "cursor-pointer hover:border-black border-2 border-gray-300 px-4 rounded-2xl"
                      }
                      onClick={() => hundleSize(taille)}
                      key={index}
                    >
                      {taille}
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className={showAlert ? "fixed z-[260]" : "hidden"}>
        <div className="w-screen h-screen bg-black text-white fixed bottom-0 left-0 opacity-50 z-[160]"></div>
        <div className="w-screen h-screen fixed bottom-0 left-0  z-[260] flex justify-center items-center ">
          <div className="w-2/3 bg-white text-black h-24 flex flex-col z-[260] justify-center items-center md:w-[430px]">
            <span className="p-2">Voulez vous supprimer ?</span>
            <div className="flex gap-2">
              <span
                onClick={() => {
                  deleteItem(article.item);
                  setAlert(false);
                }}
                className="cursor-pointer p-2 bg-black text-white"
              >
                {" "}
                Oui{" "}
              </span>
              <span
                onClick={() => {
                  setAlert(false);
                }}
                className="cursor-pointer p-2 bg-black text-white"
              >
                {" "}
                Non{" "}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Item;
