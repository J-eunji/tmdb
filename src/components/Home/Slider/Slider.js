import styled from "styled-components";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";
import { useEffect, useState } from "react";
import { getUpcoming } from "../../../dataApi";
import SlideItem from "./SlideItem";

export default function Slider() {
  const [slideList, setSlideList] = useState([]);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const getResults = async () => {
      let { results } = await getUpcoming();
      let backdrops = results.filter((obj) => obj?.backdrop_path);
      setSlideList(backdrops.slice(0, 5));
    };
    getResults();
  }, []);

  const handleLeft = () => {
    if (index > 0) {
      setIndex(index - 1);
    }
  };

  const handleRight = () => {
    if (index < slideList.length - 1) {
      setIndex(index + 1);
    }
  };

  return (
    <Container>
      {slideList.map((slide, idx) => (
        <SlideItem
          key={slide.id}
          slide={slide}
          active={idx === index}
        ></SlideItem>
      ))}
      <Button>
        <BsChevronLeft
          size={50}
          cursor="pointer"
          onClick={() => handleLeft()}
        />
        <BsChevronRight
          size={50}
          cursor="pointer"
          onClick={() => handleRight()}
        />
      </Button>
    </Container>
  );
}

const Container = styled.div`
  overflow: hidden;
  height: 650px;
  position: relative;
  cursor: pointer;
`;

const Button = styled.div`
  position: absolute;
  top: 50%;
  left: 0;
  padding: 0 35px 0 20px;
  width: 100vw;
  transform: translateY(-50%);
  display: flex;
  justify-content: space-between;
  z-index: 2;
`;
