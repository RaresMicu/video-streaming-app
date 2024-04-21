import "./adminMode.scss";
import AdminNavbar from "../../components/adminnavbar/AdminNavbar.jsx";
import Sidebar from "../../components/sidebar/Sidebar.jsx";

const AdminMode = ({ children }) => {
  return (
    <div className="adminnavbar">
      <AdminNavbar />
      <div className="container">
        <Sidebar />
        <div className="adminhome">{children} </div>
      </div>
    </div>
  );
};

export default AdminMode;
