import styled, { css } from "styled-components";
import { tabState } from "../atoms/tabList";
import { useRecoilState } from "recoil";

export default function TabButton() {
  const [tabList, setTabList] = useRecoilState(tabState);
  const tabClick = (id) => {
    setTabList(
      tabList.map((tab) => {
        return tab.id === id
          ? { ...tab, active: true }
          : { ...tab, active: false };
      })
    );
  };

  const makeBtn = tabList.map((tab) => {
    return (
      <Button key={tab.id} active={tab.active} onClick={() => tabClick(tab.id)}>
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
