import React, { Component } from "react";
const Item = ({ article }) => {
  return (
    <div className="w-full grid grid-cols-2 text-black bg-gray-200">
      <img src={article.image} />
      <div className="flex flex-col justify-between px-1 py-6">
        <span className="block w-full border-2 border-black p-2">
          {article.id}
        </span>
        <span className="block w-full border-2 border-black p-2">
          {article.name}
        </span>
      </div>
    </div>
  );
};

export default Item;
