import "./listItem.scss";
import axios from "axios";
import loadingPic from "../../assets/images/profile1.jpg";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import AddIcon from "@mui/icons-material/Add";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function ListItem({ index, item }) {
  const [isHovered, setIsHovered] = useState(false);
  const [loading, setLoading] = useState(true);
  const [documentary, setDocumentary] = useState({
    img: "",
    title: "",
    duration: "",
    year: "",
    desc: "",
    genre: "",
  });

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);

  useEffect(() => {
    const getDocumentary = async () => {
      try {
        const res = await axios.get(`/documentaries/find/${item}`, {
          headers: {
            token: `Bearer ${
              JSON.parse(localStorage.getItem("user")).accessToken
            }`,
          },
        });
        setDocumentary(res.data);
        // console.log(res.data);
        // setLoading(false);
      } catch (err) {
        console.log(err);
        // setLoading(false);
      }
    };
    getDocumentary();
  }, [item]);

  return (
    <Link to={`/video`} state={{ documentary: documentary }} className="link">
      <div
        className="listItem"
        onMouseEnter={() => {
          setIsHovered(true);
        }}
        onMouseLeave={() => setIsHovered(false)}
      >
        {loading ? (
          <img src={loadingPic} alt="Loading..." />
        ) : (
          <>
            <img
              src={
                documentary && documentary.img != null ? documentary.img : ""
              }
              alt=""
            />
            {isHovered && (
              <div>
                <video
                  src={documentary && documentary.trailer}
                  autoPlay={true}
                  loop
                  style={{ left: index * 225 - 25 + 4 * index }}
                />
                <div className="itemInfo">
                  <div className="title">
                    <span>{documentary && documentary.title}</span>
                  </div>
                  <div className="icons">
                    <PlayArrowIcon className="icon" />
                    <AddIcon className="icon" />
                  </div>
                  <div className="itemInfoTop">
                    <span>{documentary && documentary.duration}</span>
                    <span className="infoTopSpacing">
                      {documentary && documentary.year}
                    </span>
                  </div>
                  <div className="desc">{documentary && documentary.desc}</div>
                  <br />
                  <div className="genre">
                    {documentary && documentary.genre}
                  </div>
                </div>
              </div>
            )}
          </>
        )}
      </div>
    </Link>
  );
}

export default ListItem;
