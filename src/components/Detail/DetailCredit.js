import { useEffect, useState } from "react";
import styled from "styled-components";
import { getDetails } from "../../dataApi";
import CreditItem from "./CreditItem";

export default function DetailCredit({ pathname }) {
  const [data, setData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const { data } = await getDetails(`${pathname}/credits`);
      setData(data.cast.slice(0, 10));
    };
    fetchData();
  }, [pathname]);

  return (
    <div>
      <Title>주요 출연진</Title>
      <CreditList>
        {data.map((data) => (
          <CreditItem data={data} />
        ))}
      </CreditList>
    </div>
  );
}

const Title = styled.div`
  margin: 30px 0 0 250px;
  font-size: 1.4em;
  font-weight: 700;
`;

const CreditList = styled.div`
  display: flex;
  overflow-x: scroll;
  margin: 0 230px;
`;
