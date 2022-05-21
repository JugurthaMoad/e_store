import NavBar from "./Components/navbar";
import Header from "./Components/header";
import BotNavBar from "./Components/botNavBar";
import React, { Component, useState, useEffect } from "react";
import { getCategorie, getArticles } from "./services/data";
import GenderContext from "./context/genderContext";
import CategorieContext from "./context/CategorieContext";
import Articles from "./Components/articles";
function App() {
  const [gender, setGender] = useState("Femme"); // by default, display categories for femme
  const [categorie, setCategorie] = useState(getCategorie(gender)[0]);
  const [listCategorie, setList] = useState(getCategorie(gender));
  const [listArticles, setArticles] = useState(getArticles(categorie, gender));
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
          <NavBar articlesInCart={0} listCategorie={listCategorie} />
          <Header listCategorie={listCategorie} />
          <Articles listArticles={listArticles} />
          <BotNavBar articlesInCart={0} />
        </CategorieContext.Provider>
      </GenderContext.Provider>
    </div>
  );
}

export default App;
