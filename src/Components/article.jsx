import React, { useContext, useRef } from "react";
import { FavoriIncon } from "./icons";
import FavoritContext from "../context/FavoritContext";
const Article = ({
  click,
  image,
  price,
  categorie,
  gender,
  article,
  ...props
}) => {
  let favorite = useContext(FavoritContext);
  const favRef = useRef(null);
  const hundleFavori = (art) => {
    favorite.addFavoriteArticles(art);
    console.log("article article = ", art);
  };
  return (
    <div
      className="cursor-pointer h-[450px] border-2 border-gray-300 hover:border-gray-800 rounded flex flex-col p-2 bg-white p-3"
      onClick={(event) => {
        if (favRef.current && !favRef.current.contains(event.target)) {
          click();
        }
      }}
      {...props}
    >
      <div className="w-full h-2/3 bg-gray-800"></div>

      <span className="">{price}</span>
      <span>{categorie}</span>
      <span>{gender}</span>
      <span className="w-fit" ref={favRef}>
        <FavoriIncon
          className={
            favorite.isIni(article) >= 0
              ? "cursor-pointer text-orange-600 z-50"
              : "cursor-pointer z-50"
          }
          click={() => hundleFavori(article)}
        />
      </span>
    </div>
  );
};

export default Article;
