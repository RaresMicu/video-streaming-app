import "./listItem.scss";
import trailer1 from "../../assets/trailers/trailer1.mp4";
import profile from "../../assets/images/profile1.jpg";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import AddIcon from "@mui/icons-material/Add";
import { useState } from "react";

function ListItem({ index, year, duration, description }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
      <div
        className="listItem"
        
        onMouseEnter={() => {
          setIsHovered(true);
        }}
        onMouseLeave={() => setIsHovered(false)}
      >
        <img src={profile} alt="" />
        {isHovered && (
          <div>
            <video src={trailer1} autoPlay={true} loop style={{ left: index * 225 - 25 + 4 * index }}/>
            <div className="itemInfo">
              <div className="icons">
                <PlayArrowIcon className="icon" />
                <AddIcon className="icon" />
              </div>
              <div className="itemInfoTop">
                <span>{duration}</span>
                <span className="infoTopSpacing">{year}</span>
              </div>
              <div className="desc">{description}</div>
            </div>
          </div>
        )}
      </div>
  );
}

export default ListItem;
