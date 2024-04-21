import "./widgetUsers.scss";
import item1 from "../../assets/images/profile1.jpg";
import VisibilityIcon from "@mui/icons-material/Visibility";

function WidgetUsers() {
  return (
    <div className="centerWidget">
      <div className="widgetUsers">
        <span className="widgetUsersTitle">New Join Members</span>
        <ul className="widgetUsersList">
          <li className="widgetUsersListItem">
            <img src={item1} alt="" className="widgetUsersImg" />
            <div className="user">
              <span className="widgetUsername">Zalmoxis Ion</span>
            </div>
            <button className="widgetUsersButton">
              <VisibilityIcon className="widgetIcon" />
              Display
            </button>
          </li>
          <li className="widgetUsersListItem">
            <img src={item1} alt="" className="widgetUsersImg" />
            <div className="user">
              <span className="widgetUsername">Zalmoxis Ion</span>
            </div>
            <button className="widgetUsersButton">
              <VisibilityIcon className="widgetIcon" />
              Display
            </button>
          </li>
          <li className="widgetUsersListItem">
            <img src={item1} alt="" className="widgetUsersImg" />
            <div className="user">
              <span className="widgetUsername">Zalmoxis Ion</span>
            </div>
            <button className="widgetUsersButton">
              <VisibilityIcon className="widgetIcon" />
              Display
            </button>
          </li>
          <li className="widgetUsersListItem">
            <img src={item1} alt="" className="widgetUsersImg" />
            <div className="user">
              <span className="widgetUsername">Zalmoxis Ion</span>
            </div>
            <button className="widgetUsersButton">
              <VisibilityIcon className="widgetIcon" />
              Display
            </button>
          </li>
          <li className="widgetUsersListItem">
            <img src={item1} alt="" className="widgetUsersImg" />
            <div className="user">
              <span className="widgetUsername">Zalmoxis Ion</span>
            </div>
            <button className="widgetUsersButton">
              <VisibilityIcon className="widgetIcon" />
              Display
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default WidgetUsers;
