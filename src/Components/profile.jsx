import React, { Component, useState, useContext } from "react";
import { useNavigate, useMatch } from "react-router-dom";
import UserContext from "../context/UserContext";
import BotNavBar from "./botNavBar";
import Auth from "./auth";
import User from "./user";
const Profile = () => {
  const navigate = useNavigate();
  const { user } = useContext(UserContext);
  console.log("user = ", user.name);
  if (user.id !== null) {
    return (
      <div className="w-screen h-screen">
        <User />
        <BotNavBar />
      </div>
    );
  } else {
    return (
      <div>
        <Auth />
        <BotNavBar />
      </div>
    );
  }
};

export default Profile;
