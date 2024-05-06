import AdminMode from "../adminMode/AdminMode";
import "./adminhome.scss";

function AdminHome() {
  return (
    <AdminMode>
      <div className="adminhome">
        <div className="homeWidgets">
          <div className="centerWidget">
            <div className="widgetUsers">
              <span className="widgetUsersTitle">Welcome, Admin!</span>
            </div>
          </div>
        </div>
      </div>
    </AdminMode>
  );
}

export default AdminHome;
