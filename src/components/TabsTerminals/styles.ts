import styled from "styled-components";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";

export const TabsContent = styled(Tabs)``;
export const TabListContent = styled(TabList)`
  display: flex;
  flex-direction: row;
  align-items: center;
  list-style: none;
`;

export const TabTitle = styled(Tab)`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${(props) => props.theme.backgrounds.dark};
  border: 1px solid ${(props) => props.theme.backgrounds.darkest};
  cursor: pointer;
  &::after {
    transform: skewX(25deg);
  }
`;

export const TabContent = styled(TabPanel)``;
