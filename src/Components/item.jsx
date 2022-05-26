import React, { Component, useContext } from "react";
import CartContext from "../context/CartContext";
const Item = ({ article }) => {
  const { deleteItem, addItems, addArticlesCart } = useContext(CartContext);
  const hundleAdd = () => {
    console.log("Add ");
    addArticlesCart();
    addItems(article.item);
  };
  const hundleDelete = () => {
    console.log("delete ");
    deleteItem(article.item);
  };
  return (
    <div className="h-full w-full flex justify-between items-center text-black">
      <div className="w-1/2 h-full">
        <img className="h-full w-full" src={article.item.image} />
      </div>
      <div className="flex flex-col justify-between w-1/2 h-full pl-2">
        <div>
          <span className="block w-full flex justify-between">
            {article.item.name}
            <span>l</span>
          </span>
          <span>Taille : {article.item.tailles[0]}</span>
        </div>

        <span className="block w-full flex justify-between">
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
    </div>
  );
};

export default Item;
