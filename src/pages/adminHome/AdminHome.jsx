import AdminMode from "../adminMode/AdminMode";
import "./adminhome.scss";
// import { useEffect, useRef } from "react";
// import Hls from "hls.js";

function AdminHome() {
  // const videoRef = useRef(null);
  // const hlsRef = useRef(null);

  // useEffect(() => {
  //   // Check if HLS.js is supported
  //   if (Hls.isSupported()) {
  //     // Create an instance of Hls
  //     const hls = new Hls();
  //     hlsRef.current = hls;

  //     const video = videoRef.current;

  //     // Load the HLS manifest
  //     hls.loadSource("/output/index.m3u8");
  //     hls.attachMedia(video);
  //   } else {
  //     console.error("HLS is not supported in this browser");
  //   }

  //   return () => {
  //     // Cleanup HLS.js instance when component unmounts
  //     if (hlsRef.current) {
  //       hlsRef.current.destroy();
  //     }
  //   };
  // }, []);

  return (
    <AdminMode>
      <div className="adminhome">
        <div className="homeWidgets">
          <div className="centerWidget">
            <div className="widgetUsers">
              <span className="widgetUsersTitle">Welcome, Admin!</span>
            </div>
          </div>
        </div>
        <video
          src="https://firebasestorage.googleapis.com/v0/b/gaiasight-b8a92.appspot.com/o/Seed%2FSeed.mp4?alt=media&token=11f63809-b0c9-412d-bfff-eddb8ef9cac4"
          className="video"
          width={500}
          height={300}
          autoPlay
          controls
        ></video>
      </div>
    </AdminMode>
  );
}

export default AdminHome;
