import React, { Component, useContext } from "react";
import CategorieContext from "../context/CategorieContext";

const CategoriesBar = ({ listCategorie }) => {
  const currentCategorie = useContext(CategorieContext);
  return (
    <div className="w-full box-content">
      <ul className="w-full text-xl flex justify-between items-center box-content">
        {listCategorie.map((cat, index) => {
          return (
            <li
              key={index}
              onClick={() => currentCategorie.setCurrentCategorie(cat)}
              className={
                "cursor-pointer w-full bg-gray-200 hover:text-orange-600 text-center p-2 box-content" +
                (index < listCategorie.length - 1
                  ? " border-r-2 border-gray-800"
                  : " border-0") +
                (cat === currentCategorie.name ? "  text-orange-600" : "")
              }
            >
              {cat}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default CategoriesBar;
