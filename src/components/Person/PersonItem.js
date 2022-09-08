import { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

export default function PersonItem({ person }) {
  const { profile_path, name, id, known_for } = person;
  const imgUrl = `https://image.tmdb.org/t/p/w200${profile_path}`;
  const title = known_for.map((mv) => mv.title);
  console.log(person);
  return (
    <Block>
      <Link to={`/person/${id}`}>
        <ImgBox>
          <img src={imgUrl} alt={name} />
        </ImgBox>
        <TextBox>
          <NameText>{name}</NameText>
          <KnownFor>{title}</KnownFor>
        </TextBox>
      </Link>
    </Block>
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

const KnownFor = styled.div`
  color: gray;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;
