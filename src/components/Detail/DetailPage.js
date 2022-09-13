import { useEffect, useState } from "react";
import { useLocation } from "react-router";
import styled, { css } from "styled-components";
import { getDetails } from "../../dataApi";
import Loading from "../common/Loading";
import DetailCredit from "./DetailCredit";

export default function DetailPage() {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState([]);
  const [genre, setGenre] = useState([]);
  const { pathname } = useLocation();
  const {
    title,
    name,
    release_date,
    first_air_date,
    overview,
    poster_path,
    backdrop_path,
    tagline,
    runtime,
    episode_run_time,
  } = data;
  const hour = Math.floor(runtime / 60);
  const minutes = runtime % 60;
  const imgUrl = `https://image.tmdb.org/t/p/w342${poster_path}`;
  const backdropUrl = `https://image.tmdb.org/t/p/w1280/${backdrop_path}`;
  useEffect(() => {
    const fetchData = async () => {
      const { data } = await getDetails(pathname);
      setData(data);
      setIsLoading(false);
      setGenre(data.genres.map((genre) => genre.name));
    };
    fetchData();
  }, [pathname]);

  if (isLoading) return <Loading />;

  return (
    <Container>
      <Block backdropUrl={backdropUrl} isLoading={isLoading}>
        <Backdrop />
        <ImgBox>
          <img src={imgUrl} alt={title || name} />
        </ImgBox>
        <ContentBox>
          <TitleBox>
            <h3>{title || name}</h3>
            <span>
              ({release_date?.substr(0, 4) || first_air_date?.substr(0, 4)})
            </span>
          </TitleBox>
          <p>
            {release_date || first_air_date} / {genre.join()}{" "}
            {runtime
              ? `/ ${hour}시간
            ${minutes}분`
              : `/ ${episode_run_time}분`}
          </p>
          <TagLine>{tagline}</TagLine>
          <Summary>개요</Summary>
          <DescText>{overview || "개요 없음"}</DescText>
        </ContentBox>
      </Block>
      <DetailCredit pathname={pathname} />
    </Container>
  );
}

const Container = styled.div`
  padding: 20px 0;
`;

const Block = styled.div`
  display: flex;
  align-items: center;
  padding: 20px 300px;
  background: #ddd;
  box-sizing: border-box;

  ${({ backdropUrl }) => css`
    background-image: url(${backdropUrl});
  `}
  background-size: cover;
  background-repeat: no-repeat;
  position: relative;
`;

const Backdrop = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.4);
  backdrop-filter: blur(2px);
  top: 0;
  left: 0;
`;

const ImgBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
  width: 300px;
  height: 450px;
  overflow: hidden;
  margin-right: 20px;
  img {
    height: 100%;
    border-radius: 8px;
  }
  z-index: 10;
`;

const TitleBox = styled.div`
  display: flex;
  align-items: flex-end;
  h3 {
    font-size: 2em;
    font-weight: 700;
  }
  span {
    font-size: 1.8em;
  }
`;

const TagLine = styled.p`
  font-style: italic;
  font-size: 1.1em;
  color: #ddd;
  margin: 10px 0;
`;

const ContentBox = styled.div`
  z-index: 11;
  color: #fff;
`;

const DescText = styled.p`
  line-height: 1.5em;
  font-size: 1.1em;
`;

const Summary = styled.h4`
  margin-bottom: 10px;
  font-size: 1.3em;
  font-weight: 700;
`;
