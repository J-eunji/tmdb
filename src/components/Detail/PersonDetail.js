import { useEffect, useState } from "react";
import { useLocation } from "react-router";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { getDetails } from "../../dataApi";

export default function PersonDetail() {
  const [person, setPerson] = useState([]);
  const [mvCredits, setMvCredits] = useState([]);
  const [tvCredits, setTvCredits] = useState([]);
  const { pathname } = useLocation();
  const {
    profile_path,
    known_for_department,
    gender,
    birthday,
    deathday,
    place_of_birth,
    biography,
    name,
  } = person;

  const profileList = [
    { id: 1, title: "유명분야", text: known_for_department },
    { id: 2, title: "성별", text: gender === 1 ? "여자" : "남자" },
    { id: 3, title: "생일", text: birthday },
    { id: 4, title: deathday && "사망일", text: deathday && deathday },
    { id: 6, title: "출생지", text: place_of_birth },
  ];

  const imgUrl = (width) => `https://image.tmdb.org/t/p/w${width}`;

  useEffect(() => {
    const fetchData = async () => {
      const { data } = await getDetails(pathname);
      setPerson(data);
    };
    fetchData();
  }, [pathname]);

  useEffect(() => {
    const fetchData = async () => {
      const { data } = await getDetails(`${pathname}/movie_credits`);
      setMvCredits(data.cast.slice(0, 10));
    };
    fetchData();
  }, [pathname]);

  useEffect(() => {
    const fetchData = async () => {
      const { data } = await getDetails(`${pathname}/tv_credits`);
      setTvCredits(data.cast.slice(0, 10));
    };
    fetchData();
  }, [pathname]);

  const creditList = [
    { path: "movie", name: "영화", list: mvCredits },
    { path: "tv", name: "TV", list: tvCredits },
  ];

  return (
    <Container>
      <ProfileBox>
        <img src={imgUrl(300) + profile_path}></img>
        <Title>인물 정보</Title>
        {profileList.map((profile) => (
          <SubBox>
            <SubTitle>{profile.title}</SubTitle>
            <SubText>{profile.text}</SubText>
          </SubBox>
        ))}
      </ProfileBox>
      <WorkBox>
        <Title style={{ fontSize: `2.5em` }}>{name}</Title>
        <BiographyBox>
          <SubTitle>약력</SubTitle>
          <SubText>{biography ? biography : "없음"}</SubText>
        </BiographyBox>
        <CreditBox>
          {creditList.map((obj) => (
            <>
              <SubTitle>{obj.name} 출연작</SubTitle>
              <CreditList>
                {obj.list.map(
                  (credit) =>
                    credit.poster_path && (
                      <Link to={`/${obj.path}/${credit.id}`}>
                        <CreditItem>
                          <img src={imgUrl(154) + credit.poster_path} />
                          <p>{credit.title || credit.name}</p>
                        </CreditItem>
                      </Link>
                    )
                )}
              </CreditList>
            </>
          ))}
        </CreditBox>
      </WorkBox>
    </Container>
  );
}

const Container = styled.div`
  margin: 20px 230px;
  display: flex;
`;

const ProfileBox = styled.div`
  margin-right: 30px;
  img {
    border-radius: 8px;
  }
`;

const Title = styled.p`
  font-size: 1.5em;
  font-weight: 700;
`;

const SubBox = styled.div`
  margin: 15px 0;
`;

const SubTitle = styled.p`
  font-size: 1.3em;
`;

const SubText = styled.p`
  font-size: 1.2em;
`;

const WorkBox = styled.div``;

const BiographyBox = styled.div`
  margin: 20px 0;
`;
const CreditBox = styled.div``;
const CreditList = styled.div`
  display: flex;
  overflow-x: scroll;
  margin-top: 10px;
  width: 1160px;
`;

const CreditItem = styled.div`
  display: inline-block;
  img {
    width: 154px;
    height: 200px;
    border-radius: 8px;
  }
  p {
    text-align: center;
  }

  margin-left: 10px;
`;
