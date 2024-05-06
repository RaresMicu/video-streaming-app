import "./login.scss";
import logo from "../../assets/images/R.png";
import { Link } from "react-router-dom";
import { useState, useContext } from "react";
import { AuthContext } from "../../context/authContext/AuthContext";
import { loginCall } from "../../context/authContext/apiCalls";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { isFetching, dispatch } = useContext(AuthContext);

  const handleLogin = (e) => {
    e.preventDefault();
    if (email === "" || password === "")
      return alert("Please fill in all fields");

    loginCall({ email, password }, dispatch);
  };

  return (
    <div className="login">
      <div className="top">
        <div className="wrapper">
          <Link to="/register" className="link">
            <img src={logo} alt="" className="logo" />
          </Link>
        </div>
      </div>
      <div className="container">
        <form>
          <h1>Sign in</h1>
          <input
            type="email"
            placeholder="Email"
            onChange={(e) => setEmail(e.target.value)}
          ></input>
          <input
            type="password"
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <button
            className="loginButton"
            onClick={handleLogin}
            disabled={isFetching}
          >
            Sign in
          </button>
          <span>{isFetching ? "Loading..." : ""}</span>
          <Link to="/register" className="link">
            <span>
              New to GaiaSight? <b>Sign up now.</b>
            </span>
          </Link>
        </form>
      </div>
    </div>
  );
}

export default Login;
