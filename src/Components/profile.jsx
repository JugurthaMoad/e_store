import React, { Component } from "react";
import { useNavigate, useMatch } from "react-router-dom";
import BotNavBar from "./botNavBar";
const Profile = () => {
  const navigate = useNavigate();
  return (
    <div>
      je suis la page Profile
      <span onClick={() => navigate("/")}> Home</span>
      <BotNavBar />
    </div>
  );
};

export default Profile;
