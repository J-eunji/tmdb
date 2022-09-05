import styled, { css } from "styled-components";
import UpcomingItem from "./UpcomingItem";
import UpcomingVideo from "./UpcomingVideo";
import { getVideos, getUpcoming } from "../../../dataApi";
import { useEffect, useState } from "react";
import { tabState } from "../../atoms/tabList";
import { modalState, videoUrlState } from "../../atoms/modal";
import { useRecoilValue } from "recoil";

export default function UpcomingList() {
  const [movieList, setMovieList] = useState([]);
  const [videoList, setVideoList] = useState([]);
  const tabList = useRecoilValue(tabState);
  const imgUrl = "https://image.tmdb.org/t/p/original";
  const modal = useRecoilValue(modalState);
  const videoUrl = useRecoilValue(videoUrlState);

  useEffect(() => {
    const getResults = async () => {
      let { results } = await getUpcoming();
      setMovieList(results.filter((obj) => obj.backdrop_path !== null));
    };
    getResults();
  }, []);

  useEffect(() => {
    const getVideoList = async () => {
      let data = await getVideos(movieList);
      let idresults = data.map((obj) => obj.data);
      let results = idresults.map((obj) => obj.results);
      let resultdata = results.map((obj) =>
        obj[0] !== undefined ? obj[0] : {}
      );
      const delIndex = resultdata.map((video, idx) =>
        video.key === undefined ? idx : 1000
      );
      setMovieList(
        movieList.map((movie, idx) => idx !== delIndex[idx] && movie)
      );
      setVideoList(
        resultdata.map((video, idx) => idx !== delIndex[idx] && video)
      );
    };
    getVideoList();
  }, [movieList, tabList]);

  return (
    <ContentList imgUrl={imgUrl}>
      {movieList.length > 0 &&
        movieList.map(
          (movie, idx) =>
            movie && (
              <UpcomingItem
                key={idx}
                idx={idx}
                movie={movie}
                videoList={videoList}
              />
            )
        )}
      {modal && <UpcomingVideo videoUrl={videoUrl} />}
    </ContentList>
  );
}

const ContentList = styled.div`
  display: flex;
  width: 100vw;
  height: 550px;
  margin: 20px 0 50px;
  padding: 0 30px;
  overflow-x: scroll;
  ${({ imgUrl, backdropPath }) =>
    css`
      background-image: ${imgUrl}${backdropPath};
    `}
  position: relative;
`;
