import AdminMode from "../adminMode/AdminMode";
import "./createList.scss";
import { useNavigate } from "react-router-dom";

import { useState, useContext, useEffect } from "react";
import { createList } from "../../context/listContext/apiCalls";
import { DocumentaryContext } from "../../context/documentaryContext/DocumentaryContext";
import { ListContext } from "../../context/listContext/ListContext";
import { getDocumentaries } from "../../context/documentaryContext/apiCalls";

function CreateList() {
  const navigate = useNavigate();
  const [list, setList] = useState(null);

  const { dispatch } = useContext(ListContext);
  const { documentaries, dispatch: dispatchDocumentary } =
    useContext(DocumentaryContext);

  const handleChange = (e) => {
    const value = e.target.value;
    setList({ ...list, [e.target.name]: value });
  };

  useEffect(() => {
    getDocumentaries(dispatchDocumentary);
  }, [dispatchDocumentary]);

  const handleSelect = (e) => {
    let value = Array.from(e.target.selectedOptions, (option) => option.value);
    setList({ ...list, content: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!list) return alert("Please fill in all the fields");
    if (!list.content || !list.title || !list.genre || !list.type) {
      alert("Please fill in all the fields");
      return;
    }
    createList(list, dispatch);
    navigate(-2);
  };

  return (
    <AdminMode>
      <div className="createDocumentary">
        <h1 className="createuDocumentaryTitle">Upload Documentary</h1>
        <form className="createDocumentaryForm">
          <div className="formLeft">
            <div className="createDocumentaryItem">
              <label>Title</label>
              <input
                type="text"
                placeholder="title"
                name="title"
                onChange={handleChange}
              />
            </div>
            <div className="createDocumentaryItem">
              <label>Genre</label>
              <input
                type="text"
                placeholder="genre"
                name="genre"
                onChange={handleChange}
              />
            </div>
            <div className="createDocumentaryItem">
              <label>Type</label>
              <select name="type" id="type" onChange={handleChange}>
                <option>Type</option>
                <option value="long">Long</option>
                <option value="short">Short</option>
              </select>
            </div>
          </div>
          <div className="formRight">
            <div className="createDocumentaryItem">
              <label>Content</label>
              <select
                multiple
                name="content"
                id="content"
                onChange={handleSelect}
                style={{ height: "280px" }}
              >
                {documentaries.map((documentary) => (
                  <option key={documentary._id} value={documentary._id}>
                    {documentary.title}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div className="createDocumentaryItem"></div>
          <button className="createDocumentaryButton" onClick={handleSubmit}>
            Create
          </button>
        </form>
      </div>
    </AdminMode>
  );
}

export default CreateList;
