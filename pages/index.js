import HomeBlock from "../components/HomeBlock";
import { Body } from "../styles/styles";

import data from "../shows.json";
import Header from "../components/Header";

const Home = () => {
  const values = data;
  const items = values.map((value) => {
    return <HomeBlock {...value}></HomeBlock>;
  });
  return (
    <>
      <Header />
      <Body>{items}</Body>
    </>
  );
};

export default Home;
