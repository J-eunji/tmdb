import styled from "styled-components";
import { BsPersonFill } from "react-icons/bs";
import { GiFilmStrip, GiTv } from "react-icons/gi";
import { Link } from "react-router-dom";

export default function SearchItem({ result }) {
  const { media_type } = result;
  if (media_type === "person")
    return (
      <Link to={`/person/${result.id}`}>
        <Block>
          <BsPersonFill />
          <p>{result.name}</p>
        </Block>
      </Link>
    );
  if (media_type === "movie")
    return (
      <Link to={`/movie/${result.id}`}>
        <Block>
          <GiFilmStrip />
          <p>{result.title}</p>
        </Block>
      </Link>
    );
  if (media_type === "tv")
    return (
      <Link to={`/tv/${result.id}`}>
        <Block>
          <GiTv />
          <p>{result.name}</p>
        </Block>
      </Link>
    );
}

const Block = styled.div`
  display: flex;
  align-items: center;
  padding: 10px;
  background-color: #fff;
  cursor: pointer;
  font-size: 1.2em;
  p {
    margin-left: 8px;
    flex: 1;
  }
  &:hover {
    background-color: lightgray;
  }
`;
