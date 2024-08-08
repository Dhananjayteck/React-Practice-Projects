import React, { useContext, useState } from "react";
import UserContext from "../context/UserContext";
const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const { setUser } = useContext(UserContext);

  const inputStyle = {
    border: "1px solid",
    padding: "10px",
    borderRadius: "5px",
    width: "50%",
  };

  const handleSubmit = () => {
    // e.preventdefault();
    setUser({ username, password });
  };
  return (
    <div>
      <h1>Login</h1>
      <div>
        <label>Username</label> <br />
        <input
          type="text"
          style={inputStyle}
          name="username"
          value={username}
          placeholder="Username"
          onChange={(e) => setUsername(e.target.value)}
        />
      </div>
      <div>
        <label>Password</label> <br />
        <input
          type="password"
          style={inputStyle}
          //   className="w-96 border-r-2 p-2 border-gray-200"
          name="password"
          value={password}
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <div>
        <button
          style={inputStyle}
          className="btn-primary mt-5"
          onClick={handleSubmit}
        >
          Submit
        </button>
      </div>
    </div>
  );
};

export default Login;
