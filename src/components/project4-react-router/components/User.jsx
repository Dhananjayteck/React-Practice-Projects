import React from "react";
import { useParams } from "react-router-dom";

const User = () => {
  const userId = useParams();
  console.log("userid", userId);
  return <div>User Id : </div>;
};

export default User;
