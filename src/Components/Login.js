import { useState } from "react";
import { Link, useNavigate } from "react-router-dom"; // Import useNavigate instead of useHistory
import Payment from "./Payment";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate(); // Use useNavigate instead of useHistory

  const check = () => {
    return username === "shashank" && password === "123";
  };

  const handleLogin = () => {
    if (check()) {
      alert("valid username or password");
      navigate("/payment"); // Navigate to /payment route
    } else {
      alert("Invalid username or password");
    }
  };

  return (
    <>
      <form className="create-form">
        <h1 className="login-row1">Login</h1>
        <hr></hr>

        <label>Username:</label>
        <input
          type="text"
          id="username"
          name="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
        <br></br>
        <br></br>

        <label>Password:</label>
        <input
          type="password"
          id="password"
          name="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <br></br>
        <br></br>

        <div>
          <label>
            <input type="checkbox" />
            Remember Me!!
          </label>
        </div>
        <br></br>
        <br></br>

        <button type="button" onClick={handleLogin}>Login</button>
      </form>
    </>
  );
}
