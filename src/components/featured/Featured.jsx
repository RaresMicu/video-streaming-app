import { InfoOutlined, PlayArrow } from "@material-ui/icons";
// import axios from "axios";
import { useEffect, useState } from "react";
import "./featured.scss";
import Homehero from "../homehero/Homehero";

export default function Featured({ type }) {
  return (
    <div className="featured">
      {type && (
        <div className="category">
          <span>
            {type === "long" ? "Long Documentaries" : "Short Documentaries"}
          </span>
        </div>
      )}
      <Homehero type={type} />
    </div>
  );
}
