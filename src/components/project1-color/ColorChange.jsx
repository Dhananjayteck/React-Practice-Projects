import React, { useState } from "react";

const ColorChange = () => {
  // In project1 we just using state management and change the bg color
  const [color, setColor] = useState("olive");
  return (
    <div
      className="w-full h-screen duration-200 relative"
      style={{ backgroundColor: color }}
    >
      <div className="absolute flex flex-wrap justify-center bottom-12 inset-x-0 px-2 ">
        <div className="flew flex-wrap justify-center gap-3 shadow-lg  px-3 py-2 rounded-3xl bg-white">
          <button
            className="outline-none px-4 py-1 rounded-full shadow-lg text-black"
            onClick={() => {
              setColor("red");
            }}
          >
            Red
          </button>
          <button
            className="outline-none px-4 py-1 rounded-full shadow-lg text-black"
            onClick={() => {
              setColor("green");
            }}
          >
            Green
          </button>
          <button
            className="outline-none px-4 py-1 rounded-full shadow-lg text-black"
            onClick={() => {
              setColor("gray");
            }}
          >
            Gray
          </button>
        </div>
      </div>
    </div>
  );
};

export default ColorChange;
