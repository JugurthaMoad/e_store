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
    <div className="w-screen grid grid-cols-2 gap-4 bg-gray-200 p-2 pb-20">
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
