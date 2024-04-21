import { InfoOutlined, PlayArrow } from "@material-ui/icons";
// import axios from "axios";
import { useEffect, useState } from "react";
import "./featured.scss";
import Homehero from "../homehero/Homehero";

export default function Featured({ type }) {
  const [content, setContent] = useState({});

  //   useEffect(() => {
  //     const getRandomContent = async () => {
  //       try {
  //         const res = await axios.get(`/movies/random?type=${type}`, {
  //           headers: {
  //             token:
  //               "Bearer " + JSON.parse(localStorage.getItem("user")).accessToken,
  //           },
  //         });
  //         setContent(res.data[0]);
  //       } catch (err) {
  //         console.log(err);
  //       }
  //     };
  //     getRandomContent();
  //   }, [type]);

  // console.log(content);
  return (
    <div className="featured">
      {type && (
        <div className="category">
          <span>
            {type === "long" ? "Long Documentaries" : "Short Documentaries"}
          </span>
        </div>
      )}
      <Homehero />
    </div>
  );
}
