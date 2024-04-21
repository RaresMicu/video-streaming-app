import "./sidebar.scss";
import HomeIcon from "@mui/icons-material/Home";
import PersonIcon from "@mui/icons-material/Person";
import LocalMoviesIcon from "@mui/icons-material/LocalMovies";
import { Link } from "react-router-dom";

function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebarWrapper">
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Dashboard</h3>

          <ul className="sidebarList">
            <Link
              to="/admin"
              style={{ color: "inherit", textDecoration: "inherit" }}
            >
              <li className={`sidebarListItem`}>
                <HomeIcon className="sidebarIcon" />
                Home
              </li>
            </Link>
          </ul>

          <h3 className="sidebarTitle">Quick Menu</h3>

          <ul className="sidebarList">
            <Link
              to="/admin/users"
              style={{ color: "inherit", textDecoration: "inherit" }}
            >
              <li className={`sidebarListItem`}>
                <PersonIcon className="sidebarIcon" />
                Users
              </li>
            </Link>
            <Link
              to="/admin/documentaries"
              style={{ color: "inherit", textDecoration: "inherit" }}
            >
              <li className={`sidebarListItem`}>
                <LocalMoviesIcon className="sidebarIcon" />
                Documentaries
              </li>
            </Link>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
