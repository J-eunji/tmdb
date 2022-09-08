import { useEffect } from "react";
import { useState } from "react";
import { Routes, Route } from "react-router";
import styled from "styled-components";
import { getPopular } from "../../dataApi";
import PersonDetail from "../Detail/PersonDetail";
import PersonItem from "./PersonItem";

export default function Person() {
  const [popular, setPopular] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      let { results } = await getPopular("person");
      setPopular(results);
    };
    fetchData();
  }, []);

  console.log(popular);

  return (
    <div>
      <Container>
        <p>인기 인물</p>
        <ListBlock>
          <Routes>
            <Route
              path="/popular"
              element={popular.map((person) => (
                <PersonItem key={person.id} person={person} />
              ))}
            />
            <Route path="/:id" element={<PersonDetail />} />
          </Routes>
        </ListBlock>
      </Container>
    </div>
  );
}

const Container = styled.div`
  padding: 20px;
  p {
    margin: 20px 0 0 20px;
    font-size: 2em;
  }
`;
const ListBlock = styled.div`
  display: flex;
  flex-wrap: wrap;
`;
