import { Routes, Route } from "react-router";
import styled, { createGlobalStyle } from "styled-components";
import Header from "./components/Home/Header";
import Main from "./components/Home/Main";
import Movie from "./components/Movie/Movie";

function App() {
  return (
    <Container>
      <GlobalStyle />
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/movie/*" element={<Movie />} />
      </Routes>
    </Container>
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
