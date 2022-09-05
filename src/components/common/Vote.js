import styled, { css } from "styled-components";

export default function Vote({ vote }) {
  const popularityPercentage = Math.round(vote * 10);
  const color =
    popularityPercentage >= 70
      ? "#239c56"
      : popularityPercentage >= 40
      ? "#c8cf5e"
      : "#a72b2b";
  const status = Math.round((popularityPercentage * 360) / 100);
  return (
    <Container status={status} color={color}>
      <Circle />
      <p>{popularityPercentage}</p>
      <span>%</span>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 60px;
  height: 60px;
  border-radius: 50%;
  z-index: 2;
  outline: 5px solid #000;
  ${({ status, color }) =>
    css`
      background: conic-gradient(
        ${color} ${status}deg,
        #fff ${status}deg ${360 - status}deg
      );
    `}
`;

const Circle = styled.div`
  background-color: none;
  width: 50px;
  height: 50px;
  position: absolute;
  bottom: 5px;
  left: 5px;
  background-color: #000;
  border-radius: 50%;
  z-index: 1;
`;
