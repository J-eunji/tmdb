import styled from "styled-components";
import { keyframes } from "styled-components";

export default function Loading() {
  return (
    <Block>
      <LoadingCircle />
    </Block>
  );
}

const rotate = keyframes`
    to{
        transform: rotate(360deg);
    }
`;

const Block = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: calc(100vh - 150px);
`;

const LoadingCircle = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  border: 5px solid #ddd;
  border-right: 5px solid #000;
  animation: ${rotate} 1s linear infinite;
`;
