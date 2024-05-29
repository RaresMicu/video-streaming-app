import "./stream.scss";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { useLocation } from "react-router";
import { Link } from "react-router-dom";
import { useEffect, useRef } from "react";
import Hls from "hls.js";

function Stream() {
  const location = useLocation();
  const documentary = location.state.documentary;
  const videoRef = useRef(null);
  const hlsRef = useRef(null);

  useEffect(() => {
    if (Hls.isSupported()) {
      const hls = new Hls();
      hlsRef.current = hls;

      const video = videoRef.current;

      hls.loadSource(documentary.video);
      hls.attachMedia(video);
    } else {
      console.error("HLS is not supported in this browser");
    }

    return () => {
      if (hlsRef.current) {
        hlsRef.current.destroy();
      }
    };
  }, [documentary.video]);

  return (
    <div className="stream">
      <Link to="/">
        <div className="back">
          <ArrowBackIcon />
          Home
        </div>
      </Link>
      <video
        ref={videoRef}
        className="video"
        autoPlay
        progress="true"
        controls
        src={documentary.video}
      ></video>
      {/* <video
        id="my-video"
        className="video-js"
        controls
        preload="auto"
        width="640"
        height="264"
        poster=""
        data-setup="{}"
      >
        <source src={documentary.video} type="application/x-mpegURL" />
      </video> */}
    </div>
  );
}

export default Stream;
