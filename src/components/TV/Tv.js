import { Routes, Route } from "react-router";
import { useEffect, useState } from "react";
import DetailPage from "../Detail/DetailPage";
import {
  getPopular,
  getAiringToday,
  getOnTheAir,
  getTopRated,
} from "../../dataApi";
import SortList from "../common/SortList";

export default function Movie() {
  const [popular, setPopular] = useState([]);
  const [airingToday, setAiringToday] = useState([]);
  const [onTheAir, setOnTheAir] = useState([]);
  const [topRated, setTopRated] = useState([]);
  const tvList = [
    { label: "인기", path: "/popular", state: popular },
    { label: "오늘 방영", path: "/airing_today", state: airingToday },
    { label: "방영중", path: "/on_the_air", state: onTheAir },
    { label: "높은 평점", path: "/top_rated", state: topRated },
  ];

  useEffect(() => {
    const fetchData = async () => {
      let { results } = await getPopular("tv");
      setPopular(results);
    };
    fetchData();
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      let { results } = await getAiringToday();
      setAiringToday(results);
    };
    fetchData();
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      let { results } = await getOnTheAir();
      setOnTheAir(results);
    };
    fetchData();
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      let { results } = await getTopRated("tv");
      setTopRated(results);
    };
    fetchData();
  }, []);

  return (
    <div>
      <Routes>
        {tvList.map((sort) => (
          <Route
            path={sort.path}
            element={
              <SortList
                title="TV"
                path="tv"
                label={sort.label}
                state={sort.state}
              />
            }
          />
        ))}
        <Route path="/:id" element={<DetailPage />} />
      </Routes>
    </div>
  );
}
