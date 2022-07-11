import React, { Component, useState, useEffect, useContext } from "react";
import { getGenders } from "../services/data";
import GenderContext from "../context/genderContext";
const GenderBar = ({ ...props }) => {
  const [genders, setGenders] = useState([]);
  const currentGender = useContext(GenderContext);
  useEffect(() => {
    setGenders(getGenders());
  }, []);
  return (
    <div className="w-full box-content">
      <ul
        {...props}
        className="w-full text-xl flex justify-between box-content"
      >
        {genders.map((gen, index) => {
          return (
            <li
              key={index}
              onClick={() => currentGender.setCurrentGender(gen)}
              className={
                "w-full bg-gray-200 text-center p-2 md:bg-transparent md:cursor-pointer md:hover:text-orange-600" +
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
