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
  const [showDescription, setDescription] = useState(false); // 0 for hide 1 show
  const [showAvis, setAvis] = useState(false);
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
      <div className="grid grid-cols-1 md:w-11/12 md:pt-[64px] md:mx-auto lg:w-8/12 lg:mx-auto 2xl:w-6/12 2xl:mx-auto">
        <div className="grid grid-cols-1 gap-2 pb-20 md:pb-2">
          <div>
            <div>
              <img className="h-96 w-screen md:h-100" src={article.image} />
            </div>
            <div className="p-2 bg-white">
              <div className="text-sm text-stone-500 py-2">{article.name}</div>
              <div className="flex justify-between">
                <span className="text-lg font-bold">{article.prix} €</span>{" "}
                <span className="cursor-pointer flex" onClick={hundleAvis}>
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
                            ? "cursor-pointer border-2 border-orange-600 px-4 rounded-2xl"
                            : "cursor-pointer border-2 border-gray-300 px-4 rounded-2xl md:hover:border-black"
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
            className="cursor-pointer p-2 bg-white grid grid-cols-1"
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
          className="w-screen cursor-pointer bg-black block text-white flex justify-center items-center h-16 font-bold text-center fixed bottom-0 md:relative md:block md:flex md:justify-center md:items-center md:h-12 md:rounded md:w-7/12 md:mx-auto lg:w-8/12 lg:mx-auto 2xl:w-6/12 2xl:mx-auto"
        >
          AJOUTER AU PANIER
        </span>
      </div>
      <div
        className={
          showDescription
            ? "transition duration-300 ease-out h-1/2 w-full bg-white  fixed bottom-0 translate-y-0 z-[150] md:h-screen md:w-screen md:bg-transparent md:flex md:justify-center md:items-center"
            : "transition duration-300 ease-out h-1/2 w-full bg-white  fixed bottom-0 translate-y-full z-[150] md:h-screen md:w-screen md:bg-transparent md:flex md:justify-center md:items-center"
        }
      >
        <div className="md:bg-white md:w-5/12 md:h-1/2">
          <span>
            <CloseIcon
              className="cursor-pointer w-6 h-6"
              click={hundleDescription}
            />
          </span>
          Contenu de la description
        </div>
      </div>
      <div
        className={
          showDescription
            ? "transition-opacity w-screen h-screen bg-black opacity-50 fixed bottom-0 z-40"
            : "transition-opacity w-screen h-screen bg-black opacity-0 fixed bottom-0 z-[-150]"
        }
      ></div>

      <div
        className={
          showAvis
            ? "transition duration-300 ease-out h-4/6 w-full  bg-white text-black  fixed bottom-0 translate-x-0 z-[150]  md:h-screen md:w-screen md:bg-transparent md:flex md:justify-center md:items-center "
            : "transition duration-300 ease-out h-4/6 w-full  bg-white text-black  fixed  bottom-0 translate-x-full z-[150] md:h-screen md:w-screen md:bg-transparent md:flex md:justify-center md:items-center"
        }
      >
        <div className="md:bg-white md:w-5/12 md:h-1/2">
          <span>
            <BackIcon className="cursor-pointer w-6 h-6" click={hundleAvis} />
          </span>
          Contenu avis
        </div>
      </div>
      <div
        className={
          showAvis
            ? "transition-opacity w-screen h-screen bg-black opacity-25 bottom-0 fixed z-40"
            : "transition-opacity w-screen h-screen bg-black opacity-0 bottom-0 fixed  z-[-150]"
        }
      ></div>
      <div
        className={
          !sizechosed
            ? "transition duration-300 ease-out h-auto w-full bg-white  text-black fixed bottom-0 translate-y-0 z-[150] md:h-screen md:bg-transparent md:flex md:justify-center md:items-center "
            : "transition duration-300 ease-out h-auto w-full bg-white  fixed text-black bottom-0 translate-y-full z-[150] md:h-screen md:bg-transparent md:flex md:justify-center md:items-center "
        }
      >
        <div className="md:w-5/12 md:bg-white md:p-4">
          <div className="p-1 ">
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
                            ? "cursor-pointer border-2 border-orange-600 px-4 rounded-2xl"
                            : "cursor-pointer border-2 border-gray-300 px-4 rounded-2xl md:hover:border-black"
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
            className="cursor-pointer w-screen bg-black block text-white  bottom-0 h-16 flex justify-center items-center font-bold text-center md:flex md:justify-center md:items-center md:h-12 md:rounded md:w-5/12 md:mx-auto"
          >
            METRE A JOUR
          </span>
        </div>
      </div>
      <div
        className={
          !sizechosed
            ? "hidden md:block md:h-screen md:w-screen md:bg-black md:opacity-50 md:fixed md:bottom-0"
            : "hidden md:hidden"
        }
      ></div>
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
