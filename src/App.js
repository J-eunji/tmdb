import { Routes, Route } from "react-router";
import { RecoilRoot } from "recoil";
import styled, { createGlobalStyle } from "styled-components";
import Header from "./components/common/Header";
import Main from "./components/Home/Main";
import Movie from "./components/Movie/Movie";
import Person from "./components/Person/Person";
import TV from "./components/TV/TV";

function App() {
  return (
    <RecoilRoot>
      <Container>
        <GlobalStyle />
        <Header />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/movie/*" element={<Movie />} />
          <Route path="/tv/*" element={<TV />} />
          <Route path="/person/*" element={<Person />} />
        </Routes>
      </Container>
    </RecoilRoot>
  );
}

const GlobalStyle = createGlobalStyle`
  * {
    list-style: none;
    box-sizing: border-box;
    text-decoration: none;
    padding: 0;
    margin: 0;
  }
  a {
    color: #000;
  }

`;

const Container = styled.div`
  overflow-x: hidden;
`;

export default App;
