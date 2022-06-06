import React, { Component, useState, useEffect } from "react";

export const Input = ({ label, type, ...rest }) => {
  const [see, setSee] = useState(false); // hide the password
  const [inputType, setInput] = useState(type); //

  const hundleType = () => {
    if (see) {
      setInput("password");
    } else {
      setInput("text");
    }
  };
  const hundleSee = () => {
    console.log("see = ", see);
    setSee(!see);
    hundleType();
  };
  if (type === "text") {
    return (
      <label className=" h-24 flex flex-col justify-center">
        <span className="after:content-['*'] after:ml-0.5 after:text-red-500 block text-xl font-medium text-gray-500 py-1">
          {label}
        </span>
        <input
          type={type}
          name={label}
          className="bg-white border-2 border-gray-700 rounded p-2 w-full text-xl focus:outline-none"
          placeholder={`your ${label}`}
          {...rest}
        />
      </label>
    );
  } else if (type === "password") {
    return (
      <label className=" w-full h-24 flex flex-col justify-center">
        <span className="after:content-['*'] after:ml-0.5 after:text-red-500 block text-xl font-medium text-gray-500 py-1">
          {label}
        </span>
        <div className="flex justify-between bg-white border-2 border-gray-700 rounded p-2 w-full text-xl focus:outline-none">
          <input
            type={inputType}
            name={label}
            className="border-0 focus:outline-none w-5/6"
            placeholder={`your ${label}`}
            {...rest}
          />
          <span onClick={hundleSee} className="block cursor-pointer">
            {see ? "cacher" : "voir"}
          </span>
        </div>
      </label>
    );
  }
};
export const ValidateButton = ({ label, ...rest }) => {
  return (
    <button
      className="block p-2 w-full h-12 flex justify-center items-center  uppercase text-white bg-black my-4 font-medium rounded"
      {...rest}
    >
      {label}
    </button>
  );
};
