import AdminMode from "../adminMode/AdminMode";
import "./createDocumentary.scss";
import { useNavigate } from "react-router-dom";
import { useState, useContext } from "react";
import { storage } from "../../firebase";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { createDocumentary } from "../../context/documentaryContext/apiCalls";
import { DocumentaryContext } from "../../context/documentaryContext/DocumentaryContext";

function CreateDocumentary() {
  const navigate = useNavigate();
  const [documentary, setDocumentary] = useState({});
  const [img, setImg] = useState(null);
  const [imgSm, setImgSm] = useState(null);
  const [trailer, setTrailer] = useState(null);
  const [video, setVideo] = useState(null);
  const [uploaded, setUploaded] = useState(0);

  const { dispatch } = useContext(DocumentaryContext);

  const handleChange = (e) => {
    const value = e.target.value;
    setDocumentary({ ...documentary, [e.target.name]: value });
  };

  const upload = (items) => {
    items.forEach((item) => {
      const fileName = new Date().getTime() + item.label + item.file.name;
      const storageRef = ref(storage, `/documentaries/${fileName}`);
      const uploadTask = uploadBytes(storageRef, item.file);
      uploadTask.then((data) => {
        getDownloadURL(data.ref).then((url) => {
          setDocumentary((prev) => {
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
    if (!img || !imgSm || !trailer || !video) {
      alert("Please upload all the files");
      return;
    }
    upload([
      { file: img, label: "img" },
      { file: imgSm, label: "imgSm" },
      { file: trailer, label: "trailer" },
      { file: video, label: "video" },
    ]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    createDocumentary(documentary, dispatch);
    navigate(-2);
  };

  return (
    <AdminMode>
      <div className="createDocumentary">
        <h1 className="createuDocumentaryTitle">Upload Documentary</h1>
        <form className="createDocumentaryForm">
          <div className="createDocumentaryItem">
            <label>Image</label>
            <input
              type="file"
              id="img"
              name="img"
              onChange={(e) => setImg(e.target.files[0])}
            />
          </div>
          <div className="createDocumentaryItem">
            <label>Thumbnail Image</label>
            <input
              type="file"
              id="imgSm"
              name="imgSm"
              onChange={(e) => setImgSm(e.target.files[0])}
            />
          </div>
          <div className="createDocumentaryItem">
            <label>Title</label>
            <input
              type="text"
              placeholder="Sfinxul"
              name="title"
              onChange={handleChange}
            />
          </div>
          <div className="createDocumentaryItem">
            <label>Description</label>
            <input
              type="text"
              placeholder="description"
              name="desc"
              onChange={handleChange}
            />
          </div>
          <div className="createDocumentaryItem">
            <label>Year</label>
            <input
              type="text"
              placeholder="year"
              name="year"
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
            <label>Duration</label>
            <input
              type="text"
              placeholder="duration"
              name="duration"
              onChange={handleChange}
            />
          </div>
          <div className="createDocumentaryItem">
            <label>Is Short?</label>
            <select name="isShort" id="isShort" onChange={handleChange}>
              <option value="true">Yes</option>
              <option value="false">No</option>
            </select>
          </div>
          <div className="createDocumentaryItem">
            <label>Trailer</label>
            <input
              type="file"
              name="trailer"
              onChange={(e) => setTrailer(e.target.files[0])}
            />
          </div>
          <div className="createDocumentaryItem">
            <label>Video</label>
            <input
              type="file"
              name="video"
              onChange={(e) => setVideo(e.target.files[0])}
            />
          </div>

          <div className="createDocumentaryItem"></div>
          {uploaded === 4 ? (
            <button className="createDocumentaryButton" onClick={handleSubmit}>
              Create
            </button>
          ) : (
            <button className="createDocumentaryButton" onClick={handleUpload}>
              Upload
            </button>
          )}
        </form>
      </div>
    </AdminMode>
  );
}

export default CreateDocumentary;
