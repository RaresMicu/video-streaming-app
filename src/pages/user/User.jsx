import "./user.scss";
import logo from "../../assets/images/profile1.jpg";
import { Link } from "react-router-dom";
import AdminMode from "../adminMode/AdminMode";

const User = () => {
  return (
    <AdminMode>
      <div className="user">
        <div className="userTitleContainer">
          <h1 className="userTitle">Edit User</h1>
          <Link to="/admin/createUser">
            <button className="userAddButton">Create</button>
          </Link>
        </div>
        <div className="userContainer">
          <div className="userDisplay">
            <div className="userDisplayTop">
              <img src={logo} alt="" className="userDisplayImg"></img>
              <span className="userDisplayUsername">Zalmoxis Ion</span>
            </div>
            <div className="userDisplayBottom">
              <span className="userDisplayInfoTitle">Account Details</span>
              <span className="userDisplayInfo">Username: zalmoxis04</span>
              <span className="userDisplayInfo">
                Email: zalmoxis04@gmail.com
              </span>
            </div>
          </div>
          <div className="userUpdate">
            <span className="userUpdateTitle">Edit</span>
            <form className="userUpdateForm">
              <div className="userUpdateLeft">
                <div className="userUpdateItem">
                  <label>Username</label>
                  <input
                    type="text"
                    placeholder="zalmoxis04"
                    className="userUpdateInput"
                  />
                </div>
                <div className="userUpdateItem">
                  <label>Full Name</label>
                  <input
                    type="text"
                    placeholder="Zalmoxis Ion"
                    className="userUpdateInput"
                  />
                  <div className="userUpdateItem">
                    <label>Email</label>
                    <input
                      type="text"
                      placeholder="zalmoxis04@gmail.com"
                      className="userUpdateInput"
                    />
                  </div>
                </div>
              </div>
              <div className="userUpdateRight">
                <div className="userUpdateUpload">
                  <img className="userUpdateImg" src={logo} alt=""></img>
                  <label htmlFor="file"></label>
                  <input type="file" id="file" />
                </div>
                <button className="userUpdateButton">Update</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </AdminMode>
  );
};

export default User;
