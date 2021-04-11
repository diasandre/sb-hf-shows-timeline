import { Wrapper, Wall, BlockTitle, AddMoreSoon } from "./styles";
import Link from "next/link";

const HomeBlock = ({ year }) => {
  const href = `/year/${year}`;
  return (
    <Link href={href}>
      <Wrapper year={year}>
        <Wall>
          <BlockTitle>{year}</BlockTitle>
        </Wall>
      </Wrapper>
    </Link>
  );
};

export default HomeBlock;
