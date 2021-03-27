import { Wrapper, Wall } from "./styles";
import Link from "next/link";

const HomeBlock = ({ year }) => {
  const href = `/year/${year}`
  return (
    <Link href={href}>
      <Wrapper year={year}>
        <Wall>{<h1>{year}</h1>}</Wall>
      </Wrapper>
    </Link>
  );
};

export default HomeBlock;
