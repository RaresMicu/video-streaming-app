import "./videolist.scss";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ListItem from "../listItem/ListItem";
import { useRef, useState, useEffect } from "react";

function Videolist() {
  const [slideNumber, setSlideNumber] = useState(0);
  const [lastClickTime, setLastClickTime] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(0);
  const [isMovedLeft, setIsMovedLeft] = useState(false);
  const [isMovedRight, setIsMovedRight] = useState(true);
  useEffect(() => {
    const itemsPerPage = Math.floor(window.innerWidth / 233);
    setItemsPerPage(itemsPerPage);
  }, []);

  const listRef = useRef();

  const handleClick = (direction) => {
    const numberOfItems = listRef.current.children.length;
    const currentTime = Date.now();

    if (currentTime - lastClickTime < 1050) {
      return;
    }

    setLastClickTime(currentTime);

    setIsMovedLeft(true);
    const distance = listRef.current.getBoundingClientRect().x - 50;
    const itemsToSlide = numberOfItems - itemsPerPage;

    if (direction === "left" && slideNumber > 0) {
      setSlideNumber(slideNumber - 1);
      if (slideNumber === 1) {
        listRef.current.style.transform = `translateX(${0}px)`;
        setIsMovedLeft(false);
      } else {
        listRef.current.style.transform = `translateX(${distance + 233}px)`;
        if (isMovedRight === false) {
          setIsMovedRight(true);
        }
      }
    }

    if (direction === "right" && slideNumber < itemsToSlide) {
      if (slideNumber === itemsToSlide - 1) {
        setIsMovedRight(false);
      }
      listRef.current.style.transform = `translateX(${distance - 233}px)`;
      setSlideNumber(slideNumber + 1);
    }
  };

  const list = [
    {
      index: 0,
      year: 2020,
      duration: "1h30m",
      description:
        "      Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum magnam corrupti, aut commodi molestiae veritatis?",
    },
    { index: 1, year: 2021, duration: "1h45m", description: "Description 2" },
    { index: 2, year: 2022, duration: "2h15m", description: "Description 3" },
    { index: 3, year: 2020, duration: "1h30m", description: "Description 1" },
    { index: 4, year: 2021, duration: "1h45m", description: "Description 2" },
    { index: 5, year: 2022, duration: "2h15m", description: "Description 3" },
    { index: 6, year: 2020, duration: "1h30m", description: "Description 1" },
    { index: 7, year: 2021, duration: "1h45m", description: "Description 2" },
    { index: 8, year: 2022, duration: "2h15m", description: "Description 3" },
    { index: 9, year: 2020, duration: "1h30m", description: "Description 10" },
  ];

  return (
    <div className="videolist">
      <span className="listTitle">Long Documentaries</span>
      <div className="wrapper">
        <ArrowBackIosNewIcon
          className="sliderArrow left"
          onClick={() => handleClick("left")}
          style={{ display: !isMovedLeft && "none" }}
        />
        <div className="container" ref={listRef}>
          {list.map((item) => (
            <ListItem
              index={item.index}
              year={item.year}
              duration={item.duration}
              description={item.description}
            />
          ))}
        </div>
        <ArrowForwardIosIcon
          className="sliderArrow right"
          onClick={() => handleClick("right")}
          style={{ display: !isMovedRight && "none" }}
        />
      </div>
    </div>
  );
}

export default Videolist;
