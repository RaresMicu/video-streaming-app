import AdminMode from "../adminMode/AdminMode";
import "./createDocumentary.scss";

function CreateDocumentary() {
  return (
    <AdminMode>
      <div className="createDocumentary">
        <h1 className="createuDocumentaryTitle">Upload Documentary</h1>
        <form className="createDocumentaryForm">
          <div className="createDocumentaryItem">
            <label htmlFor="">Documentary</label>
            <input type="file" id="file" />
          </div>
          <div className="createDocumentaryItem">
            <label htmlFor="">Name</label>
            <input type="text" placeholder="Sfinxul" />
          </div>
          <div className="createDocumentaryItem">
            <label htmlFor="">Active</label>
            <select
              className="createDocumentarySelect"
              name="active"
              id="active"
            >
              <option value="yes">Yes</option>
              <option value="no">No</option>
            </select>
          </div>
          <button className="createDocumentaryButton">Create</button>
        </form>
      </div>
    </AdminMode>
  );
}

export default CreateDocumentary;
