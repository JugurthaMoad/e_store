import React, { Component, useState, useContext } from "react";
import NavBar from "./navbar";
import { useParams, useNavigate } from "react-router-dom";
import { getArticleById } from "../services/data";
import CartContext from "../context/CartContext";
const ArticleDescription = ({ listCategorie }) => {
  let { id } = useParams();
  let navigate = useNavigate();
  const [article, setArticle] = useState(getArticleById(id));
  let cart = useContext(CartContext);
  return (
    <div>
      <NavBar listCategorie={listCategorie} />
      <div>
        <div>
          <img src={article.image} />
        </div>
        <div>
          <span>ID = {article.id}</span>
        </div>
      </div>
      nom {article.name}
      <span
        onClick={() => {
          cart.addArticlesCart();
          cart.addItems(id);
          navigate(-1);
        }}
        className="w-screen bg-black block text-white p-4 font-bold text-center absolute bottom-0"
      >
        AJOUTER AU PANIER
      </span>
    </div>
  );
};

export default ArticleDescription;
