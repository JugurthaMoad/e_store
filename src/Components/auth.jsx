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
    navigate("/");
  };
  return (
    <div className="h-screen w-screen bg-white flex flex-col">
      <div className="flex w-screen h-16 justify-between items-center p-2">
        <span onClick={hundleLogo} className="block text-2xl font-bold">
          Logo
        </span>
        <span className="text-xl font-medium underline">
          <Link className="no-underline" to="/register">
            S'incrire maintenant
          </Link>
        </span>
        <CloseIcon className="" onClick={hundClose} />
      </div>
      <div className="w-screen  bg-gray-200 p-4 flex flex-col gap-1 justify-around py-8">
        <span className="font-medium text-3xl block ">
          Bienvenu à nouveau !
        </span>
        <p className="text-gray-800 py-2 ">
          Connectez-vous à votre compte et commencez vos achats
        </p>
        <span
          onClick={hundleButton}
          className="w-5/6 text-white flex justify-center items-center bg-black p-2 rounded text-xl gap-2 m-auto"
        >
          <MailIcon className="" /> <span>connexion </span>
        </span>
      </div>
      <div className="w-screen flex flex-col gap-3 p-2">
        <p className="w-full text-center p-2 text-m">
          Ou se connecter avec un compte existant
        </p>
        <span className="block w-full border-2 border-black p-2 rounded m-auto text-center text-xl font-medium">
          continuer avec google
        </span>
        <span className="block w-full border-2 border-black p-2 rounded m-auto text-center text-xl font-medium">
          continuer avec facebook
        </span>
      </div>
    </div>
  );
};

export default Auth;
