import AdminMode from "../adminMode/AdminMode";
import "./createDocumentary.scss";
import { useNavigate } from "react-router-dom";
import { useState, useContext } from "react";
import { storage } from "../../firebase";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { createDocumentary } from "../../context/documentaryContext/apiCalls";
import { DocumentaryContext } from "../../context/documentaryContext/DocumentaryContext";
import axios from "axios";

function CreateDocumentary() {
  const navigate = useNavigate();
  const [documentary, setDocumentary] = useState({});
  const [img, setImg] = useState(null);
  const [imgSm, setImgSm] = useState(null);
  const [trailer, setTrailer] = useState(null);
  const [video, setVideo] = useState(null);
  const [uploaded, setUploaded] = useState(0);
  const [converted, setConverted] = useState(false);

  const { dispatch } = useContext(DocumentaryContext);

  const handleChange = (e) => {
    const value = e.target.value;
    setDocumentary({ ...documentary, [e.target.name]: value });
  };

  const upload = (items) => {
    items.forEach(async (item) => {
      // const fileName = new Date().getTime() + item.label + item.file.name;
      const fileName = item.file.name;
      const fileNameWithExtension = video.name;
      const fileNameWithoutExtension = fileNameWithExtension
        .split(".")
        .slice(0, -1)
        .join(".");
      // const storageRef = ref(storage, `/documentaries/${fileName}`);

      // uploadHLS files in firebase
      const responseHLSFirebase = await axios.post("/generate-hls/uploadHLS", {
        folderPath: `/VideoStreaminApp.AM/gaiasight-documentary-streaming/video-streaming-app/public/output/${fileNameWithoutExtension}`,
        directory: fileNameWithoutExtension,
      });
      // console.log(
      //   "Response from uploadHLS:",
      //   responseHLSFirebase.data.indexFile[0].url
      // );

      const storageRef = ref(
        storage,
        `/${fileNameWithoutExtension}/${fileName}`
      );
      const uploadTask = uploadBytes(storageRef, item.file);
      uploadTask.then((data) => {
        getDownloadURL(data.ref).then((url) => {
          if (item.label === "video") {
            setDocumentary((prev) => {
              return {
                ...prev,
                [item.label]: responseHLSFirebase.data.indexFile[0].url,
              };
            });
          } else {
            setDocumentary((prev) => {
              return { ...prev, [item.label]: url };
            });
          }
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

  const customRenditions = [
    {
      width: 640,
      height: 360,
      profile: "main",
      hlsTime: "4",
      bv: "800k",
      maxrate: "856k",
      bufsize: "1200k",
      ba: "96k",
      ts_title: "360p",
      master_title: "360p",
    },
    {
      width: 842,
      height: 480,
      profile: "main",
      hlsTime: "4",
      bv: "1400k",
      maxrate: "1498",
      bufsize: "2100k",
      ba: "128k",
      ts_title: "480p",
      master_title: "480p",
    },
    {
      width: 1280,
      height: 720,
      profile: "main",
      hlsTime: "4",
      bv: "2800k",
      maxrate: "2996k",
      bufsize: "4200k",
      ba: "128k",
      ts_title: "720p",
      master_title: "720p",
    },
    {
      width: 1920,
      height: 1080,
      profile: "main",
      hlsTime: "4",
      bv: "5000k",
      maxrate: "5350k",
      bufsize: "7500k",
      ba: "192k",
      ts_title: "1080p",
      master_title: "1080p",
    },
  ];

  async function convertToHLS() {
    try {
      const fileNameWithExtension = video.name;
      const fileNameWithoutExtension = fileNameWithExtension
        .split(".")
        .slice(0, -1)
        .join(".");
      //request la API pentru generarea HLS
      const response = await axios.post("/generate-hls", {
        inputPath: `/VideoStreaminApp.AM/gaiasight-documentary-streaming/video-streaming-app/src/assets/trailers/${video.name}`,
        outputPath:
          "/VideoStreaminApp.AM/gaiasight-documentary-streaming/video-streaming-app/public/output/" +
          fileNameWithoutExtension,
        customRenditions: customRenditions,
      });
      console.log(response.data.hlsPath);

      setConverted(true);
    } catch (error) {
      console.error("Error generating HLS/Updating files for firebase:", error);
    }
  }

  async function updateHLS() {
    try {
      const fileNameWithExtension = video.name;
      const fileNameWithoutExtension = fileNameWithExtension
        .split(".")
        .slice(0, -1)
        .join(".");

      //request la API pentru update-ul fisierelor din folder
      const responseUpdateFiles = await axios.post(
        "/generate-hls/updateFilesInFolder",
        {
          folderPath: `/VideoStreaminApp.AM/gaiasight-documentary-streaming/video-streaming-app/public/output/${fileNameWithoutExtension}`,
          videoName: fileNameWithoutExtension,
        }
      );

      console.log("Update files response:", responseUpdateFiles.data);
    } catch (error) {
      console.error("Error Updating files for firebase:", error);
    }
  }

  const handleTest = async (e) => {
    e.preventDefault();
    if (!video) {
      alert("Please select a video file.");
      return;
    }
    await convertToHLS();
  };

  const handleTestUpdate = async (e) => {
    e.preventDefault();
    await updateHLS();
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
        </form>
        <div className="createDocumentaryItem">
          {converted === false ? (
            <button
              type="button"
              className="createDocumentaryButton"
              onClick={handleTest}
            >
              HLS Convert
            </button>
          ) : null}
        </div>
        <button
          type="button"
          className="createDocumentaryButton"
          onClick={handleTestUpdate}
        >
          HLS file update
        </button>
        <div className="createDocumentaryItem">
          {uploaded === 4 ? (
            <button
              type="button"
              className="createDocumentaryButton"
              onClick={handleSubmit}
            >
              Create
            </button>
          ) : (
            <button
              type="button"
              className="createDocumentaryButton"
              onClick={handleUpload}
            >
              Upload
            </button>
          )}
        </div>
      </div>
    </AdminMode>
  );
}

export default CreateDocumentary;
