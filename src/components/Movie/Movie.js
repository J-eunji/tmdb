import { Routes, Route } from "react-router";
import DetailPage from "../Detail/DetailPage";
import MovieList from "./MovieList";

export default function Movie() {
  return (
    <div>
      <Routes>
        <Route path="/popular" element={<MovieList />} />
        <Route path="/:id" element={<DetailPage />} />
      </Routes>
    </div>
  );
}
