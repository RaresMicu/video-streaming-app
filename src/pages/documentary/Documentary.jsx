import "./documentary.scss";
import img from "../../assets/images/profile1.jpg";
import AdminMode from "../adminMode/AdminMode";
import { Link } from "react-router-dom";

function Documentary() {
  return (
    <AdminMode>
      <div className="documentary">
        <div className="documentaryTitleContainer">
          <h1 className="documentaryTitle">Documentary</h1>
          <Link to="/admin/createDocumentary">
            <button className="documentaryAddButton">Create</button>
          </Link>
        </div>
        <div className="documentaryTop">
          <div className="documentaryInfoTop">
            <img src={img} alt="" className="documentaryImg" />
            <span className="documentaryName">Sfinxul</span>
          </div>
          <div className="documentaryInfoBottom">
            <div className="documentaryInfoItem">
              <span className="documentaryInfoKey">id:</span>
              <span className="documentaryInfoValue">04</span>
            </div>
            <div className="documentaryInfoItem">
              <span className="documentaryInfoKey">duration: </span>
              <span className="documentaryInfoValue">321312</span>
            </div>
            <div className="documentaryInfoItem">
              <span className="documentaryInfoKey">active:</span>
              <span className="documentaryInfoValue">yes</span>
            </div>
          </div>
        </div>
        <div className="documentaryBottom">
          <form className="documentaryForm">
            <div className="documentaryFormLeft">
              <label>Documentary Name</label>
              <input type="text" placeholder="Sfinxul" />
              <label>Active</label>
              <select name="active" id="active">
                <option value="yes">Yes</option>
                <option value="no">No</option>
              </select>
            </div>
            <div className="documentaryFormRight">
              <div className="documentaryUpload">
                <img src={img} alt="" className="documentaryUploadImage" />
                <label for="file"></label>
                <input type="file" id="file"></input>
              </div>
              <button className="documentaryButton">Update</button>
            </div>
          </form>
        </div>
      </div>
    </AdminMode>
  );
}

export default Documentary;
