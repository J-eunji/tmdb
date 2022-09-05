import { Routes, Route } from "react-router";
import { useEffect, useState } from "react";
import DetailPage from "../Detail/DetailPage";
import MovieList from "./MovieList";
import {
  getPopular,
  getNowPlaying,
  getUpcoming,
  getTopRated,
} from "../../dataApi";

export default function Movie() {
  const [popular, setPopular] = useState([]);
  const [nowPlaying, setNowPlaying] = useState([]);
  const [upcoming, setUpcoming] = useState([]);
  const [topRated, setTopRated] = useState([]);
  const movieList = [
    { label: "인기", path: "/popular", state: popular },
    { label: "현재 상영중", path: "/now_playing", state: nowPlaying },
    { label: "개봉 예정", path: "/upcoming", state: upcoming },
    { label: "높은 평점", path: "/top_rated", state: topRated },
  ];

  useEffect(() => {
    const fetchData = async () => {
      let { results } = await getPopular("movie");
      setPopular(results);
    };
    fetchData();
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      let { results } = await getNowPlaying();
      setNowPlaying(results);
    };
    fetchData();
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      let { results } = await getUpcoming();
      setUpcoming(results);
    };
    fetchData();
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      let { results } = await getTopRated("movie");
      setTopRated(results);
    };
    fetchData();
  }, []);

  return (
    <div>
      <Routes>
        {movieList.map((sort) => (
          <Route
            path={sort.path}
            element={<MovieList label={sort.label} state={sort.state} />}
          />
        ))}
        <Route path="/:id" element={<DetailPage />} />
      </Routes>
    </div>
  );
}
