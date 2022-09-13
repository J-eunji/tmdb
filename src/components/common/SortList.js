import styled from "styled-components";
import SortItem from "./SortItem";

export default function SortList({ label, state, title, path }) {
  return (
    <Container>
      <p>
        {label} {title}
      </p>
      <ListBlock>
        {state.map((item) => (
          <SortItem key={item.id} item={item} path={path} />
        ))}
      </ListBlock>
    </Container>
  );
}

const Container = styled.div`
  padding: 20px;
  margin: 0 200px;
  p {
    margin: 20px 0 0 20px;
    font-size: 2em;
  }
`;
const ListBlock = styled.div`
  display: flex;
  flex-wrap: wrap;
`;
