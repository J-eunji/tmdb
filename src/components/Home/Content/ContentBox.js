import styled from "styled-components";
import ContentList from "./ContentList";
import Title from "../../common/Title";
import TabButton from "../../common/TabButton";

export default function ContentBox({ list, tabList }) {
  return (
    <Container>
      <HeaderBox>
        <Title />
        <TabButton tabList={tabList} />
      </HeaderBox>
      <ContentList list={list} tabList={tabList} />
    </Container>
  );
}

const Container = styled.div`
  padding: 30px 0px;
  overflow: hidden;
  h3 {
    font-size: 1.8em;
    height: 35px;
  }
`;

const HeaderBox = styled.div`
  display: flex;
  height: 35px;
`;
