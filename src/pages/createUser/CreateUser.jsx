import AdminMode from "../adminMode/AdminMode";
import "./createUser.scss";
import { useNavigate } from "react-router-dom";
import { useState, useContext } from "react";
import { createUser } from "../../context/userContext/apiCalls";
import { UserContext } from "../../context/userContext/UserContext";

function CreateUser() {
  const navigate = useNavigate();
  const [user, setUser] = useState({});

  const { dispatch } = useContext(UserContext);

  const handleChange = (e) => {
    const value = e.target.value;
    setUser({ ...user, [e.target.name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (user.email && user.username && user.isAdmin && user.password) {
      createUser(user, dispatch);
      navigate(-2);
    } else {
      alert("Please fill in all the fields");
      return;
    }
  };

  return (
    <AdminMode>
      <div className="createuser">
        <h1 className="createuserTitle">Create User</h1>
        <form className="createuserForm">
          <div className="createuserItem">
            <label>Username</label>
            <input
              type="text"
              placeholder="username"
              name="username"
              onChange={handleChange}
            />
          </div>
          <div className="createuserItem">
            <label>Email</label>
            <input
              type="email"
              placeholder="email"
              name="email"
              onChange={handleChange}
            />
          </div>
          <div className="createuserItem">
            <label>Password</label>
            <input
              type="password"
              placeholder="password"
              name="password"
              onChange={handleChange}
            />
          </div>
          <div className="createuserItem">
            <label>isAdmin</label>
            <select
              className="createuserSelect"
              name="isAdmin"
              id="isAdmin"
              onChange={handleChange}
            >
              <option>-</option>
              <option value="no">No</option>
              <option value="yes">Yes</option>
            </select>
          </div>
          <button className="createuserButton" onClick={handleSubmit}>
            Create
          </button>
        </form>
      </div>
    </AdminMode>
  );
}

export default CreateUser;
