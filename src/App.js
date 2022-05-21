import NavBar from "./Components/navbar";
import Header from "./Components/header";
import BotNavBar from "./Components/botNavBar";
import Test from "./Components/test";
import React, { Component, useState, useEffect } from "react";
import { getCategorie, getArticles } from "./services/data";
import GenderContext from "./context/genderContext";
import CategorieContext from "./context/CategorieContext";
import CartContext from "./context/CartContext";
import Articles from "./Components/articles";
import { Routes, Route, Link } from "react-router-dom";
function App() {
  const [gender, setGender] = useState("Femme"); // by default, display categories for femme
  const [categorie, setCategorie] = useState(getCategorie(gender)[0]);
  const [listCategorie, setList] = useState(getCategorie(gender));
  const [listArticles, setArticles] = useState(getArticles(categorie, gender));
  const [CartArticles, setCartArticles] = useState(4);

  console.log("list = ", listArticles);
  const hundleCurrentGender = (gender) => {
    setGender(gender);
    setCategorie(getCategorie(gender)[0]);
    setList(getCategorie(gender));
  };
  useEffect(() => {
    console.log("useEffet to see");
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
              addArticlesCart: setCartArticles,
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
              <Route path="/test" element={<Test />} />
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
