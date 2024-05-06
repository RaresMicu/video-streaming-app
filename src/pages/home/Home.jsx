import "./home.scss";
import axios from "axios";
import NavBar from "../../components/navbar/NavBar";
import Videolist from "../../components/videolist/Videolist";
import Featured from "../../components/featured/Featured";
import { useEffect, useState } from "react";

const Home = ({ type }) => {
  const [lists, setLists] = useState([]);
  const [loading, setLoading] = useState(false);

  // useEffect(() => {
  //   setTimeout(() => {
  //     setLoading(false);
  //   }, 2000);
  // }, []);

  useEffect(() => {
    const getRandomLists = async () => {
      try {
        const res = await axios.get(`lists${type ? "?type=" + type : ""}`, {
          headers: {
            token: `Bearer ${
              JSON.parse(localStorage.getItem("user")).accessToken
            }`,
          },
        });
        setLists(res.data);
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
      {loading ? ( // Conditionally render loading page or content
        <div>Loading...</div>
      ) : (
        lists.map((list) => <Videolist list={list} key={list._id} />)
      )}
    </div>
  );
};

export default Home;
