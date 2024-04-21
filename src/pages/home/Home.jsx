import "./home.scss";
import axios from "axios";
import NavBar from "../../components/navbar/NavBar";
import Videolist from "../../components/videolist/Videolist";
import Featured from "../../components/featured/Featured";
import { useEffect, useState } from "react";

const Home = ({ type }) => {
  const [lists, setLists] = useState([]);

  useEffect(() => {
    const getRandomLists = async () => {
      try {
        const res = await axios.get(`lists${type ? "?type=" + type : ""}`);
        setLists(res.data);
        console.log(res);
      } catch (err) {
        console.log(err);
      }
    };
    getRandomLists();
  }, [type]);

  return (
    <div className="home">
      <NavBar />
      <Featured type={type} />
      {/* <Videolist /> */}
      {/* <Videolist />
      <Videolist />
      <Videolist /> */}
    </div>
  );
};

export default Home;
