import React, { Component } from "react";
import GenderBar from "./genderBar";
import CategoriesBar from "./categoriesBar";
import image1 from "../images/fond.jpg";
const Header = ({ listCategorie }) => {
  return (
    <div>
      <GenderBar />
      <div className="w-full">
        <img src={image1} className="w-full h-96" />
      </div>
      <CategoriesBar listCategorie={listCategorie} />
    </div>
  );
};

export default Header;
