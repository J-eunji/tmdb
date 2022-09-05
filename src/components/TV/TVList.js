import styled from "styled-components";
import TVItem from "./TVItem";

export default function TVList({ label, state }) {
  return (
    <Container>
      <p>{label} TV</p>
      <ListBlock>
        {state.map((tv) => (
          <TVItem key={tv.id} tv={tv} />
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
