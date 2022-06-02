import NavBar from "./Components/navbar";
import Header from "./Components/header";
import BotNavBar from "./Components/botNavBar";
import Test from "./Components/test";
import Profile from "./Components/profile";
import ArticleDescription from "./Components/articleDescription";
import Cart from "./Components/cart";
import Auth from "./Components/auth";
import New from "./Components/new";
import React, { Component, useState, useEffect } from "react";
import { getCategorie, getArticles } from "./services/data";
import GenderContext from "./context/genderContext";
import CategorieContext from "./context/CategorieContext";
import CartContext from "./context/CartContext";
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
  // les elements dans le panier
  const [itemsInCart, setItems] = useState([]);
  const [user, setUser] = useState({
    id: null,
    name: null,
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
      tab = tab.filter((el) => el.id !== first.id || el.taille != first.taille);

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

  useEffect(() => {
    setArticles(getArticles(categorie, gender));
  }, [categorie, gender]);
  return (
    <div className="min-h-screen min-w-screen bg-gray-300">
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
              <Routes>
                <Route
                  path="/"
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
                <Route path="/cart" element={<Cart />} />
                <Route
                  path="/article/:id"
                  element={<ArticleDescription listCategorie={listCategorie} />}
                />
                <Route path="/auth" element={<Auth />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route
                  path="*"
                  element={
                    <>
                      <div>
                        <New>
                          <div>Test </div>
                        </New>
                      </div>
                    </>
                  }
                />
              </Routes>
            </CartContext.Provider>
          </CategorieContext.Provider>
        </GenderContext.Provider>
      </UserContext.Provider>
    </div>
  );
}

export default App;
