import React, { Component, useContext, useState, useEffect } from "react";
import { CloseIcon, ForwardIcon } from "./icons";
import CartContext from "../context/CartContext";
const Item = ({ article }) => {
  const { deleteItem, addItems, addArticlesCart, hundleModify } =
    useContext(CartContext);
  const [showSize, setSize] = useState(true);

  const hundleAdd = () => {
    addArticlesCart();
    addItems(article.item);
  };
  const hundleDelete = () => {
    deleteItem(article.item);
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
            className="p-1 px-3 bg-gray-100 border-2 border-gray-300 rounded-full text-sm"
          >
            {article.item.taille} v
          </span>
        </div>

        <span className="block w-full flex justify-between px-1">
          <span>{article.item.prix} €</span>
          <span>
            <span
              onClick={hundleDelete}
              className="px-2 py-1 border-2 border-r-0 border-gray-300 rounded-l-full"
            >
              -
            </span>
            <span className="px-2 py-1 border-2 border-gray-300">
              {article.rep}
            </span>
            <span
              onClick={hundleAdd}
              className="px-2 py-1 border-2 border-l-0 border-gray-300 rounded-r-full"
            >
              +
            </span>
          </span>
        </span>
      </div>
      <div
        className={
          showSize
            ? " bg-white w-screen fixed h-4/6 -bottom-1/2 right-0 hidden"
            : "bg-white w-screen h-4/6 fixed bottom-0 right-0"
        }
      >
        <div>
          <span className="w-screen">
            <CloseIcon click={hundleshowSize} />
          </span>
          <div>
            <img className="h-96 w-screen" src={article.item.image} />
          </div>
          <div className="p-2 bg-white">
            <div className="text-sm text-stone-500 py-2">
              {article.item.name}
            </div>
            <div className="flex justify-between">
              <span className="text-lg font-bold">{article.item.prix} €</span>{" "}
              <span className="flex" onClick={() => console.log("detail")}>
                Detail <ForwardIcon className="w-6 h-6" />
              </span>
            </div>
            <div>
              <span className="text-sm py-2">Taille:</span>
              <ul className="flex gap-2 pl-6">
                {article.item.tailles.map((taille, index) => {
                  return (
                    <li
                      className="border-2 border-gray-300 px-4 rounded-2xl"
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
    </div>
  );
};

export default Item;
