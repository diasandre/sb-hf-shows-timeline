import HomeBlock from "../components/HomeBlock";
import { Body } from "../styles/styles";

import data from "../shows.json";
import Header from "../components/Header";
import styled from "styled-components";

const AddMoreSoon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 50px;
  background: #4c4c4c;
  flex: 1;
  margin: 5px 105px;
  color: white;
  font-size: 1.2em;
`;

const Home = () => {
  const values = data;
  const items = values.map((value) => {
    return <HomeBlock key={value.year} {...value}></HomeBlock>;
  });
  return (
    <>
      <Header />
      <Body>{items}</Body>
      <AddMoreSoon>adding more soon...</AddMoreSoon>
    </>
  );
};

export default Home;
