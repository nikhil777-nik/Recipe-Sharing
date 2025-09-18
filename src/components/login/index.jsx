import { useState } from "react";
import "./index.css";
import { useNavigate } from "react-router-dom";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (username === "Nikhil" && password === "123") {
      const fakeToken = "abc123";
      localStorage.setItem("token", fakeToken);
      navigate("/");
    } else {
      alert("Invalid credentials!");
    }
  };

  return (
    <div
      className="login-container" >
      <div className="login-box">
        <h1>Login Into Live Kitchen</h1>
        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <label>Username</label>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Enter username"
              required
            />
          </div>
          <div className="input-group">
            <label>Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter password"
              required
            />
          </div>
          <button type="submit" className="btn">Login</button>
          <p className="signup-text">
            Don’t have an account? <a href="#">Sign Up</a>
          </p>
        </form>
      </div>
    </div>
  );
}

export default Login;
