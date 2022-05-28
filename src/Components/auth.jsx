import React, { Component, useState } from "react";
import Login from "./login";
import Register from "./register";
const Auth = () => {
  const [page, setPage] = useState(0); // 1 conn 2 inscription
  const hundleClick = (page) => {
    setPage(page);
  };
  return (
    <div className="w-screen h-screen bg-white text-black flex flex-col p-2">
      <div className="w-full h-fit flex justify-center items-center p-4 text-2xl font-bold">
        Logo
      </div>
      <div className="w-full h-full">
        <div className="w-full flex text-2xl  gap-4 font-medium">
          <span
            onClick={() => hundleClick(0)}
            className={
              page === 0
                ? "block w-1/2 text-right p-1 text-orange-600"
                : "block w-1/2 text-right p-1"
            }
          >
            Se connecter
          </span>
          <span
            onClick={() => hundleClick(1)}
            className={
              page !== 0
                ? "block w-1/2 text-right p-1 text-orange-600"
                : "block w-1/2 text-right p-1"
            }
          >
            Inscrivez-vous
          </span>
        </div>
        <div>{page === 0 ? <Login /> : <Register />}</div>
      </div>
    </div>
  );
};

export default Auth;