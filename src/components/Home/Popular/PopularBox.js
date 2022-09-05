import styled from "styled-components";
import PopularList from "./PopularList";
import Title from "../../common/Title";
import TabButton from "../../common/TabButton";

export default function PopularBox() {
  return (
    <Container>
      <HeaderBox>
        <Title sort={"popular"} />
        <TabButton />
      </HeaderBox>
      <PopularList />
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
