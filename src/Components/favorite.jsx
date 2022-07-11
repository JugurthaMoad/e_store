import React, { useContext } from "react";
import Articles from "./articles";
import FavoritContext from "../context/FavoritContext";
import NavBar from "./navbar";
const Favorite = ({ listArticles, listCategorie }) => {
  const favorite = useContext(FavoritContext);
  const render = () => {
    if (favorite.articlesInFav <= 0) {
      return (
        <span className="block text-center text-red-600 mt-10">
          No article{" "}
        </span>
      );
    } else {
      return <Articles listArticles={favorite.listImtems} />;
    }
  };
  return (
    <div className="w-full h-full flex-col justify-center items-container">
      <NavBar listCategorie={listCategorie} />
      <h2 className=" p-4 flex justify-center items-center ">
        Liste des envies
      </h2>
      {render()}
    </div>
  );
};

export default Favorite;
