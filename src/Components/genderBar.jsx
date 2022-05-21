import React, { Component, useState, useEffect } from "react";
import { getGenders } from "../services/data";
const GenderBar = ({ gender, setGender }) => {
  const [genders, setGenders] = useState([]);
  useEffect(() => {
    setGenders(getGenders());
  }, []);
  const hundleClick = (gender) => {
    console.log("gender clicked", gender);
    setGender(gender);
  };

  return (
    <div className="w-full">
      <ul className="w-full text-xl flex justify-between">
        {genders.map((gen, index) => {
          console.log("map ", gender);
          return (
            <li
              key={index}
              onClick={() => hundleClick(gen)}
              className={
                "w-full bg-gray-300 text-center p-2 " +
                (index < genders.length - 1
                  ? "border-r-2 border-black"
                  : gen === gender
                  ? "underline decoration-2"
                  : "")
              }
            >
              {gen}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default GenderBar;
