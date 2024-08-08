import React, { useState } from "react";

const State = () => {
    const [count, setCount] = useState(0)
  return (
    <>
      <h1>React</h1>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        Count is {count}
      </button> 
      <button
        onClick={() => {
          setCount((prevcount) => prevcount + 2);
          setCount((prevcount) => prevcount + 2);
        }}
      >
        counter {count}
      </button>

      <h2 className="text-3xl bg-green p-4 text-blue-700">
        Vite with Tailwind
      </h2>
    </>
  );
};

export default State;
