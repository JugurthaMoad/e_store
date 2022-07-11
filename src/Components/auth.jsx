import React, { Component, useState } from "react";
import { CloseIcon, MailIcon } from "./icons";
import Login from "./login";
import Register from "./register";
import { useNavigate, Link } from "react-router-dom";
const Auth = () => {
  const navigate = useNavigate();
  const url = "/login";
  const [page, setPage] = useState(0); // 0 conn 1 inscription
  const hundleClick = (page) => {
    setPage(page);
  };
  const hundClose = () => {
    navigate(-1);
  };
  const hundleButton = () => {
    navigate(url);
  };
  const hundleLogo = () => {
    console.log("logo");
    navigate("/e_store");
  };
  return (
    <div className="h-screen w-screen bg-white flex flex-col gap-2">
      <div className="w-screen shadow-md">
        <div className="flex w-full h-16 justify-between items-center p-2 md:w-screen  lg:w-11/12 lg:mx-auto">
          <span
            onClick={hundleLogo}
            className="block text-2xl font-semibold uppercase cursor-pointer"
          >
            Logo
          </span>
          <span className="text-xl font-medium underline">
            <Link className="no-underline" to="/register">
              S'incrire maintenant
            </Link>
          </span>
          <CloseIcon className="cursor-pointer" onClick={hundClose} />
        </div>
      </div>

      <div className="w-screen  bg-gray-200 p-4 flex flex-col gap-1 justify-around py-8 md:w-11/12 md:mx-auto lg:w-8/12 lg:mx-auto 2xl:w-6/12 2xl:mx-auto">
        <span className="font-medium text-3xl block md:w-7/12 md:mx-auto lg:w-8/12 lg:mx-auto 2xl:w-5/12 2xl:mx-auto">
          Bienvenu à nouveau !
        </span>
        <p className="text-gray-800 py-2 md:w-7/12 md:mx-auto lg:w-8/12 lg:mx-auto 2xl:w-6/12 2xl:mx-auto">
          Connectez-vous à votre compte et commencez vos achats
        </p>
        <span
          onClick={hundleButton}
          className="w-full text-white flex justify-center items-center bg-black p-2 rounded text-xl gap-2 m-auto cursor-pointer md:w-7/12 md:mx-auto lg:w-8/12 lg:mx-auto 2xl:w-6/12 2xl:mx-auto"
        >
          <MailIcon className="" /> <span>connexion </span>
        </span>
      </div>
      <div className="w-screen flex flex-col gap-3 p-2 md:w-11/12 md:mx-auto lg:w-8/12 lg:mx-auto 2xl:w-6/12 2xl:mx-auto">
        <p className="w-full text-center p-2 text-m md:w-7/12 md:mx-auto lg:w-8/12 lg:mx-auto 2xl:w-6/12 2xl:mx-auto">
          Ou se connecter avec un compte existant
        </p>
        <span className="block w-full border-2 border-black p-2 rounded m-auto text-center text-xl font-medium cursor-pointer md:w-7/12 md:mx-auto lg:w-8/12 lg:mx-auto 2xl:w-6/12 2xl:mx-auto">
          continuer avec google
        </span>
        <span className="block w-full border-2 border-black p-2 rounded m-auto text-center text-xl font-medium cursor-pointer md:w-7/12 md:mx-auto lg:w-8/12 lg:mx-auto 2xl:w-6/12 2xl:mx-auto">
          continuer avec facebook
        </span>
      </div>
    </div>
  );
};

export default Auth;
