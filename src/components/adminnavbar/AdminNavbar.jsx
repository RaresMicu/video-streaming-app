import "./adminnavbar.scss";
import logo from "../../assets/images/R.png";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import SettingsIcon from "@mui/icons-material/Settings";
import avatar from "../../assets/images/profile1.jpg";
import { Link } from "react-router-dom";

function AdminNavbar() {
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
          <img src={avatar} alt="" className="avatar" />
        </div>
      </div>
    </div>
  );
}

export default AdminNavbar;
