import "./user.scss";
// import logo from "../../assets/images/profile1.jpg";
import { Link, useLocation, useNavigate } from "react-router-dom";
import AdminMode from "../adminMode/AdminMode";
import { UserContext } from "../../context/userContext/UserContext";
import { useContext, useState } from "react";
import { storage } from "../../firebase";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { updateUser } from "../../context/userContext/apiCalls";

const User = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const user = location.state.user;
  const [uploaded, setUploaded] = useState(false);
  const [newData, setNewData] = useState(user);
  const [profilePicture, setprofilePicture] = useState(null);
  const { dispatch } = useContext(UserContext);

  const upload = (items) => {
    items.forEach((item) => {
      const fileName = new Date().getTime() + item.label + item.file.name;
      const storageRef = ref(storage, `/users/${fileName}`);
      const uploadTask = uploadBytes(storageRef, item.file);
      uploadTask.then((data) => {
        getDownloadURL(data.ref).then((url) => {
          setNewData((prev) => {
            return { ...prev, [item.label]: url };
          });
          setUploaded(true);
        });
      });
    });
  };

  const handleUpload = (e) => {
    e.preventDefault();

    const itemsToUpload = [
      { file: profilePicture, label: "profilePicture" },
    ].filter((item) => item.file !== null);

    upload(itemsToUpload);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    updateUser(newData, dispatch);
    navigate(-1);
  };

  const handleChange = (e) => {
    const value = e.target.value;
    setNewData({ ...newData, [e.target.name]: value });
  };

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
              <img
                src={user.profilePicture}
                alt=""
                className="userDisplayImg"
              ></img>
              <span className="userDisplayUsername">{user.username}</span>
            </div>
            <div className="userDisplayBottom">
              <span className="userDisplayInfoTitle">Account Details</span>
              <span className="userDisplayInfo">Username: {user.username}</span>
              <span className="userDisplayInfo">Email: {user.email}</span>
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
                    placeholder={user.username}
                    className="userUpdateInput"
                    name="username"
                    onChange={handleChange}
                  />
                </div>
                <div className="userUpdateItem">
                  <label>Email</label>
                  <input
                    type="text"
                    placeholder={user.email}
                    className="userUpdateInput"
                    name="email"
                    onChange={handleChange}
                  />
                </div>
                <div className="userUpdateItem">
                  <label>Is Admin?</label>
                  <select name="isAdmin" id="isAdmin" onChange={handleChange}>
                    <option>-</option>
                    <option value="true">Yes</option>
                    <option value="false">No</option>
                  </select>
                </div>
              </div>
              <div className="userUpdateRight">
                <div className="userUpdateUpload">
                  <img
                    className="userUpdateImg"
                    src={user.profilePicture}
                    alt=""
                  ></img>
                  <label htmlFor="file"></label>
                  <input
                    type="file"
                    id="file"
                    name="profilePicture"
                    onChange={(e) => {
                      setprofilePicture(e.target.files[0]);
                    }}
                  />
                </div>
                {uploaded === true || !profilePicture ? (
                  <button className="userUpdateButton" onClick={handleSubmit}>
                    Update
                  </button>
                ) : (
                  <button className="userUpdateButton" onClick={handleUpload}>
                    Upload
                  </button>
                )}
              </div>
            </form>
          </div>
        </div>
      </div>
    </AdminMode>
  );
};

export default User;
