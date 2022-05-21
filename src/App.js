import NavBar from "./Components/navbar";
import Header from "./Components/header";
import React, { Component, useState, useEffect } from "react";
import { getCategorie } from "./services/data";
import GenderContext from "./context/genderContext";
import CategorieContext from "./context/CategorieContext";
function App() {
  const [gender, setGender] = useState("Femme"); // by default, display categories for femme
  const [categorie, setCategorie] = useState(getCategorie(gender)[0]);
  const [listCategorie, setList] = useState(getCategorie(gender));

  const hundleCurrentGender = (gender) => {
    setGender(gender);
    setCategorie(getCategorie(gender)[0]);
    setList(getCategorie(gender));
  };

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
          <NavBar articlesInCart={5} listCategorie={listCategorie} />
          <Header listCategorie={listCategorie} />
        </CategorieContext.Provider>
      </GenderContext.Provider>
    </div>
  );
}

export default App;
