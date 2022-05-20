import React, { Component, useState, useEffect } from "react";
import { getGenders } from "../services/data";
const GenderBar = () => {
  const [genders, setGenders] = useState([]);
  useEffect(() => {
    setGenders(getGenders());
  }, []);
  return (
    <div className="w-full">
      <ul className="w-full text-xl flex justify-between">
        {genders.map((gender, index) => {
          return (
            <li
              key={index}
              className={
                index < genders.length - 1
                  ? "w-full bg-gray-300 text-center p-2 border-r-2 border-black"
                  : "w-full bg-gray-300 text-center p-2"
              }
            >
              {gender}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default GenderBar;
