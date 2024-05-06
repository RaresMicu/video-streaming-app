import "./homehero.scss";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import { useEffect, useState } from "react";
import axios from "axios";

function Homehero({ type }) {
  const [content, setContent] = useState({});

  useEffect(() => {
    const getRandomContent = async () => {
      try {
        const res = await axios.get(
          `/documentaries/random${type ? "?type=" + type : ""}`,
          {
            headers: {
              token: `Bearer ${
                JSON.parse(localStorage.getItem("user")).accessToken
              }`,
            },
          }
        );
        setContent(res.data[0]);
      } catch (err) {
        console.log(err);
      }
    };
    getRandomContent();
  }, [type]);

  return (
    <div className="homehero">
      <img
        src={content.img !== null ? content.img : ""}
        alt=""
        className="featured-picture"
      ></img>
      <div className="info">
        <h1>{content.title}</h1>
        <span className="desc">{content.desc}</span>
        <div className="buttons">
          <button className="play">
            <PlayArrowIcon></PlayArrowIcon>
            <span>Play</span>
          </button>
          <button className="more">
            <InfoOutlinedIcon></InfoOutlinedIcon>
            <span>Info</span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Homehero;
