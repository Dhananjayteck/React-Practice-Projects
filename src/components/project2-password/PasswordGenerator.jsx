import React, { useCallback, useEffect, useRef, useState } from "react";

const PasswordGenerator = () => {
  const [length, setLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [password, setPassword] = useState("");
  const passwordRef = useRef("");
  const [copy, setCopy] = useState(false);

  const generatePassword = () => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    let str2 =
      '"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789~`!@#$%^&*()-_=+[{]}\\|;:\'",<.>/?";';
    if (numberAllowed) str += "0123456789";
    if (charAllowed) str += '~`!@#$%^&*()-_+={}[]|;:"<>,./?';

    for (let i = 0; i < length; i++) {
      const char = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(char);
    }
    setPassword(pass);
  };

  useEffect(() => {
    setCopy(false);
    generatePassword();
  }, [length, charAllowed, numberAllowed]);

  const copyPassword = () => {
    window.navigator.clipboard.writeText(password); // copy the password in clipboard
    passwordRef.current?.select(); // select the text
  };

  return (
    <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 bg-gray-800 text-orange-500">
      <h1 className="text-white text-center my-3">PasswordGenerator</h1>
      <div className="flex shadow rounded-lg overflow-hidden mb-4">
        <input
          type="text"
          value={password}
          className=" outline-none w-full py-1 px-3"
          placeholder="Password"
          ref={passwordRef}
          readOnly
        />
        <button
          className="outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0"
          onClick={() => {
            copyPassword();
            setCopy(true);
          }}
        >
          {!copy ? "Copy" : "Copied"}
        </button>
      </div>
      <div className="flex text-sm gap-x-2">
        <div className="flex items-center gap-x-1">
          <input
            type="range"
            min={6}
            max={100}
            value={length}
            className="cursor-pointer"
            name=""
            id=""
            onChange={(e) => setLength(e.target.value)}
          />
          <label>Length is : {length}</label>
        </div>
        <div className="flex items-center gap-x-1">
          <input
            type="checkbox"
            defaultChecked={charAllowed}
            onChange={() => {
              setCharAllowed(!charAllowed);
            }}
          />
          <label>Character</label>
        </div>
        <div className="flex items-center gap-x-1">
          <input
            type="checkbox"
            defaultChecked={numberAllowed}
            onChange={() => {
              setNumberAllowed(!numberAllowed);
            }}
          />
          <label>Number</label>
        </div>
      </div>
      {/* <div>{passwordRef}</div> */}
    </div>
  );
};

export default PasswordGenerator;
