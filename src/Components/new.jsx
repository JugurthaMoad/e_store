import React, { Component, useState } from "react";
const New = (props) => {
  console.log("props = ", props.children);
  const [active, setActive] = useState(false);
  const hundleClick = () => {
    console.log("clicked ");
    setActive(!active);
  };
  return (
    <div className="w-screen h-screen bg-white text-black">
      je susqdf
      <span onClick={hundleClick} className="p-2 block bg-gray-600">
        Click
      </span>
      <div
        className={
          active
            ? "transition duration-300 ease-out h-1/2 w-full bg-black border-2 border-black text-white fixed bottom-0 translate-x-0 z-[150]"
            : "transition duration-300 ease-out h-1/2 w-full bg-black border-2 border-black fixed text-white bottom-0 translate-x-full z-[150]"
        }
      ></div>
      <div
        className={
          active
            ? "transition-opacity w-screen h-5/6 bg-black opacity-25 bottom-0 fixed z-40"
            : "transition-opacity w-screen h-5/6 bg-black opacity-0 bottom-0 fixed  z-[-150]"
        }
      ></div>
    </div>
  );
};

export default New;
