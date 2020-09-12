import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  height: 100%;
  width: 75px;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  background-color: ${(props) => props.theme.backgrounds.lighter};
`;

export const Button = styled.div`
  display: flex;
  width: 50px;
  height: 50px;
  border-radius: 8px;
  margin: 10px 0;
  align-items: center;
  justify-content: center;
  background-color: ${(props) => props.theme.backgrounds.lightest};
  cursor: pointer;
`;
