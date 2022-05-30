import React, { Component, useState } from "react";
import Joi from "joi-browser";
import { Input, ValidateButton } from "./form";
const Register = () => {
  const [account, setAccount] = useState({
    email: "",
    password: "",
  });

  const [errors, setErros] = useState({
    email: false,
    password: false,
  });
  const schema = Joi.object({
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
  };
  console.log({ errors });
  return (
    <div className=" h-1/3">
      <form onSubmit={hundleSubmit} className=" flex flex-col h-full">
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
        <p className={errors.password ? "w-full p-2 text-red-700 " : "hidden"}>
          Entrer un mot de passe avec 5 caractéres minimum
        </p>
        <ValidateButton type="submit" label="Inscrivez-vous" />
      </form>
      <div>Ou avec google</div>
    </div>
  );
};

export default Register;
