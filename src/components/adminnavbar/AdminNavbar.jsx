import axios from "axios";
import "./adminnavbar.scss";
import logo from "../../assets/images/R.png";
import SettingsIcon from "@mui/icons-material/Settings";
import avatar from "../../assets/images/profile1.jpg";
import { Link } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../context/authContext/AuthContext";
import { logout } from "../../context/authContext/AuthActions";

function AdminNavbar() {
  const { dispatch } = useContext(AuthContext);
  const [img, setImg] = useState("");

  useEffect(() => {
    const fetchUser = async () => {
      const userId = JSON.parse(localStorage.getItem("user"))._id;
      try {
        const res = await axios.get("/users/find/" + userId);
        setImg(res.data.profilePicture);
      } catch (err) {
        console.log(err);
      }
    };
    fetchUser();
  }, []);

  return (
    <div className="adminnavbar">
      <div className="adminWrapper">
        <div className="left">
          <Link to="/admin">
            <img src={logo} alt="" className="logo" />
          </Link>
        </div>
        <div className="right">
          <div className="iconContainer">
            <SettingsIcon className="notification" />
          </div>
          <div className="profile">
            <img src={img ? img : avatar} alt="" className="avatar" />
            <div className="options">
              <Link
                to={"/"}
                className="link"
                onClick={() => {
                  dispatch(logout());
                  localStorage.removeItem("user");
                }}
              >
                <span>Logout</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AdminNavbar;
