import { Link } from "react-router-dom";
import styled from "styled-components";
export default function CreditItem({ data }) {
  const { name, character, id, profile_path } = data;
  const imgUrl = `https://image.tmdb.org/t/p/w200${profile_path}`;

  return (
    <div>
      <Block>
        <Link to={`/person/${id}`}>
          <ImgBox>
            <img src={imgUrl} alt={name} />
          </ImgBox>
          <TextBox>
            <NameText>{name}</NameText>
            <Character>{character}</Character>
          </TextBox>
        </Link>
      </Block>
    </div>
  );
}
const Block = styled.div`
  width: 200px;
  overflow: hidden;
  margin: 20px;
  border-radius: 8px;
  box-shadow: 3px 3px 5px 5px rgba(0, 0, 0, 0.1);
`;

const ImgBox = styled.div`
  height: 300px;
  display: flex;
  justify-content: center;
  position: relative;
  overflow: hidden;
`;

const TextBox = styled.div`
  padding: 10px;
`;

const NameText = styled.h4`
  font-size: 1em;
  font-weight: 700;
  margin-top: 10px;
`;

const Character = styled.div`
  color: gray;
`;
