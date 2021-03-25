import styled from "styled-components";

export const Container = styled.div`
  height: 200px;
  min-width: 350px;
  background: white;
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;

  &:hover {
    background-color: black;
    opacity: 0.5;
  }
`;
