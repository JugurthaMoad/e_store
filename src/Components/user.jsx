import React, { Component, useContext, useState } from "react";
import UserContext from "../context/UserContext";
import { SettingIcon, CartIcon, BackIcon, ForwardIcon } from "./icons";
import CartContext from "../context/CartContext";
import { useNavigate } from "react-router-dom";
const User = () => {
  const [showSetting, setSetting] = useState(false);
  const [showAccout, setAccout] = useState(false);
  const { user } = useContext(UserContext);
  const cart = useContext(CartContext);
  const navigate = useNavigate();
  const hundleSetting = () => {
    setSetting(!showSetting);
  };
  const hundleCart = () => {
    navigate("/cart");
  };
  const hundleAccout = () => {
    setAccout(!showAccout);
  };
  const hundleBack = () => {
    navigate(-1);
  };
  return (
    <div className="w-full h-full flex flex-col gap-2">
      <div className="w-screen bg-black ">
        <div className="w-full h-16 text-white flex justify-between items-center px-4 gap-3 md:px-2 md:gap-2 md:justify-between md:w-11/12 md:mx-auto lg:w-8/12 lg:mx-auto 2xl:w-6/12 2xl:mx-auto">
          <BackIcon
            click={hundleBack}
            className="md:cursor-pointer hover:text-orange-600"
          />
          <div
            onClick={() => navigate("/")}
            className="block text-xl font-semibold uppercase cursor-pointer  md:text-2xl"
          >
            LOGO
          </div>
          <div className="flex justify-center gap-2 md:flex ">
            <div className="cursor-pointer h-full flex justify-center items-center">
              <CartIcon
                className="md:hover:text-orange-600"
                click={hundleCart}
              />
              <span
                className={
                  cart.articlesInCart > 0
                    ? "relative flex justify-center items-center bottom-4 block w-5 h-5 rounded-full text-xs bg-red-600"
                    : "hidden"
                }
              >
                {cart.articlesInCart}
              </span>
            </div>

            <SettingIcon
              click={hundleSetting}
              className="cursor-pointer hover:text-orange-600"
            />
          </div>
        </div>
      </div>

      <div className="w-full min-h-24 bg-white text-black p-4 md:bg-gray-200 md:w-11/12 md:mx-auto lg:w-8/12 lg:mx-auto 2xl:w-6/12 2xl:mx-auto">
        <span className="block w-full text-xl font-bold">
          Salut, {user.name}
        </span>
      </div>
      <div className="w-full bg-white flex flex-col p-4 md:bg-gray-200 md:w-11/12 md:mx-auto lg:w-8/12 lg:mx-auto 2xl:w-6/12 2xl:mx-auto">
        <span className="block text-xl font-bold">Mes Commandes</span>
        <div className="w-5/6 h-12 m-auto border-2 border-black py-2 flex justify-center items-center gap-4">
          <span>En cours</span>
          <span>Validées</span>
          <span>Expidiées</span>
        </div>
      </div>
      <div>
        <div className="w-full bg-white flex flex-col p-4 md:bg-gray-200 md:w-11/12 md:mx-auto lg:w-8/12 lg:mx-auto 2xl:w-6/12 2xl:mx-auto">
          <span className="block text-xl font-bold">Service Client</span>
          <div className="w-5/6 h-12 m-auto border-2 border-black py-2 flex justify-center items-center gap-4">
            <span>Par mail</span>
            <span>Appel</span>
            <span>Par messagerie</span>
          </div>
        </div>
      </div>
      <div className="w-full bg-white flex flex-col p-4 md:bg-gray-200 md:w-11/12 md:mx-auto lg:w-8/12 lg:mx-auto 2xl:w-6/12 2xl:mx-auto">
        <span className="block text-xl font-bold">Liste d'envie</span>
        <div className="w-5/6 h-12 m-auto border-2 border-black py-2 flex justify-center items-center gap-4">
          <span>Par mail</span>

          <span>Par messagerie</span>
        </div>
      </div>
      <div
        className={
          showSetting
            ? "transition duration-300 ease-out h-full w-full bg-white  fixed top-0 -translate-x-0 z-[150]"
            : "transition duration-300 ease-out h-full w-full bg-white  fixed top-0 -translate-x-full z-[150]"
        }
      >
        <div className="w-full h-full bg-gray-300 text-black flex flex-col gap-4 md:bg-transparent">
          <div className="w-screen shadow-md">
            <div className="w-full bg-white text-black flex  items-center text-xl p-3 gap-4 font-bold md:w-11/12 md:mx-auto lg:w-8/12 lg:mx-auto 2xl:w-6/12 2xl:mx-auto">
              <span>
                <BackIcon
                  className="cursor-pointer w-6 h-6"
                  click={hundleSetting}
                />
              </span>
              <span>Paramètres</span>
            </div>
          </div>

          <div className="w-full bg-white text-black text-xl p-2 md:bg-gray-200 md:w-11/12 md:mx-auto lg:w-8/12 lg:mx-auto 2xl:w-6/12 2xl:mx-auto">
            <span
              onClick={hundleAccout}
              className="cursor-pointer block py-3 flex justify-between items-center"
            >
              Gestion de compte <ForwardIcon />
            </span>
            <hr className="border-2 md:border-white" />
            <span className="cursor-pointer block py-3 flex justify-between items-center">
              Contez-nous <ForwardIcon />
            </span>
            <hr className="border-2 md:border-white" />
            <span className="cursor-pointer block py-3 flex justify-between items-center">
              Qui somme-nous ? <ForwardIcon />
            </span>
          </div>
        </div>
      </div>
      <div
        className={
          showAccout
            ? "transition duration-300 ease-out h-full w-full bg-white  fixed top-0 -translate-x-0 z-[150]"
            : "transition duration-300 ease-out h-full w-full bg-white  fixed top-0 -translate-x-full z-[150]"
        }
      >
        <div className="w-full h-full bg-gray-300 text-black flex flex-col gap-4 md:bg-transparent">
          <div className="w-screen shadow-md">
            <div className="w-full bg-white text-black flex  items-center text-xl p-3 gap-4 font-bold md:w-11/12 md:mx-auto lg:w-8/12 lg:mx-auto 2xl:w-6/12 2xl:mx-auto">
              <span>
                <BackIcon
                  className="cursor-pointer w-6 h-6"
                  click={hundleAccout}
                />
              </span>
              <span>Gestion de Compte</span>
            </div>
          </div>
          <div className="w-full bg-white text-black text-xl p-2 md:bg-gray-200 md:w-11/12 md:mx-auto lg:w-8/12 lg:mx-auto 2xl:w-6/12 2xl:mx-auto">
            <span
              onClick={hundleAccout}
              className="cursor-pointer block py-3 flex justify-between items-center"
            >
              Confirmer l'adresse mail <ForwardIcon />
            </span>
            <hr className="border-2 md:border-white" />
            <span className="cursor-pointer block py-3 flex justify-between items-center">
              Modifier le mot de passe <ForwardIcon />
            </span>
            <hr className="border-2 md:border-white" />
            <span className="cursor-pointer block py-3 flex justify-between items-center">
              Supprimer le compte <ForwardIcon />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default User;
