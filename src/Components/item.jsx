import React, { Component, useContext } from "react";
import CartContext from "../context/CartContext";
const Item = ({ article }) => {
  const { deleteItem } = useContext(CartContext);
  return (
    <div className="h-full w-full flex justify-between items-center text-black">
      <div className="w-1/2 h-full">
        <img className="h-full w-full" src={article.item.image} />
      </div>
      <div className="flex flex-col ">
        <span className="block w-full">
          {article.item.id}
          genre : {article.item.gender}
        </span>
        <span className="block w-full">
          {article.item.name}
          rep = {article.rep}
        </span>
        <span
          onClick={() => {
            deleteItem(article.item);
          }}
          className="block text-red-800 text-xl font-bold"
        >
          X
        </span>
      </div>
    </div>
  );
};

export default Item;
