import React, { Component, useState } from "react";
import Joi from "joi-browser";
import { Input, ValidateButton } from "./form";
import { useNavigate, Link } from "react-router-dom";
import { CloseIcon } from "./icons";
const Register = () => {
  const [account, setAccount] = useState({
    username: "",
    email: "",
    password: "",
  });
  const navigate = useNavigate();
  const hundClose = () => {
    navigate("/");
  };
  const hundleLogo = () => {
    navigate("/");
  };
  const [errors, setErros] = useState({
    username: false,
    email: false,
    password: false,
  });
  const schema = Joi.object({
    username: Joi.string().min(5).label("Username"),
    email: Joi.string().email().label("Email"),
    password: Joi.string().min(5).label("Password"),
  });

  const hundleChange = (e) => {
    const { name } = e.currentTarget;

    let { value } = e.currentTarget;
    let data = { ...account };
    const error = { ...errors };
    data[name] = value;
    setAccount(data);
    error[name] = false;
    setErros(error);
  };
  const hundleSubmit = (e) => {
    e.preventDefault();
    const { error } = Joi.validate(account, schema, { abortEarly: false });
    if (error !== null) {
      const { details } = error;
      let err = { ...errors };
      details.forEach((detail) => {
        const { path } = detail;
        err[path] = true;
      });
      setErros(err);
    }
    console.log("Register user :", { account });
  };

  return (
    <div className="h-screen w-screen bg-white flex flex-col">
      <div className="flex w-screen h-16 justify-between items-center p-2">
        <span onClick={hundleLogo} className="block text-2xl font-bold">
          Logo
        </span>
        <span className="text-xl font-medium underline underline-offset-8">
          <Link className="no-underline" to="/login">
            connexion
          </Link>
        </span>
        <CloseIcon className="" onClick={hundClose} />
      </div>
      <div className="w-screen bg-gray-100 py-12 px-4 h-full">
        <span className="block w-full text-3xl font-bold ">
          Créer un compte
        </span>
        <form onSubmit={hundleSubmit} className=" flex flex-col ">
          <Input
            onChange={hundleChange}
            value={account.username}
            label="UserName"
            name="username"
            type="text"
          />
          <p
            className={errors.username ? "w-full p-2 text-red-700 " : "hidden"}
          >
            Nom d'utilisateur minimum 5 caractére
          </p>
          <Input
            onChange={hundleChange}
            value={account.email}
            label="Email"
            name="email"
            type="text"
          />
          <p className={errors.email ? "w-full p-2 text-red-700 " : "hidden"}>
            Entrer une adresse mail correcte
          </p>
          <Input
            onChange={hundleChange}
            value={account.password}
            label="Password"
            name="password"
            type="password"
          />
          <p
            className={errors.password ? "w-full p-2 text-red-700 " : "hidden"}
          >
            Entrer un mot de passe avec 5 caractéres minimum
          </p>
          <ValidateButton type="submit" label="Suivant" />
        </form>
      </div>
    </div>
  );
};

export default Register;
