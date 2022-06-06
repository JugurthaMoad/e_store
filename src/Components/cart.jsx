import React, { Component, useContext, useState, useEffect } from "react";
import CartContext from "../context/CartContext";
import { BackIcon, CheckedIcon } from "./icons";
import Item from "./item";
import { useNavigate } from "react-router-dom";
import emptyCart from "../images/pannier.png";
//{article.rep}
const Cart = () => {
  let navigate = useNavigate();
  let cart = useContext(CartContext);
  const { elements } = cart;
  let prix = 0;
  const [total, setTotal] = useState(prix);
  const hundleBack = () => {
    navigate(-1);
  };
  const renderItems = (elements) => {
    if (elements.length === 0) {
      return (
        <div className=" h-[30vh] self-center">
          <img className="w-full h-full" src={emptyCart} />
        </div>
      );
    } else {
      return elements.map((item, index) => {
        return (
          <div className="bg-white p-2 h-36 w-full md:w-5/12" key={index}>
            <div className="h-full w-full">
              <Item article={item} />
            </div>
          </div>
        );
      });
    }
  };
  const hundlePrice = () => {
    prix = 0;
    if (elements.length === 0) {
      prix = 0;
    } else {
      elements.forEach((element) => {
        prix += element.rep * element.item.prix;
      });
    }
    setTotal(prix);
  };
  useEffect(() => {
    hundlePrice();
  });
  return (
    <div className="bg-gray-300 min-h-screen md:bg-white">
      <div className="w-screen bg-black ">
        <div className="w-screen h-16 bg-black text-white p-2 grid grid-cols-3 items-center  md:px-2 md:gap-2 md:justify-between md:w-11/12 md:mx-auto lg:w-8/12 lg:mx-auto 2xl:w-6/12 2xl:mx-auto">
          <div>
            <BackIcon
              className="cursor-pointer float-left"
              click={hundleBack}
            />
          </div>
          <div className="text-center text-l font-bold">Mon Panier</div>
          <div>
            <CheckedIcon className="float-right" />
          </div>
        </div>
      </div>
      <div className=" md:flex md:flex-col md:justify-center md:items-center bg-gray-200 md:w-11/12 md:mx-auto lg:w-8/12 lg:mx-auto 2xl:w-6/12 2xl:mx-auto">
        <div className="w-screen flex flex-col justify-center items-center gap-y-4 pb-24 text-black px-4 py-4 md:w-11/12 md:items-start">
          {renderItems(elements)}
        </div>
        <div
          className={
            total > 0
              ? "w-screen fixed bottom-0 bg-white flex flex-col md:relative md:z-[0] md:w-full "
              : "hidden"
          }
        >
          <span className="w-screen px-2 py-4 text-xl font-bold text-black block md:w-full md:mx-auto lg:w-8/12 lg:mx-auto 2xl:w-6/12 2xl:mx-auto">
            Total:{total} €
          </span>

          <span
            onClick={() => {
              console.log("Total a payer pour : ", total, elements);
            }}
            className="cursor-pointer block w-screen bg-black text-white p-4 text-center text-xl font-bold md:w-8/12 md:mx-auto lg:w-8/12 lg:mx-auto 2xl:w-6/12 2xl:mx-auto"
          >
            PAYER {total} €
          </span>
        </div>
      </div>
    </div>
  );
};

export default Cart;
