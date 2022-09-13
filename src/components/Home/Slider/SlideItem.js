import { Link } from "react-router-dom";
import styled, { css } from "styled-components";

export default function SlideItem({ active, slide }) {
  const imgUrl = "https://image.tmdb.org/t/p/original";
  const { id, backdrop_path, title, release_date } = slide;
  return (
    <Container active={active}>
      <Link to={`/movie/${id}`}>
        <img src={imgUrl + backdrop_path} alt={title} />
      </Link>
      <SlideDate>{release_date} 개봉</SlideDate>
      <SlideTitle>{title}</SlideTitle>
    </Container>
  );
}

const Container = styled.li`
  width: 100vw;
  height: 650px;
  position: absolute;
  top: 0;
  left: 0;
  transition: opacity 0.5s;
  ${({ active }) => css`
    opacity: ${active ? 1 : 0};
    z-index: ${active ? 1 : 0};
  `};
  img {
    width: 100%;
  }
`;

const SlideDate = styled.p`
  position: absolute;
  bottom: 150px;
  left: 60px;
  color: white;
  font-size: 1.8em;
  text-shadow: 4px 4px 5px black;
`;

const SlideTitle = styled.p`
  position: absolute;
  bottom: 70px;
  left: 55px;
  color: white;
  font-size: 3em;
  text-shadow: 4px 4px 5px black;
`;
