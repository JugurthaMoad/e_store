import React, { Component } from "react";
const Article = ({ image, price, categorie, gender, ...props }) => {
  console.log("price = ", price);
  return (
    <div className=" w-full flex flex-col p-1 bg-white" {...props}>
      <img src={image} />
      <span className=" py-4">{price}</span>
      <span>{categorie}</span>
      <span>{gender}</span>
    </div>
  );
};

export default Article;
