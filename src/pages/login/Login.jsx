import "./login.scss";
import logo from "../../assets/images/R.png";

function Login() {
  return (
    <div className="login">
      <div className="top">
        <div className="wrapper">
          <img src={logo} alt="" className="logo" />
        </div>
      </div>
      <div className="container">
        <form>
          <h1>Sign in</h1>
          <input type="email" placeholder="Email"></input>
          <input type="password" placeholder="Password" />
          <button className="loginButton">Sign in</button>
          <span>
            {" "}
            New to GaiaSight? <b>Sign up now.</b>
          </span>
        </form>
      </div>
    </div>
  );
}

export default Login;
