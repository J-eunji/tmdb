import styled from "styled-components";

export default function Title({ sort }) {
  const titleList = [
    { id: 0, text: "인기", sort: "popular", btn: true },
    { id: 1, text: "최신 예고편", sort: "upComing", btn: false },
    { id: 2, text: "주간 트렌딩", sort: "trending", btn: true },
  ];
  return (
    <Container>
      <h3>{titleList.find((title) => title.sort === sort).text}</h3>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  align-items: center;
  padding-left: 40px;
  height: 35px;
  h3 {
    font-size: 28px;
    line-height: 28px;
  }
`;
