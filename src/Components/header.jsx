import React, { Component } from "react";
import GenderBar from "./genderBar";
import CategoriesBar from "./categoriesBar";
import image1 from "../images/fond.jpg";
const Header = ({ listCategorie }) => {
  return (
    <div className="w-full md:shadow-2xl md:pt-[64px] md:w-11/12 md:mx-auto lg:w-8/12 lg:mx-auto 2xl:w-6/12 2xl:mx-auto">
      <div className="md:hidden">
        <GenderBar className="" />
      </div>

      <div className="w-full">
        <img src={image1} className="w-full h-96 md:h-[500px]" />
      </div>
      <CategoriesBar listCategorie={listCategorie} />
    </div>
  );
};

export default Header;
