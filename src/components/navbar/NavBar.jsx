import "./NavBar.scss";
import logo from "../../assets/images/R.png";
import profile from "../../assets/images/profile1.jpg";
import SearchIcon from "@mui/icons-material/Search";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../context/authContext/AuthContext";
import { logout } from "../../context/authContext/AuthActions";

function NavBar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const { dispatch } = useContext(AuthContext);

  window.onscroll = () => {
    setIsScrolled(window.scrollY === 0 ? false : true);
    return () => (window.onscroll = null);
  };

  return (
    <div className={isScrolled ? "navbar scrolled" : "navbar"}>
      <div className="container">
        <div className="left">
          <Link to={"/"} className="link">
            <img src={logo} alt="" className="logo-picture" />
          </Link>
          <Link to={"/"} className="link">
            <span className="mainLinks">Home</span>
          </Link>
          <Link to={"/longs"} className="link">
            <span> Long Documentaries</span>
          </Link>
          <Link to={"/shorts"} className="link">
            <span>Short Documentaries</span>
          </Link>
          <span className="mainLinks">My List</span>
        </div>
        <div className="right">
          <SearchIcon className="icon" />
          <img src={profile} alt="Profile" className="profile-picture"></img>
          <div className="profile">
            <ExpandMoreIcon className="icon" />
            <div className="options">
              <span
                onClick={() => {
                  dispatch(logout());
                  localStorage.removeItem("user");
                }}
              >
                Logout
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NavBar;
