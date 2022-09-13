import { Link } from "react-router-dom";
import styled from "styled-components";
import Vote from "./Vote";

export default function SortItem({ item, path, ref }) {
  const {
    id,
    title,
    release_date,
    poster_path,
    vote_average,
    name,
    first_air_date,
    profile_path,
    known_for,
  } = item;
  const imgUrl =
    poster_path !== undefined
      ? `https://image.tmdb.org/t/p/w200${poster_path}`
      : `https://image.tmdb.org/t/p/w200${profile_path}`;
  const mainTitle = known_for?.map((mv) => mv.title);
  return (
    <Block ref={ref}>
      <Link to={`/${path}/${id}`}>
        <ImgBox>
          <img src={imgUrl} alt={title || name} />
          {vote_average && (
            <VoteBox>
              <Vote vote={vote_average} />
            </VoteBox>
          )}
        </ImgBox>
        <TextBox>
          <TitleText>{title || name}</TitleText>
          <ReleaseDate>
            {release_date || first_air_date || mainTitle.join(", ")}
          </ReleaseDate>
        </TextBox>
      </Link>
    </Block>
  );
}

const Block = styled.div`
  width: 200px;
  overflow: hidden;
  margin: 20px;
  border-radius: 8px;
  box-shadow: 3px 3px 5px 5px rgba(0, 0, 0, 0.1);
`;

const ImgBox = styled.div`
  height: 300px;
  display: flex;
  justify-content: center;
  position: relative;
  overflow: hidden;
`;

const TextBox = styled.div`
  padding: 10px;
`;

const TitleText = styled.h4`
  font-size: 1em;
  font-weight: 700;
  margin-top: 10px;
`;

const ReleaseDate = styled.div`
  color: gray;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
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
