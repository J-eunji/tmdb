import { useEffect, useState } from "react";
import styled from "styled-components";
import { getPopular } from "../../dataApi";
import Title from "../common/Title";
import MovieItem from "./MovieItem";

export default function MovieList() {
  const [movieList, setMovieList] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      let { results } = await getPopular("movie");
      setMovieList(results);
    };
    fetchData();
  }, []);

  return (
    <div>
      <Title sort="popular" margin="0 0 20px 0" />
      <ListBlock>
        {movieList.map((movie) => (
          <MovieItem key={movie.id} movie={movie} />
        ))}
      </ListBlock>
    </div>
  );
}

const ListBlock = styled.div`
  display: flex;
  flex-wrap: wrap;
`;
