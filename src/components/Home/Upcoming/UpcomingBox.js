import styled from "styled-components";
import Title from "../../common/Title";
import UpcomingList from "./UpcomingList";

export default function UpcomingBox() {
  return (
    <Container>
      <Title sort={"upComing"} upcoming={true} />
      <UpcomingList />
    </Container>
  );
}

const Container = styled.div`
  padding: 20px;
  background-color: #ddd;
`;
