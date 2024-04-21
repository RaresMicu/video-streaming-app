import AdminMode from "../adminMode/AdminMode";
import "./createUser.scss";

function CreateUser() {
  return (
    <AdminMode>
      <div className="createuser">
        <h1 className="createuserTitle">Create User</h1>
        <form className="createuserForm">
          <div className="createuserItem">
            <label htmlFor="">Username</label>
            <input type="text" placeholder="zalmoxis04" />
          </div>
          <div className="createuserItem">
            <label htmlFor="">Full Name</label>
            <input type="text" placeholder="Zalmoxis Ion" />
          </div>
          <div className="createuserItem">
            <label htmlFor="">Email</label>
            <input type="email" placeholder="zalmoxis04@gmail.com" />
          </div>
          <div className="createuserItem">
            <label htmlFor="">Password</label>
            <input type="password" placeholder="password" />
          </div>
          <div className="createuserItem">
            <label htmlFor="">Active</label>
            <select className="createuserSelect" name="active" id="active">
              <option value="yes">Yes</option>
              <option value="no">No</option>
            </select>
          </div>
          <button className="createuserButton">Create</button>
        </form>
      </div>
    </AdminMode>
  );
}

export default CreateUser;
