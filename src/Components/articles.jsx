import React, { Component } from "react";
import Article from "./article";
import { useNavigate } from "react-router-dom";
const Articles = ({ listArticles }) => {
  let navigate = useNavigate();
  const hundleClick = (id) => {
    let to = `/article/${id}`;
    navigate(to);
  };
  return (
    <div className="w-screen grid grid-cols-2 gap-4 bg-gray-200 p-2 pb-20 md:shadow-2xl md:grid-cols-3 lg:grid-cols-4 md:py-3 md:gap-y-4 md:w-11/12 md:mx-auto lg:w-8/12 lg:mx-auto 2xl:w-6/12 2xl:mx-auto">
      {listArticles.map((art, index) => {
        return (
          <div key={index}>
            <Article
              onClick={() => hundleClick(art.id)}
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
