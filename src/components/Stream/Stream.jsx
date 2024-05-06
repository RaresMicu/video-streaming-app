import "./stream.scss";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { useLocation } from "react-router";
import { Link } from "react-router-dom";

function Stream() {
  const location = useLocation();
  const documentary = location.state.documentary;

  return (
    <div className="stream">
      <Link to="/">
        <div className="back">
          <ArrowBackIcon />
          Home
        </div>
      </Link>
      <video
        className="video"
        autoPlay
        progress="true"
        controls
        src={documentary.video}
      ></video>
    </div>
  );
}

export default Stream;
