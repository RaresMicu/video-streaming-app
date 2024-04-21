import WidgetUsers from "../../components/widgetUsers/WidgetUsers";
import AdminMode from "../adminMode/AdminMode";
import "./adminhome.scss";

function AdminHome() {
  return (
    <AdminMode>
      <div className="adminhome">
        <div className="homeWidgets">
          <WidgetUsers />
        </div>
      </div>
    </AdminMode>
  );
}

export default AdminHome;
