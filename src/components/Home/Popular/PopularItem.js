import styled, { css } from "styled-components";
import { Link } from "react-router-dom";

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
  const popularityPercentage = Math.round(vote_average * 10);
  const color =
    popularityPercentage >= 70
      ? "#239c56"
      : popularityPercentage >= 40
      ? "#c8cf5e"
      : "#a72b2b";
  const status = Math.round((popularityPercentage * 360) / 100);
  return (
    <ItemBox>
      <Link to={`/movie/${id}`}>
        <Img>
          <img src={ImgUrl + poster_path} alt={title || name} />
        </Img>
        <Popularity status={status} color={color}>
          <Circle />
          <p>{popularityPercentage}</p>
          <span>%</span>
        </Popularity>
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

const Popularity = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  bottom: 40px;
  left: 20px;
  width: 60px;
  height: 60px;
  border-radius: 50%;
  z-index: 2;
  outline: 5px solid #000;
  ${({ status, backStatus, color }) =>
    css`
      background: conic-gradient(
        ${color} ${status}deg,
        #fff ${status}deg ${360 - status}deg
      );
    `}
  p {
    color: #fff;
    font-size: 0.9em;
    margin: 0;
    z-index: 2;
  }
  span {
    color: #fff;
    font-size: 5px;
    z-index: 2;
  }
`;

const Circle = styled.div`
  background-color: none;
  width: 50px;
  height: 50px;
  position: absolute;
  bottom: 5px;
  left: 5px;
  background-color: #000;
  border-radius: 50%;
  z-index: 1;
`;
