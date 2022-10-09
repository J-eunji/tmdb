import { useSetRecoilState } from "recoil";
import styled, { css } from "styled-components";
import { popularTab, trendingTab } from "../atoms/tabList";
import { useContext } from "react";
import { SortContext } from "../Home/Main";

export default function TabButton({ tabList }) {
  const sort = useContext(SortContext);

  const setPopularTab = useSetRecoilState(popularTab);
  const setTrendingTab = useSetRecoilState(trendingTab);
  const tabClick = ({ target: { name } }, id) => {
    name === "popular" &&
      setPopularTab(
        tabList.map((tab) => {
          return tab.id === id
            ? { ...tab, active: true }
            : { ...tab, active: false };
        })
      );
    name === "trending" &&
      setTrendingTab(
        tabList.map((tab) => {
          return tab.id === id
            ? { ...tab, active: true }
            : { ...tab, active: false };
        })
      );
  };

  const makeBtn = tabList.map((tab) => {
    return (
      <Button
        key={tab.id}
        active={tab.active}
        onClick={(e) => tabClick(e, tab.id)}
        name={sort}
      >
        {tab.icon}
        {tab.text}
      </Button>
    );
  });

  return <Container>{makeBtn}</Container>;
}

const Container = styled.div`
  display: flex;
  height: 30px;
  background: #fff;
  border: 1px solid #000;
  border-radius: 20px;
  margin-left: 10px;
`;

const Button = styled.button`
  display: flex;
  position: relative;
  padding: 0 20px;
  border: none;
  border-radius: 20px;
  justify-content: center;
  align-items: center;
  background-color: white;
  cursor: pointer;
  color: #000;
  font-size: 15px;
  ${({ active }) =>
    active &&
    css`
      background-color: #000;
      color: #fff;
    `}
`;
