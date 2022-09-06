import PopularBox from "./Popular/PopularBox";
import Slider from "./Slider";
import UpcomingBox from "./Upcoming/UpcomingBox";
import { useEffect, useState } from "react";
import { useRecoilValue } from "recoil";
import { getPopular, getTrending } from "../../dataApi";
import { popularTab, trendingTab } from "../atoms/tabList";

export default function Main() {
  const popular = useRecoilValue(popularTab);
  const trending = useRecoilValue(trendingTab);

  const [popularList, setPopularList] = useState([]);
  const [trendingList, setTrendingList] = useState([]);

  useEffect(() => {
    const category = popular.find((tab) => tab.active).category;
    const getData = async () => {
      let { results } = await getPopular(category);
      setPopularList(results);
    };
    getData();
  }, [popular]);

  useEffect(() => {
    const category = trending.find((tab) => tab.active).category;
    const getData = async () => {
      let { results } = await getTrending(category);
      setTrendingList(results);
    };
    getData();
  }, [trending]);
  return (
    <>
      <Slider />
      <PopularBox sort={"popular"} list={popularList} tabList={popular} />
      <UpcomingBox />
      <PopularBox sort={"trending"} list={trendingList} tabList={trending} />
    </>
  );
}
