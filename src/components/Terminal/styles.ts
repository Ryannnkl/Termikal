import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex: 1;
  align-items: flex-start;
  justify-content: flex-start;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
`;

export const Path = styled.p`
  font-size: 14px;
  color: ${(props) => props.theme.colors.green};
  line-height: 20px;
`;

export const Command = styled.input`
  width: auto;
  background-color: ${(props) => props.theme.backgrounds.darkest};
  border: 0 none;
  outline: 0;
  line-height: 20px;
  color: ${(props) => props.theme.colors.white};
  box-shadow: 0 0 0 0;
`;
