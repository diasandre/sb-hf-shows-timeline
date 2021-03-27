import logo from "../../public/logo.png";
import { HeaderContainer } from "./styles";
import Link from "next/link";

const Header = () => {
  return (
    <HeaderContainer>
      <Link href="/">
        <img src={logo} width="100"></img>
      </Link>
    </HeaderContainer>
  );
};

export default Header;
