import NavBar from "./Components/navbar";
import Header from "./Components/header";
import BotNavBar from "./Components/botNavBar";
import Test from "./Components/test";
import Profile from "./Components/profile";
import ArticleDescription from "./Components/articleDescription";
import Cart from "./Components/cart";
import Auth from "./Components/auth";
import Favorite from "./Components/favorite";
import React, { Component, useState, useEffect } from "react";
import { getCategorie, getArticles } from "./services/data";
import GenderContext from "./context/genderContext";
import CategorieContext from "./context/CategorieContext";
import CartContext from "./context/CartContext";
import FavoritContext from "./context/FavoritContext";
import UserContext from "./context/UserContext";
import Articles from "./Components/articles";
import Login from "./Components/login";
import Register from "./Components/register";
import { Routes, Route, Link } from "react-router-dom";
function App(props) {
  const [gender, setGender] = useState("Femme"); // by default, display categories for femme
  const [categorie, setCategorie] = useState(getCategorie(gender)[0]);
  const [listCategorie, setList] = useState(getCategorie(gender));
  // liste des articles
  const [listArticles, setArticles] = useState(getArticles(categorie, gender));
  // nombre elements dans la panier
  const [CartArticles, setCartArticles] = useState(0);
  const [FavoritArticles, setFavoritArticles] = useState(0);
  // les elements dans le panier
  const [itemsInCart, setItems] = useState([]);
  const [itemsInFavorit, setItemsinFavorit] = useState([]);
  const [user, setUser] = useState({
    id: 5,
  });
  let tab = itemsInCart;
  let articles = [];
  // element whit repetition
  const [elementInCart, setElement] = useState([]);
  const hundleCurrentGender = (gender) => {
    setGender(gender);
    setCategorie(getCategorie(gender)[0]);
    setList(getCategorie(gender));
  };
  const hundleCartArticles = () => {
    setCartArticles(CartArticles + 1);
  };
  const hundleFavorites = (article) => {
    console.log("article = ", article);
    let inFav = inFavorite(article);
    console.log("fav = ", inFav);
    console.log("items in fav = ", itemsInFavorit);
    if (inFav >= 0) {
      console.log("in ");
      deleteFavorit(article);
    } else {
      console.log("out");
      addFavorit(article);
    }
  };
  const fillCart = () => {
    let article = {};
    let o = 0;
    let first = tab[0];
    if (tab.length > 0) {
      tab.forEach((el) => {
        if (el.id === first.id && el.taille === first.taille) {
          o++;
        }
      });
      tab = tab.filter(
        (el) => el.id !== first.id || el.taille !== first.taille
      );

      article.rep = o;
      article.item = first;
      articles.push(article);
      fillCart();
    }
    setElement(articles);
  };

  const hundleItems = (it) => {
    let item = itemsInCart;
    item.push(it);
    setItems(item);
    fillCart();
  };

  const hundleDelete = (it) => {
    let item = itemsInCart;
    let index = item.indexOf(it);
    item.splice(index, 1);
    setCartArticles(CartArticles - 1);
    setItems(item);
    fillCart();
  };

  const hundleModify = (article, size) => {
    itemsInCart.forEach((item) => {
      if (item.id === article.id) {
        item.taille = size;
      }
    });
    fillCart();
  };
  const addFavorit = (article) => {
    setFavoritArticles(FavoritArticles + 1);
    const tab = itemsInFavorit;
    tab.push(article);
    setItemsinFavorit(tab);
    console.log("items in favorit = ", itemsInFavorit);
  };
  const deleteFavorit = (article) => {
    console.log("delete article = ", article);
    setFavoritArticles(FavoritArticles - 1);
    let tab = itemsInFavorit;
    // let index = tab.indexOf(article.id);

    // tab.splice(index, 1);
    // console.log("delete id = ", index);
    tab = tab.filter((art) => art.id !== article.id);
    setItemsinFavorit(tab);
  };
  const inFavorite = (article) => {
    return itemsInFavorit.indexOf(article);
  };
  console.log("articles in favorite = ", itemsInFavorit);
  useEffect(() => {
    setArticles(getArticles(categorie, gender));
  }, [categorie, gender]);
  return (
    <div className="w-screen box-content bg-white flex flex-col">
      <UserContext.Provider
        value={{
          user: user,
          setUser: setUser,
        }}
      >
        <GenderContext.Provider
          value={{
            name: gender,
            setCurrentGender: hundleCurrentGender,
          }}
        >
          <CategorieContext.Provider
            value={{
              name: categorie,
              setCurrentCategorie: setCategorie,
            }}
          >
            <CartContext.Provider
              value={{
                articlesInCart: CartArticles,
                items: itemsInCart,
                addArticlesCart: hundleCartArticles,
                addItems: hundleItems,
                deleteItem: hundleDelete,
                elements: elementInCart,
                hundleModify: hundleModify,
              }}
            >
              <FavoritContext.Provider
                value={{
                  articlesInFav: FavoritArticles,
                  listImtems: itemsInFavorit,
                  addFavoriteArticles: hundleFavorites,
                  isIni: inFavorite,
                }}
              >
                <Routes>
                  <Route
                    path="/e_store"
                    element={
                      <>
                        <NavBar listCategorie={listCategorie} />
                        <Header listCategorie={listCategorie} />
                        <Articles listArticles={listArticles} />
                        <BotNavBar />
                      </>
                    }
                  />
                  <Route
                    path="/test"
                    element={
                      <Test
                        listCategorie={listCategorie}
                        listArticles={listArticles}
                      />
                    }
                  />
                  <Route path="/profile" element={<Profile />} />
                  <Route
                    path="/favorite"
                    element={
                      <Favorite
                        listArticles={listArticles}
                        listCategorie={listCategorie}
                      />
                    }
                  />
                  <Route path="/cart" element={<Cart />} />
                  <Route
                    path="/article/:id"
                    element={
                      <ArticleDescription listCategorie={listCategorie} />
                    }
                  />
                  <Route path="/auth" element={<Auth />} />
                  <Route path="/login" element={<Login />} />
                  <Route path="/register" element={<Register />} />
                  <Route
                    path="*"
                    element={
                      <>
                        <div>page introuvable</div>
                      </>
                    }
                  />
                </Routes>
              </FavoritContext.Provider>
            </CartContext.Provider>
          </CategorieContext.Provider>
        </GenderContext.Provider>
      </UserContext.Provider>
    </div>
  );
}

export default App;
