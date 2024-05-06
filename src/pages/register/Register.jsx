import "./register.scss";
import logo from "../../assets/images/R.png";
import { useState, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

function Register() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");

  const emailRef = useRef();
  const passwordRef = useRef();
  const usernameRef = useRef();

  const handleStart = () => {
    setEmail(emailRef.current.value);
    setUsername(usernameRef.current.value);
  };

  const handleFinish = async (e) => {
    e.preventDefault();

    try {
      await axios.post("/auth/register", { email, username, password });
      navigate("/login");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="register">
      <div className="top1">
        <div className="wrapper1">
          <img src={logo} alt="" className="logo1" />
          <Link to="/login" className="link">
            <button className="login1">Sign in</button>
          </Link>
        </div>
      </div>

      <div className="container1">
        <h1>GaiaSight: Empower Your Vision Through Gaia's Eye</h1>
        <h2>Join GaiaSight: Explore, Learn, Connect with Nature.</h2>
        {!email || !username ? (
          <div className="input">
            <input type="email" placeholder="email" ref={emailRef} />
            <input type="username" placeholder="username" ref={usernameRef} />
            <button className="registerButton" onClick={handleStart}>
              Register
            </button>
          </div>
        ) : (
          <form className="input">
            <input
              type="password"
              placeholder="password"
              ref={passwordRef}
              onChange={(e) => setPassword(e.target.value)}
            ></input>
            <button className="registerButton" onClick={handleFinish}>
              Register
            </button>
          </form>
        )}
      </div>
    </div>
  );
}

export default Register;
