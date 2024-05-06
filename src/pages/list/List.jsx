import "./list.scss";
import AdminMode from "../adminMode/AdminMode";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { updateList } from "../../context/listContext/apiCalls";
import { DocumentaryContext } from "../../context/documentaryContext/DocumentaryContext";
import { useContext, useState } from "react";

function List() {
  const navigate = useNavigate();
  const location = useLocation();
  const list = location.state.list;
  const [newData, setNewData] = useState(list);

  const { dispatch } = useContext(DocumentaryContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    updateList(newData, dispatch);
    navigate(-1);
  };

  const handleChange = (e) => {
    const value = e.target.value;
    setNewData({ ...newData, [e.target.name]: value });
  };

  return (
    <AdminMode>
      <div className="documentary">
        <div className="documentaryTitleContainer">
          <h1 className="documentaryTitle">List</h1>
          <Link to="/admin/createList">
            <button className="documentaryAddButton">Create</button>
          </Link>
        </div>
        <div className="documentaryTop">
          <div className="documentaryInfoTop">
            <span className="documentaryName">{list.title}</span>
          </div>
          <div className="documentaryInfoBottom">
            <div className="documentaryInfoItem">
              <span className="documentaryInfoKey">id:</span>
              <span className="documentaryInfoValue">{list._id}</span>
            </div>
            <div className="documentaryInfoItem">
              <span className="documentaryInfoKey">genre: </span>
              <span className="documentaryInfoValue">{list.genre}</span>
            </div>
            <div className="documentaryInfoItem">
              <span className="documentaryInfoKey">type: </span>
              <span className="documentaryInfoValue">{list.type}</span>
            </div>
          </div>
        </div>
        <div className="documentaryBottom">
          <form className="documentaryForm">
            <div className="documentaryFormLeft">
              <label>List Title</label>
              <input
                type="text"
                placeholder={list.title}
                name="title"
                onChange={handleChange}
              />
              <label>Type</label>
              <input
                type="text"
                placeholder={list.type}
                name="type"
                onChange={handleChange}
              />
              <label>Genre</label>
              <input
                type="text"
                placeholder={list.genre}
                name="genre"
                onChange={handleChange}
              />
            </div>
            <div className="documentaryFormRight">
              <button className="documentaryButton" onClick={handleSubmit}>
                Update
              </button>
            </div>
          </form>
        </div>
      </div>
    </AdminMode>
  );
}

export default List;
