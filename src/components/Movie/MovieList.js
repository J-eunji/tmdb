import styled from "styled-components";
import MovieItem from "./MovieItem";

export default function MovieList({ label, state }) {
  return (
    <Container>
      <p>{label} 영화</p>
      <ListBlock>
        {state.map((movie) => (
          <MovieItem key={movie.id} movie={movie} />
        ))}
      </ListBlock>
    </Container>
  );
}

const Container = styled.div`
  padding: 20px;
  p {
    margin: 20px 0 0 20px;
    font-size: 2em;
  }
`;
const ListBlock = styled.div`
  display: flex;
  flex-wrap: wrap;
`;
