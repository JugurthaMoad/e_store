import NavBar from "./Components/navbar";
import GenderBar from "./Components/genderBar";
import React, { Component, useState, useEffect } from "react";
import { getGenders } from "./services/data";
function App() {
  const [genders, setGenders] = useState([]);
  useEffect(() => {
    console.log("useEffect ");
    setGenders(getGenders());
  }, []);
  return (
    <div>
      <NavBar genders={genders} />
      <GenderBar />
    </div>
  );
}

export default App;
