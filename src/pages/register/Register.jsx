import "./register.scss";
import logo from "../../assets/images/R.png";
import { useState, useRef } from "react";
import { Password } from "@mui/icons-material";

function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const emailRef = useRef();
  const passwordRef = useRef();

  const handleStart = () => {
    setEmail(emailRef.current.value);
  };

  const handleFinish = () => {
    setPassword(passwordRef.current.value);
  };

  return (
    <div className="register">
      <div className="top1">
        <div className="wrapper1">
          <img src={logo} alt="" className="logo1" />
          <button className="login1">Sign in</button>
        </div>
      </div>
      <div className="container1">
        <h1>Lorem ipsum, dolor sit amet consectetur adipisicing.</h1>
        <h2>Lorem ipsum dolor sit amet, consectetur</h2>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quos ea</p>
        {!email ? (
          <div className="input">
            <input type="email" placeholder="email" ref={emailRef}></input>
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
