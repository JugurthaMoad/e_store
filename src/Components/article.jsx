import React, { Component } from "react";
const Article = ({ image, price, categorie, gender, ...props }) => {
  return (
    <div
      className="cursor-pointer w-full flex flex-col p-1 bg-white md:p-3 hover:shadow-2xl"
      {...props}
    >
      <img src={image} />
      <span className=" py-4">{price}</span>
      <span>{categorie}</span>
      <span>{gender}</span>
    </div>
  );
};

export default Article;
