import React, { Component, useState, useContext } from "react";
import { useNavigate, useMatch } from "react-router-dom";
import UserContext from "../context/UserContext";
import BotNavBar from "./botNavBar";
const Profile = () => {
  const [auth, setAuth] = useState(false);
  const navigate = useNavigate();
  const { user } = useContext(UserContext);
  console.log("user = ", user.name);
  if (user.id !== null) {
    return (
      <div className="w-screen h-screen bg-white">
        <span onClick={() => navigate("/")}>Retour</span>
        <div>Bienvenu {user.name}</div>
        <BotNavBar />
      </div>
    );
  } else {
    return (
      <div>
        <span onClick={() => navigate("/auth")}> connection </span>
        <BotNavBar />
      </div>
    );
  }
};

export default Profile;
