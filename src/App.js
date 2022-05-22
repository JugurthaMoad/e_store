import NavBar from "./Components/navbar";
import Header from "./Components/header";
import BotNavBar from "./Components/botNavBar";
import Test from "./Components/test";
import Profile from "./Components/profile";
import ArticleDescription from "./Components/articleDescription";
import Cart from "./Components/cart";
import React, { Component, useState, useEffect } from "react";
import { getCategorie, getArticles } from "./services/data";
import GenderContext from "./context/genderContext";
import CategorieContext from "./context/CategorieContext";
import CartContext from "./context/CartContext";
import Articles from "./Components/articles";
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
        if (el.id === first.id) {
          o++;
        }
      });
      tab = tab.filter((el) => el.id !== first.id);

      article.rep = o;
      article.item = first;
      articles.push(article);
      fillCart();
    }
    setElement(articles);
    console.log("elementInCart = ", elementInCart);
  };

  const hundleItems = (it) => {
    let item = itemsInCart;
    item.push(it);
    setItems(item);
    fillCart();
  };

  const hundleDelete = (it) => {
    console.log("it = ", it);
    let item = itemsInCart;
    console.log("item = ", item);
    let index = item.indexOf(it);
    console.log("index = ", index);
    item.splice(index, 1);
    console.log("iem after ", item);
    setCartArticles(CartArticles - 1);
    setItems(item);
    fillCart();
  };
  useEffect(() => {
    setArticles(getArticles(categorie, gender));
  }, [categorie, gender]);
  return (
    <div>
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
              <Route
                path="/cart"
                element={<Cart listArticles={listArticles} />}
              />
              <Route
                path="/article/:id"
                element={<ArticleDescription listCategorie={listCategorie} />}
              />
              <Route
                path="*"
                element={
                  <>
                    <div>
                      <Link to="/">Home Page</Link>
                    </div>
                  </>
                }
              />
            </Routes>
          </CartContext.Provider>
        </CategorieContext.Provider>
      </GenderContext.Provider>
    </div>
  );
}

export default App;

/*

let a = [1, 4, 1, 3, 2];
let tab = a.sort();
let element = []; // va contenir les element

const test = () => {
  let o = 0;
  let obj = {};
  let first = tab[0]; // 1er element
  if (tab.length > 0) {
    tab.forEach((el) => {
      console.log("el = ", el);
      if (el === first) {
        o++;
        console.log("o = ", o);
      }
    });
    tab = tab.filter((el) => el !== first);
    obj.rep = o;
    obj.item = first;
    element.push(obj);
    test();
  }
};

test();
console.log("element = ", element);
*/
