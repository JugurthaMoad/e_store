import React, { Component, useState, useContext, useEffect } from "react";
import NavBar from "./navbar";
import { useParams, useNavigate } from "react-router-dom";
import { AlertMessage } from "./alerte";
import { getArticleById } from "../services/data";
import CartContext from "../context/CartContext";
import { CloseIcon, BackIcon, ForwardIcon } from "./icons";
const ArticleDescription = ({ listCategorie }) => {
  let { id } = useParams();
  let navigate = useNavigate();
  const [article, setArticle] = useState(getArticleById(id));
  const [showDescription, setDescription] = useState(true); // 0 for hide 1 show
  const [showAvis, setAvis] = useState(true);
  const [sizechosed, setSize] = useState(true);
  const [choose, setChoose] = useState(-1);
  const [showAlert, setAlert] = useState(false);
  let cart = useContext(CartContext);
  let [finalArticle, setFinalArticle] = useState({});
  const hundleSize = (size, index) => {
    let art = { ...finalArticle };
    art.taille = size;
    setFinalArticle(art);
    setChoose(index);
  };
  const hundleAlerte = () => {
    setAlert(false);
  };
  const hundleDescription = () => {
    setDescription(!showDescription);
  };
  const hundleAvis = () => {
    setAvis(!showAvis);
  };
  const hundleAdd = (art) => {
    let article = { ...art, ...finalArticle };
    if (article.taille !== undefined) {
      setSize(true);
      cart.addArticlesCart();
      cart.addItems(article);
      navigate(-1);
    } else {
      setSize(false);
    }
  };

  return (
    <div className="bg-gray-300 min-h-screen">
      <NavBar listCategorie={listCategorie} />
      <div className="grid grid-cols-1 ">
        <div className="grid grid-cols-1 gap-2 pb-20">
          <div>
            <div>
              <img className="h-96 w-screen" src={article.image} />
            </div>
            <div className="p-2 bg-white">
              <div className="text-sm text-stone-500 py-2">{article.name}</div>
              <div className="flex justify-between">
                <span className="text-lg font-bold">{article.prix} €</span>{" "}
                <span className="flex" onClick={hundleAvis}>
                  Avis <ForwardIcon className="w-6 h-6" />
                </span>
              </div>
              <div>
                <span className="text-sm py-2">Taille:</span>
                <ul className="flex gap-2 pl-6">
                  {article.tailles.map((taille, index) => {
                    return (
                      <li
                        onClick={() => {
                          hundleSize(taille, index);
                        }}
                        key={index}
                        className={
                          choose === index
                            ? "border-2 border-orange-600 px-4 rounded-2xl"
                            : "border-2 border-gray-300 px-4 rounded-2xl"
                        }
                      >
                        {taille}
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>
          </div>
          <div className="p-2 bg-white">Conditions Livraison</div>

          <div
            onClick={hundleDescription}
            className="p-2 bg-white grid grid-cols-1"
          >
            <div className="flex justify-between">
              <span> Description</span>
              <span className="">
                {" "}
                <ForwardIcon className="w-6 h-6" />
              </span>
            </div>
          </div>
          <div className="p-2 bg-white">Commentaires</div>
          <div className="p-2 bg-white h-full">
            Produits en relations avec ce produit
          </div>
        </div>
        <span
          onClick={() => {
            hundleAdd(article);
          }}
          className="w-screen bg-black block text-white flex justify-center items-center h-16 font-bold text-center fixed bottom-0"
        >
          AJOUTER AU PANIER
        </span>
      </div>
      <div
        className={
          showDescription
            ? " bg-white w-screen fixed h-4/6 -bottom-1/2   hidden"
            : "bg-white w-screen fixed h-4/6 bottom-0 transition duration-700 ease-in-out grid grid-cols-1"
        }
      >
        <div className="grid grid-cols-3 h-1/6 content-center">
          <span>
            <CloseIcon className="w-6 h-6" click={hundleDescription} />
          </span>
          <div className="text-center text-xl">Description</div>
          <div></div>
        </div>
        <div>Contenu de la description</div>
      </div>
      <div
        className={
          showAvis
            ? "bg-white w-screen h-screen fixed bottom-0 -right-full grid grid-cols-1 p-0 hidden"
            : "bg-white w-screen h-4/6 fixed bottom-0 right-0 grid grid-cols-1 p-2 z-40"
        }
      >
        <div className="grid grid-cols-3 h-12 p-0 opacity-100 ">
          <span>
            <BackIcon className="w-6 h-6" click={hundleAvis} />
          </span>
          <div className="text-center text-xl">Avis</div>
          <div></div>
        </div>

        <div className="w-screen h-screen fixed top-0 left-0 bg-black opacity-75 -z-40"></div>
      </div>
      <div
        className={
          sizechosed
            ? " bg-white w-screen fixed  -bottom-1/2 hidden"
            : "bg-white w-screen fixed bottom-0 z-40 ease-in-out grid grid-cols-1"
        }
      >
        <div className="z-[150]">
          <div className="p-2 pb-20">
            <div className="h-1/4 border-2 border-black">
              <img className=" w-screen h-48" src={article.image} />
            </div>
            <div className="p-2 bg-white">
              <div className="text-sm text-stone-500 py-2">{article.name}</div>
              <div className="flex justify-between">
                <span className="text-lg font-bold">{article.prix} €</span>{" "}
              </div>
              <div className="">
                <span className="text-sm py-2">Taille:</span>
                <ul className="flex gap-2 pl-6">
                  {article.tailles.map((taille, index) => {
                    return (
                      <li
                        className={
                          choose === index
                            ? "border-2 border-orange-600 px-4 rounded-2xl"
                            : "border-2 border-gray-300 px-4 rounded-2xl"
                        }
                        onClick={() => hundleSize(taille, index)}
                        key={index}
                      >
                        {taille}
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>
          </div>
          <span
            onClick={() => {
              if (finalArticle.taille !== undefined) {
                hundleAdd(article);
                setAlert(false);
              } else {
                setAlert(true);
              }
            }}
            className="w-screen bg-black block text-white absolute bottom-0 h-16 flex justify-center items-center font-bold text-center"
          >
            METRE A JOUR
          </span>
        </div>
      </div>
      <AlertMessage
        active={showAlert}
        message={"taille"}
        hundleAlerte={hundleAlerte}
      />
    </div>
  );
};

//transition duration-150 ease-in-out

export default ArticleDescription;
