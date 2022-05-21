import React, { Component } from "react";
import Article from "./article";
const Articles = ({ listArticles }) => {
  console.log(listArticles.length);
  return (
    <div className="w-screen grid grid-cols-2 gap-4 bg-gray-200 p-2 pb-20">
      {listArticles.map((art, index) => {
        return (
          <div key={index}>
            <Article
              image={art.image}
              price={art.prix}
              categorie={art.categorie}
              gender={art.gender}
            />
          </div>
        );
      })}
    </div>
  );
};

export default Articles;
