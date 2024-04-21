import "./homehero.scss";
import profile from "../../assets/images/profile1.jpg";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";

function Homehero() {
  return (
    <div className="homehero">
      <img src={profile} alt="" className="featured-picture"></img>
      <div className="info">
        <h1>Lorem ipsum dolor</h1>
        <span className="desc">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo
          laudantium nemo esse quas doloribus, animi impedit placeat iure culpa
          perspiciatis libero cupiditate minima dolores aut inventore? Nisi
          maiores iure laudantium.
        </span>
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
