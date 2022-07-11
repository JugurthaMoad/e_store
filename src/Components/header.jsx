import React, { Component } from "react";
import GenderBar from "./genderBar";
import CategoriesBar from "./categoriesBar";
import image1 from "../images/fond.jpg";
const Header = ({ listCategorie }) => {
  return (
    <div className="w-full md:w-screen md:mx-auto box-content">
      <div className="md:hidden">
        <GenderBar />
      </div>

      <div className="w-full">
        <img
          src={image1}
          alt="landing_image"
          className="w-full h-96 md:h-[700px] box-content"
        />
      </div>
      <CategoriesBar listCategorie={listCategorie} />
    </div>
  );
};

export default Header;
