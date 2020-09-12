import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex: 1;
  align-items: flex-start;
  justify-content: flex-start;
`;

export const Content = styled.div``;

export const Path = styled.p`
  font-size: 14px;
  color: ${props => props.theme.colors.green};
  line-height: 20px;
`;

export const Command = styled.input`
  color: ${props => props.theme.colors.white};
`;