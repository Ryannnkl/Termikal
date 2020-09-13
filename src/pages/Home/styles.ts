import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  align-items: center;
  background-color: ${(props) => props.theme.backgrounds.dark};
`;

export const Section = styled.div`
  display: flex;
  height: 100%;
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
`;

export const Terminals = styled.div`
  display: flex;
  flex: 1;
  background-color: ${(props) => props.theme.backgrounds.darkest};
`;

export const Text = styled.h2`
  color: ${(props) => props.theme.colors.white};
`;
