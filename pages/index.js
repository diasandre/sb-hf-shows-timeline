import data from "../shows.json";
import styled from "styled-components";
import HomeBlock from "../components/HomeBlock";

const Body = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  padding: 100px;
`;

const Home = () => {
  const values = data;
  const items = values.map((value) => {
    return <HomeBlock {...value}></HomeBlock>;
  });
  return <Body>{items}</Body>;
};

export default Home;
