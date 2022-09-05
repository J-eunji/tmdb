import styled, { css } from "styled-components";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";
import { useEffect, useState } from "react";
import { getUpcoming } from "../../dataApi";

export default function Slider() {
  const [slideList, setSlideList] = useState([]);
  const [index, setIndex] = useState(0);
  const imgUrl = "https://image.tmdb.org/t/p/original";
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
      {slideList.map((slide, idx) => {
        return (
          <SlideBox
            key={slide.id}
            imgUrl={imgUrl + slide.backdrop_path}
            active={idx === index}
          >
            <img src={imgUrl + slide.backdrop_path} alt={slide.title} />
            <SlideDate>{slide.release_date} 개봉</SlideDate>
            <SlideTitle>{slide.title}</SlideTitle>
          </SlideBox>
        );
      })}

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
`;

const SlideBox = styled.li`
  width: 100vw;
  height: 550px;
  position: absolute;
  top: 0;
  left: 0;
  transition: opacity 0.5s;
  ${({ active }) => css`
    opacity: ${active ? 1 : 0};
  `};
  img {
    width: 100%;
  }
`;

const SlideDate = styled.p`
  position: absolute;
  bottom: 60px;
  left: 60px;
  color: white;
  font-size: 1.8em;
  text-shadow: 4px 4px 5px black;
`;

const SlideTitle = styled.p`
  position: absolute;
  bottom: 0;
  left: 55px;
  color: white;
  font-size: 3em;
  text-shadow: 4px 4px 5px black;
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
