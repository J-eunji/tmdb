import { Link } from "react-router-dom";
import styled from "styled-components";

export default function MovieItem({ movie, ref }) {
  const { title, release_date, poster_path } = movie;

  const imgUrl = `https://image.tmdb.org/t/p/w200${poster_path}`;
  return (
    <Block ref={ref}>
      <Link to={`/movie/${movie.id}`}>
        <ImgBox>
          <img src={imgUrl} alt={title} />
        </ImgBox>
        <TitleText>{title}</TitleText>
        <ReleaseDate>{release_date}</ReleaseDate>
      </Link>
    </Block>
  );
}

const Block = styled.div`
  width: 200px;
  overflow: hidden;
  margin: 20px;
`;

const ImgBox = styled.div`
  height: 300px;
  border-radius: 8px;
  background-color: tomato;
  display: flex;
  justify-content: center;
  overflow: hidden;
`;

const TitleText = styled.h4`
  font-size: 1.2em;
  font-weight: 700;
  margin-top: 10px;
`;

const ReleaseDate = styled.div`
  color: gray;
`;
