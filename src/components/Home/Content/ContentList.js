import styled, { css } from "styled-components";
import ContentItem from "./ContentItem";
import { useContext } from "react";
import { ListContext, SortContext } from "../../Home/Main";

export default function ContentList() {
  const sort = useContext(SortContext);
  const list = useContext(ListContext);

  return (
    <Container sort={sort}>
      {list.map((item) => (
        <ContentItem key={item.id} popularItem={item} />
      ))}
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  width: 100vw;
  height: 550px;
  margin: 10px 0 50px;
  padding: 0 30px;
  overflow-x: scroll;
  ${({ sort }) =>
    sort === "trending" &&
    css`
      background-image: url("https://www.themoviedb.org/assets/2/v4/misc/trending-bg-39afc2a5f77e31d469b25c187814c0a2efef225494c038098d62317d923f8415.svg");
      background-repeat: no-repeat;
      background-size: cover;
    `}
`;
