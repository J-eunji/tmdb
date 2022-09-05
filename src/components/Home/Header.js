import { BiSearchAlt2 } from "react-icons/bi";
import { SiThemoviedatabase } from "react-icons/si";
import { Link } from "react-router-dom";
import styled from "styled-components";

export default function Header() {
  const menu = [
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
        { text: "TV 방영중", path: "on_the_air" },
        { text: "높은 평점", path: "top_rated" },
      ],
    },
    {
      id: 3,
      name: "인물",
      list: [
        {
          id: 3,
          text: "인기 인물",
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
        {menu.map((menu) => (
          <MenuList>
            <Menu>{menu.name}</Menu>
            <SubMenuList>
              {menu.list.map((list) => (
                <Link to={`/${menu.key}/${list.path}`}>
                  <SubMenu>{list.text}</SubMenu>
                </Link>
              ))}
            </SubMenuList>
          </MenuList>
        ))}
      </GnbList>
      <SearchBox>
        <input type="text" placeholder="영화 제목, TV 제목, 배우 이름" />
        <BiSearchAlt2 size={30} cursor="pointer" />
      </SearchBox>
    </Container>
  );
}

const Container = styled.header`
  height: 100px;
  display: flex;
  align-items: center;
  padding: 20px 50px;
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

const SearchBox = styled.div`
  display: flex;
  input {
    width: 300px;
    height: 30px;
    margin-right: 5px;
    padding: 0 5px;
  }
`;
