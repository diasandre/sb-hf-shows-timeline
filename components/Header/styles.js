import styled from "styled-components";

export const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  min-height: 170px;
  text-align: left;
  padding-top: 20px;
  padding-left: 100px;
`;

export const Logo = styled.img`
  width: 100px;
  cursor: pointer;

  &:hover {
    width: 102px;
  }
`;

export const LogoWrapper = styled.div`
  min-width: 120px;
`;

export const TitleWrapper = styled.div`
  color: white;
  cursor: pointer;
`;

export const Title = styled.h1`
  margin: 0;
`;

export const SubTitle = styled.h2`
  font-weight:400;
  margin: 0;
`;
