import { Link } from "react-router-dom";
import styled from "styled-components";
import Vote from "../common/Vote";

export default function TVItem({ tv, ref }) {
  const { id, name, first_air_date, poster_path, vote_average } = tv;
  const imgUrl = `https://image.tmdb.org/t/p/w200${poster_path}`;
  return (
    <Block ref={ref}>
      <Link to={`/tv/${id}`}>
        <ImgBox>
          <img src={imgUrl} alt={name} />
          <VoteBox>
            <Vote vote={vote_average} />
          </VoteBox>
        </ImgBox>
        <TitleText>{name}</TitleText>
        <ReleaseDate>{first_air_date}</ReleaseDate>
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
  display: flex;
  justify-content: center;
  overflow: hidden;
  position: relative;
`;

const VoteBox = styled.div`
  position: absolute;
  bottom: 10px;
  left: 10px;
  div {
    p {
      color: #fff;
      font-size: 15px;
      margin: 0;
      z-index: 2;
    }
    span {
      color: #fff;
      font-size: 5px;
      z-index: 2;
    }
  }
`;

const TitleText = styled.h4`
  font-size: 1.2em;
  font-weight: 700;
  margin-top: 10px;
`;

const ReleaseDate = styled.div`
  color: gray;
`;
