import NavBar from "./Components/navbar";
import GenderBar from "./Components/genderBar";
import React, { Component, useState, useEffect } from "react";
import { getGenders } from "./services/data";
import GenderContext from "./context/genderContext";
function App() {
  const [genders, setGenders] = useState([]);
  const [gender, setGender] = useState("Femme"); // by default, display categories for femme
  return (
    <div>
      <NavBar genders={genders} articlesInCart={0} />
      <GenderBar gender={gender} setGender={setGender} />
    </div>
  );
}

export default App;
