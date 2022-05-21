import React, { Component, useState, useEffect, useContext } from "react";
import { getGenders } from "../services/data";
import GenderContext from "../context/genderContext";
const GenderBar = () => {
  const [genders, setGenders] = useState([]);
  const currentGender = useContext(GenderContext);
  useEffect(() => {
    setGenders(getGenders());
  }, []);
  return (
    <div className="w-full">
      <ul className="w-full text-xl flex justify-between">
        {genders.map((gen, index) => {
          return (
            <li
              key={index}
              onClick={() => currentGender.setCurrentGender(gen)}
              className={
                "w-full bg-gray-300 text-center p-2" +
                (index < genders.length - 1
                  ? " border-r-2 border-black"
                  : " border-0") +
                (gen === currentGender.name ? "  text-orange-600" : "")
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
