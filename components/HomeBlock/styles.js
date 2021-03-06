import styled from "styled-components";

export const Wrapper = styled.div`
  height: 200px;
  min-width: 350px;
  background: white;
  flex: 1;
  background-image: url(${({ year }) => `../../gifs/${year}.gif`});
  background-size: cover;
  margin: 5px;
  cursor: pointer;
`;

export const Wall = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(0, 0, 0, 0.7);
  color: white;
  font-size: 1.5em;
  cursor: pointer;

  &:hover {
    background: rgba(0, 0, 0, 0.4);
  }
`;

export const BlockTitle = styled.h1`
  font-weight:400;
`
