import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  align-items: center;
  background-color: ${(props) => props.theme.backgrounds.dark};
`;

export const HeaderFilms = styled.div`
  display: flex;
  flex: 1;
  flex-direction: row;
  flex-wrap: wrap;
`;

export const HMovie = styled.div`
  width: 150px;
  margin: 30px;
  border-radius: 8px;
`;

export const Text = styled.h2`
  color: ${(props) => props.theme.colors.white};
`;
