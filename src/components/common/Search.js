import { BiSearchAlt2 } from "react-icons/bi";
import styled from "styled-components";
import { useEffect, useState } from "react";
import { getSearch } from "../../dataApi";
import SearchItem from "./SearchItem";

const debounce = (func, wait) => {
  let timer;
  return function (...rest) {
    if (timer) {
      clearTimeout(timer);
    }
    timer = setTimeout(() => {
      func.apply(this, rest);
    }, wait);
  };
};

export default function Search() {
  const [query, setQuery] = useState("");
  const [searchList, setSearchList] = useState([]);

  const handleQuery = debounce(setQuery, 300);
  useEffect(() => {
    if (query === "") return setSearchList([]);
    getSearch(query).then((res) => setSearchList(res.results));
  }, [query]);

  return (
    <Container>
      <Input
        type="text"
        placeholder="영화 제목, TV 제목, 배우 이름"
        onChange={(e) => handleQuery(e.target.value)}
      />
      <BiSearchAlt2 size={30} cursor="pointer" />
      <SearchList>
        {searchList.map((result) => (
          <SearchItem key={result.id} result={result} />
        ))}
      </SearchList>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  align-items: center;
  width: 500px;
  height: 30px;
  position: relative;
`;

const Input = styled.input`
  width: 500px;
  height: 30px;
  margin-right: 5px;
  padding: 0 5px;
`;

const SearchList = styled.ul`
  position: absolute;
  top: 100%;
  left: -1px;
  width: 100%;
  height: 300px;
  overflow-y: scroll;
  border: 1px solid #ddd;
  border-bottom: none;
  z-index: 5;
`;
