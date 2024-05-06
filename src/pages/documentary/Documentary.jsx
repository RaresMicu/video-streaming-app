import "./documentary.scss";
import AdminMode from "../adminMode/AdminMode";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { updateDocumentary } from "../../context/documentaryContext/apiCalls";
import { DocumentaryContext } from "../../context/documentaryContext/DocumentaryContext";
import { useContext, useState } from "react";
import { storage } from "../../firebase";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";

function Documentary() {
  const navigate = useNavigate();
  const location = useLocation();
  const documentary = location.state.documentary;
  const [noToUpload, setNoToUpload] = useState(1);
  const [uploaded, setUploaded] = useState(0);
  const [newData, setNewData] = useState(documentary);
  const [img, setImg] = useState(null);
  const [trailer, setTrailer] = useState(null);
  const [video, setVideo] = useState(null);

  const { dispatch } = useContext(DocumentaryContext);

  const upload = (items) => {
    items.forEach((item) => {
      const fileName = new Date().getTime() + item.label + item.file.name;
      const storageRef = ref(storage, `/documentaries/${fileName}`);
      const uploadTask = uploadBytes(storageRef, item.file);
      uploadTask.then((data) => {
        getDownloadURL(data.ref).then((url) => {
          setNewData((prev) => {
            return { ...prev, [item.label]: url };
          });
          setUploaded((prev) => {
            return prev + 1;
          });
        });
      });
    });
  };

  const handleUpload = (e) => {
    e.preventDefault();

    const itemsToUpload = [
      { file: img, label: "img" },
      { file: trailer, label: "trailer" },
      { file: video, label: "video" },
    ].filter((item) => item.file !== null);

    if (itemsToUpload.length > 0) {
      setNoToUpload(itemsToUpload.length);
      upload(itemsToUpload);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    updateDocumentary(newData, dispatch);
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
          <h1 className="documentaryTitle">Documentary</h1>
          <Link to="/admin/createDocumentary">
            <button className="documentaryAddButton">Create</button>
          </Link>
        </div>
        <div className="documentaryTop">
          <div className="documentaryInfoTop">
            <img src={documentary.img} alt="" className="documentaryImg" />
            <span className="documentaryName">{documentary.title}</span>
          </div>
          <div className="documentaryInfoBottom">
            <div className="documentaryInfoItem">
              <span className="documentaryInfoKey">id:</span>
              <span className="documentaryInfoValue">{documentary._id}</span>
            </div>
            <div className="documentaryInfoItem">
              <span className="documentaryInfoKey">genre: </span>
              <span className="documentaryInfoValue">{documentary.genre}</span>
            </div>
            <div className="documentaryInfoItem">
              <span className="documentaryInfoKey">year: </span>
              <span className="documentaryInfoValue">{documentary.year}</span>
            </div>
          </div>
        </div>
        <div className="documentaryBottom">
          <form className="documentaryForm">
            <div className="documentaryFormLeft">
              <label>Documentary Title</label>
              <input
                type="text"
                placeholder={documentary.title}
                name="title"
                onChange={handleChange}
              />
              <label>Year</label>
              <input
                type="text"
                placeholder={documentary.year}
                name="year"
                onChange={handleChange}
              />
              <label>Genre</label>
              <input
                type="text"
                placeholder={documentary.genre}
                name="genre"
                onChange={handleChange}
              />
              <label>Description</label>
              <input
                type="text"
                placeholder="description"
                name="desc"
                onChange={handleChange}
              />
              <label>Trailer</label>
              <input
                type="file"
                name="trailer"
                onChange={(e) => setTrailer(e.target.files[0])}
              />
              <label>Video</label>
              <input
                type="file"
                name="video"
                onChange={(e) => setVideo(e.target.files[0])}
              />
            </div>
            <div className="documentaryFormRight">
              <div className="documentaryUpload">
                <img
                  src={documentary.img}
                  alt=""
                  className="documentaryUploadImage"
                />
                <label></label>
                <input
                  type="file"
                  id="file"
                  name="img"
                  onChange={(e) => {
                    setImg(e.target.files[0]);
                  }}
                ></input>
              </div>
              {uploaded === noToUpload || (!video && !img && !trailer) ? (
                <button className="documentaryButton" onClick={handleSubmit}>
                  Update
                </button>
              ) : (
                <button className="documentaryButton" onClick={handleUpload}>
                  Upload
                </button>
              )}
            </div>
          </form>
        </div>
      </div>
    </AdminMode>
  );
}

export default Documentary;
