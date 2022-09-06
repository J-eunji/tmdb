import styled from "styled-components";
import PopularItem from "./PopularItem";

export default function PopularList({ list, tabList }) {
  return (
    <ContentList>
      {list.map((item) => (
        <PopularItem key={item.id} popularItem={item} tabList={tabList} />
      ))}
    </ContentList>
  );
}

const ContentList = styled.div`
  display: flex;
  width: 100vw;
  height: 550px;
  margin: 10px 0 50px;
  padding: 0 30px;
  overflow-x: scroll;
`;
