import { SiThemoviedatabase } from "react-icons/si";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Search from "./Search";

export default function Header() {
  const menuList = [
    {
      key: "movie",
      name: "영화",
      list: [
        { text: "인기", path: "popular" },
        { text: "현재 상영중", path: "now_playing" },
        { text: "개봉 예정", path: "upcoming" },
        { text: "높은 평점", path: "top_rated" },
      ],
    },
    {
      key: "tv",
      name: "TV",
      list: [
        { text: "인기", path: "popular" },
        { text: "오늘 방영", path: "airing_today" },
        { text: "방영중", path: "on_the_air" },
        { text: "높은 평점", path: "top_rated" },
      ],
    },
    {
      key: "person",
      name: "인물",
      list: [
        {
          text: "인기 인물",
          path: "popular",
        },
      ],
    },
  ];
  return (
    <Container>
      <Link to={"/"}>
        <Logo>
          <SiThemoviedatabase size={55} />
        </Logo>
      </Link>
      <GnbList>
        {menuList.map((menu, idx) => (
          <MenuList key={idx}>
            <Menu key={menu.name}>{menu.name}</Menu>
            <SubMenuList key={menu.key}>
              {menu.list.map((list) => (
                <Link to={`/${menu.key}/${list.path}`} key={list.text}>
                  <SubMenu key={list.path}>{list.text}</SubMenu>
                </Link>
              ))}
            </SubMenuList>
          </MenuList>
        ))}
      </GnbList>
      <Search />
    </Container>
  );
}

const Container = styled.header`
  height: 100px;
  display: flex;
  align-items: center;
  padding: 20px 250px;
  user-select: none;
  background-color: #fff;
`;

const Logo = styled.h1`
  cursor: pointer;
  line-height: 30px;
`;

const GnbList = styled.div`
  display: flex;
  height: 100px;
  margin-left: 50px;
  flex: 1;
`;

const MenuList = styled.ul`
  margin: 20px 0;
  position: relative;
  line-height: 50px;
  ul {
    display: none;
  }
  &:hover {
    ul {
      display: block;
      z-index: 100;
    }
  }
`;

const Menu = styled.span`
  padding: 40px;
  cursor: pointer;
  font-size: 1.2em;
  font-weight: 700;
`;

const SubMenuList = styled.ul`
  width: 130px;
  padding: 10px;
  position: absolute;
  top: 70px;
  left: 0;
  background-color: #fff;
  border: 3px solid rgba(0, 0, 0, 0.1);
  border-radius: 8px;
`;

const SubMenu = styled.li`
  cursor: pointer;
  &:hover {
    background-color: #ddd;
  }
`;
