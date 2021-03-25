import { Wrapper, Wall } from "./styles";

const HomeBlock = ({ year, link }) => {
  return (
    <Wrapper year={year}>
      <Wall>{<h1>{year}</h1>}</Wall>
    </Wrapper>
  );
};

export default HomeBlock;
