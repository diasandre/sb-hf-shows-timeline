import logo from "../../public/logo.png";
import {
  HeaderContainer,
  Logo,
  SubTitle,
  Title,
  TitleWrapper,
  LogoWrapper,
} from "./styles";
import Link from "next/link";

const Header = () => {
  return (
    <HeaderContainer>
      <LogoWrapper>
        <Link href="/">
          <Logo src={logo} />
        </Link>
      </LogoWrapper>
      <Link href="/">
        <TitleWrapper>
          <Title>Super Bowl</Title>
          <SubTitle>Halftime Show Timeline</SubTitle>
        </TitleWrapper>
      </Link>
    </HeaderContainer>
  );
};

export default Header;
