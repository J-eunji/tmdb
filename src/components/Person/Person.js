import { useEffect } from "react";
import { useState } from "react";
import { Routes, Route } from "react-router";
import styled from "styled-components";
import { getPopular } from "../../dataApi";
import SortList from "../common/SortList";
import PersonDetail from "../Detail/PersonDetail";

export default function Person() {
  const [popular, setPopular] = useState([]);
  const personList = [{ label: "인기", path: "/popular", state: popular }];

  useEffect(() => {
    const fetchData = async () => {
      let { results } = await getPopular("person");
      setPopular(results);
    };
    fetchData();
  }, []);

  return (
    <div>
      <Routes>
        <Route
          path="/popular"
          element={personList.map((sort) => (
            <SortList
              title="인물"
              path="person"
              label={sort.label}
              state={sort.state}
            />
          ))}
        />
        <Route path="/:id" element={<PersonDetail />} />
      </Routes>
    </div>
  );
}
