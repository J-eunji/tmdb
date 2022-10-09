import ContentBox from "./Content/ContentBox";
import Slider from "./Slider/Slider";
import UpcomingBox from "./Upcoming/UpcomingBox";
import { useEffect, useState } from "react";
import { useRecoilValue } from "recoil";
import { getPopular, getTrending } from "../../dataApi";
import { popularTab, trendingTab } from "../atoms/tabList";
import { createContext } from "react";

export const SortContext = createContext("");
export const ListContext = createContext([]);
export const TabListContext = createContext([]);

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
      <SortContext.Provider value={"popular"}>
        <ListContext.Provider value={popularList}>
          <TabListContext.Provider value={popular}>
            <ContentBox />
          </TabListContext.Provider>
        </ListContext.Provider>
      </SortContext.Provider>
      <UpcomingBox />
      <SortContext.Provider value={"trending"}>
        <ListContext.Provider value={trendingList}>
          <TabListContext.Provider value={trending}>
            <ContentBox />
          </TabListContext.Provider>
        </ListContext.Provider>
      </SortContext.Provider>
    </>
  );
}
