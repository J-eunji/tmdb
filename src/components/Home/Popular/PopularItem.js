import styled from "styled-components";
import { Link } from "react-router-dom";
import Vote from "../../common/Vote";

export default function PopularItem({ popularItem }) {
  const {
    poster_path,
    title,
    release_date,
    vote_average,
    name,
    first_air_date,
    id,
  } = popularItem;
  const ImgUrl = "https://image.tmdb.org/t/p/w300";

  return (
    <ItemBox>
      <Link to={`/movie/${id}`}>
        <Img>
          <img src={ImgUrl + poster_path} alt={title || name} />
          <VoteBox>
            <Vote vote={vote_average} />
          </VoteBox>
        </Img>
        <p>{title || name}</p>
        <span>{release_date || first_air_date}</span>
      </Link>
    </ItemBox>
  );
}

const ItemBox = styled.div`
  width: 300px;
  height: 470px;
  display: flex;
  flex-direction: column;
  position: relative;
  & + & {
    margin-left: 20px;
  }
  p {
    font-size: 1.2em;
    margin: 5px 0;
    white-space: nowrap;
    text-overflow: ellipsis;
  }
  span {
    font-size: 1em;
    color: gray;
  }
`;

const Img = styled.div`
  img {
    width: 300px;
    height: 450px;
    object-fit: cover;
    border-radius: 8px;
  }
`;

const VoteBox = styled.div`
  position: absolute;
  bottom: 30px;
  left: 10px;
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
`;
