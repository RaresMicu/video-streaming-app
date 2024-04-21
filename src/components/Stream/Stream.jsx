import "./stream.scss";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import video1 from "../../assets/trailers/trailer1.mp4";

function Stream() {
  return (
    <div className="stream">
      <div className="back">
        <ArrowBackIcon />
        Home
      </div>
      <video className="video" autoPlay progress controls src={video1}></video>
    </div>
  );
}

export default Stream;
