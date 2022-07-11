import React, { Component, Fragment } from "react";
import Article from "./article";
import { useNavigate } from "react-router-dom";
const Articles = ({ listArticles }) => {
  let navigate = useNavigate();
  const hundleClick = (id) => {
    let to = `/article/${id}`;
    navigate(to);
  };
  return (
    <div className="w-full pb-16 p-2 grid grid-cols-1 sm:grid-cols-2 gap-4 bg-transparent md:grid-cols-3 lg:grid-cols-4 md:py-3 md:gap-2  lg:w-10/12 lg:mx-auto">
      {listArticles.map((art, index) => {
        return (
          <div key={index}>
            <Article
              click={() => hundleClick(art.id)}
              image={art.image}
              price={art.prix}
              categorie={art.categorie}
              gender={art.gender}
              article={art}
            />
          </div>
        );
      })}
    </div>
  );
};

export default Articles;
