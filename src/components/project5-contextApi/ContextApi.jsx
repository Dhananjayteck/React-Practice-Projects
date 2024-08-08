import React, { useState } from "react";
import Login from "./components/Login";
import Profile from "./components/Profile";
import UserContext from "./context/UserContext";

const ContextApi = () => {
  const dummy = "The dummy text";
  let rar = "This is new text";
  const [user, setUser] = useState();
  return (
    <div>
      <h1>Context Api</h1>
      <UserContext.Provider value={{ dummy, rar, user, setUser }}>
        <Login />
        <Profile />
      </UserContext.Provider>
    </div>
  );
};

export default ContextApi;
