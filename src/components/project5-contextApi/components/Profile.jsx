import React, { useContext } from "react";
import UserContext from "../context/UserContext";

const Profile = () => {
  const { user, dummy, rar } = useContext(UserContext);

  if (!user) return <h1> Not logged in </h1>;
  return (
    <div className="mt-5">
      <h1>Profile: {user?.username}</h1>
      <div>Dummy : {dummy}</div>
      <div>Rar : {rar}</div>
    </div>
  );
};

export default Profile;
