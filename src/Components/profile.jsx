import React, { Component, useState } from "react";
import { useNavigate, useMatch } from "react-router-dom";
import BotNavBar from "./botNavBar";
const Profile = () => {
  const [auth, setAuth] = useState(false);
  const navigate = useNavigate();
  if (auth) {
    return (
      <div>
        je suis la page Profile
        <span onClick={() => navigate("/")}> Home</span>
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
