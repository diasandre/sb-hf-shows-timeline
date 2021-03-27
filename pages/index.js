import data from "../shows.json";
import styled from "styled-components";
import HomeBlock from "../components/HomeBlock";
import logo from "../public/logo.png";

const Body = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  margin: 0 100px;
`;

const Header = styled.div`
  width: 100%;
  text-align: center;
  padding: 20px;
`;

const Home = () => {
  const values = data;
  const items = values.map((value) => {
    return <HomeBlock {...value}></HomeBlock>;
  });
  return (
    <>
      <Header>
        <img src={logo} width="100"></img>
      </Header>
      <Body>{items}</Body>
    </>
  );
};

export default Home;
