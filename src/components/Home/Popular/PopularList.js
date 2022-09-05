import { useEffect, useState } from "react";
import { useRecoilValue } from "recoil";
import styled from "styled-components";
import { getPopular } from "../../../dataApi";
import PopularItem from "./PopularItem";
import { tabState } from "../../atoms/tabList";

export default function PopularList() {
  const tabList = useRecoilValue(tabState);
  const [popularList, setPopularList] = useState([]);

  useEffect(() => {
    const category = tabList.find((tab) => tab.active).category;
    const getData = async () => {
      let { results } = await getPopular(category);
      setPopularList(results);
    };
    getData();
  }, [tabList]);

  return (
    <ContentList>
      {popularList.map((popularItem) => (
        <PopularItem key={popularItem.id} popularItem={popularItem} />
      ))}
    </ContentList>
  );
}

const ContentList = styled.div`
  display: flex;
  width: 100vw;
  height: 550px;
  margin: 10px 0 50px;
  padding: 0 30px;
  overflow-x: scroll;
`;
